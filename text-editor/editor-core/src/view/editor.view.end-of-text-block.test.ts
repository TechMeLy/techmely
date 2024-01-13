import ist from "ist";
import { TextSelection } from "techmely-editor-state";
import { a, doc, p, schema } from "techmely-editor-test-builder";
import { Decoration, DecorationSet } from "techmely-editor-view";
import { tempEditor } from "./view";

describe("EditorView.endOfTextblock", () => {
  it("works at the left side of a textblock", () => {
    const view = tempEditor({ doc: doc(p("a"), p("<a>bcd")) });
    ist(view.endOfTextblock("left"));
    ist(view.endOfTextblock("backward"));
    ist(!view.endOfTextblock("right"));
    ist(!view.endOfTextblock("forward"));
  });

  it("works at the right side of a textblock", () => {
    const view = tempEditor({ doc: doc(p("abc<a>"), p("d")) });
    ist(!view.endOfTextblock("left"));
    ist(!view.endOfTextblock("backward"));
    ist(view.endOfTextblock("right"));
    ist(view.endOfTextblock("forward"));
  });

  it("works in the middle of a textblock", () => {
    const view = tempEditor({ doc: doc(p("a<a>b")) });
    ist(!view.endOfTextblock("left"));
    ist(!view.endOfTextblock("backward"));
    ist(!view.endOfTextblock("right"));
    ist(!view.endOfTextblock("forward"));
  });

  it("works at the start of the document", () => {
    const view = tempEditor({ doc: doc(p("<a>bcd")) });
    ist(view.endOfTextblock("left"));
    ist(view.endOfTextblock("backward"));
    ist(!view.endOfTextblock("right"));
    ist(!view.endOfTextblock("forward"));
  });

  it("works at the end of the document", () => {
    const view = tempEditor({ doc: doc(p("abc<a>")) });
    ist(!view.endOfTextblock("left"));
    ist(!view.endOfTextblock("backward"));
    ist(view.endOfTextblock("right"));
    ist(view.endOfTextblock("forward"));
  });

  it("works for vertical motion in a one-line block", () => {
    const view = tempEditor({ doc: doc(p("abc<a>")) });
    ist(view.endOfTextblock("up"));
    ist(view.endOfTextblock("down"));
  });

  it("works for vertical motion at the end of a wrapped block", () => {
    const view = tempEditor({ doc: doc(p(new Array(100).join("foo ") + "<a>foo")) });
    ist(!view.endOfTextblock("up"));
    ist(view.endOfTextblock("down"));
  });

  it("works for vertical motion at the start of a wrapped block", () => {
    const view = tempEditor({ doc: doc(p("foo <a>" + new Array(100).join("foo "))) });
    ist(view.endOfTextblock("up"));
    ist(!view.endOfTextblock("down"));
  });

  it("works for virtual motion when in a mark", () => {
    const view = tempEditor({
      doc: doc(
        p(
          a("fo<a>o "),
          new Array(50).join("foo "),
          a("fo<b>o "),
          new Array(50).join("foo "),
          a("fo<c>o"),
        ),
      ),
    });
    ist(view.endOfTextblock("up"));
    ist(!view.endOfTextblock("down"));
    view.dispatch(
      view.state.tr.setSelection(
        TextSelection.create(view.state.doc, (view.state.doc as any).tag.b),
      ),
    );
    ist(!view.endOfTextblock("up"));
    ist(!view.endOfTextblock("down"));
    view.dispatch(
      view.state.tr.setSelection(
        TextSelection.create(view.state.doc, (view.state.doc as any).tag.c),
      ),
    );
    ist(!view.endOfTextblock("up"));
    ist(view.endOfTextblock("down"));
  });

  // Bidi functionality only works when the browser has Selection.modify
  if (!(getSelection() as any).modify) return;

  it("works at the start of an RTL block", () => {
    const view = tempEditor({ doc: doc(p("<a>مرآة")) });
    view.dom.style.direction = "rtl";
    ist(!view.endOfTextblock("left"));
    ist(view.endOfTextblock("backward"));
    ist(view.endOfTextblock("right"));
    ist(!view.endOfTextblock("forward"));
  });

  it("works at the end of an RTL block", () => {
    const view = tempEditor({ doc: doc(p("مرآة<a>")) });
    view.dom.style.direction = "rtl";
    ist(view.endOfTextblock("left"));
    ist(!view.endOfTextblock("backward"));
    ist(!view.endOfTextblock("right"));
    ist(view.endOfTextblock("forward"));
  });

  it("works inside an RTL block", () => {
    const view = tempEditor({ doc: doc(p("مر<a>آة")) });
    view.dom.style.direction = "rtl";
    ist(!view.endOfTextblock("left"));
    ist(!view.endOfTextblock("backward"));
    ist(!view.endOfTextblock("right"));
    ist(!view.endOfTextblock("forward"));
  });

  it("works in a bidirectional block", () => {
    const view = tempEditor({ doc: doc(p("proseمرآة<a>")) });
    ist(!view.endOfTextblock("left"));
    ist(!view.endOfTextblock("backward"));
    ist(view.endOfTextblock("forward"));
  });

  it("works in a cursor wrapper", () => {
    const view = tempEditor({ doc: doc(p("foo<a>")) });
    view.dispatch(view.state.tr.setStoredMarks([schema.marks.em.create()]));
    ist(!view.endOfTextblock("backward"));
  });

  it("works after a widget", () => {
    const d = doc(p("fo<a>o")),
      w = document.createElement("span");
    w.textContent = "!";
    const view = tempEditor({
      doc: d,
      decorations() {
        return DecorationSet.create(d, [Decoration.widget(3, w)]);
      },
    });
    ist(!view.endOfTextblock("backward"));
  });
});
