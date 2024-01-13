import { compareDeep } from "../editor.utils";
import type { Attrs, MarkType, Schema } from "./editor.model.schema";

/// A mark is a piece of information that can be attached to a node,
/// such as it being emphasized, in code font, or a link. It has a
/// type and optionally a set of attributes that provide further
/// information (such as the target of the link). Marks are created
/// through a `Schema`, which controls which types exist and which
/// attributes they have.
export class Mark {
  /// @internal
  constructor(
    /// The type of this mark.
    readonly type: MarkType,
    /// The attributes associated with this mark.
    readonly attrs: Attrs,
  ) {}

  /// Given a set of marks, create a new set which contains this one as
  /// well, in the right position. If this mark is already in the set,
  /// the set itself is returned. If any marks that are set to be
  /// [exclusive](#model.MarkSpec.excludes) with this mark are present,
  /// those are replaced by this one.
  addToSet(set: readonly Mark[]): readonly Mark[] {
    let copy: Mark[] | undefined;
    let placed = false;
    for (let i = 0; i < set.length; i++) {
      const other = set[i];
      if (this.eq(other)) return set;
      if (this.type.excludes(other.type)) {
        if (!copy) copy = set.slice(0, i);
      } else if (other.type.excludes(this.type)) {
        return set;
      } else {
        if (!placed && other.type.rank > this.type.rank) {
          if (!copy) copy = set.slice(0, i);
          copy.push(this);
          placed = true;
        }
        if (copy) copy.push(other);
      }
    }
    if (!copy) copy = set.slice();
    if (!placed) copy.push(this);
    return copy;
  }

  /// Remove this mark from the given set, returning a new set. If this
  /// mark is not in the set, the set itself is returned.
  removeFromSet(set: readonly Mark[]): readonly Mark[] {
    for (let i = 0; i < set.length; i++)
      if (this.eq(set[i])) return set.slice(0, i).concat(set.slice(i + 1));
    return set;
  }

  /// Test whether this mark is in the given set of marks.
  isInSet(set: readonly Mark[]) {
    for (let i = 0; i < set.length; i++) if (this.eq(set[i])) return true;
    return false;
  }

  /// Test whether this mark has the same type and attributes as
  /// another mark.
  eq(other: Mark) {
    return this === other || (this.type === other.type && compareDeep(this.attrs, other.attrs));
  }

  /// Convert this mark to a JSON-serializeable representation.
  toJSON(): any {
    const obj: any = { type: this.type.name };
    for (const _ in this.attrs) {
      obj.attrs = this.attrs;
      break;
    }
    return obj;
  }

  /// Deserialize a mark from JSON.
  static fromJSON(schema: Schema, json: any) {
    if (!json) throw new RangeError("Invalid input for Mark.fromJSON");
    const type = schema.marks[json.type];
    if (!type) throw new RangeError(`There is no mark type ${json.type} in this schema`);
    return type.create(json.attrs);
  }

  /// Test whether two sets of marks are identical.
  static sameSet(a: readonly Mark[], b: readonly Mark[]) {
    if (a === b) return true;
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) if (!a[i].eq(b[i])) return false;
    return true;
  }

  /// Create a properly sorted mark set from null, a single mark, or an
  /// unsorted array of marks.
  static setFrom(marks?: Mark | readonly Mark[] | null): readonly Mark[] {
    if (!marks || (Array.isArray(marks) && marks.length === 0)) return Mark.none;
    if (marks instanceof Mark) return [marks];
    const copy = marks.slice();
    copy.sort((a, b) => a.type.rank - b.type.rank);
    return copy;
  }

  /// The empty set of marks.
  static none: readonly Mark[] = [];
}
