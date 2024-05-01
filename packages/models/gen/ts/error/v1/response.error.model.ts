/* eslint-disable */
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "gen.go.error.v1";

export interface ErrorResponse {
  code: string;
  message: string;
  requestId: string;
  docs?: string | undefined;
}

function createBaseErrorResponse(): ErrorResponse {
  return { code: "", message: "", requestId: "", docs: undefined };
}

export const ErrorResponse = {
  encode(message: ErrorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.message !== "") {
      writer.uint32(18).string(message.message);
    }
    if (message.requestId !== "") {
      writer.uint32(26).string(message.requestId);
    }
    if (message.docs !== undefined) {
      writer.uint32(34).string(message.docs);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ErrorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseErrorResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.code = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.message = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.requestId = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.docs = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ErrorResponse {
    return {
      code: isSet(object.code) ? globalThis.String(object.code) : "",
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
      docs: isSet(object.docs) ? globalThis.String(object.docs) : undefined,
    };
  },

  toJSON(message: ErrorResponse): unknown {
    const obj: any = {};
    if (message.code !== "") {
      obj.code = message.code;
    }
    if (message.message !== "") {
      obj.message = message.message;
    }
    if (message.requestId !== "") {
      obj.requestId = message.requestId;
    }
    if (message.docs !== undefined) {
      obj.docs = message.docs;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ErrorResponse>, I>>(base?: I): ErrorResponse {
    return ErrorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ErrorResponse>, I>>(object: I): ErrorResponse {
    const message = createBaseErrorResponse();
    message.code = object.code ?? "";
    message.message = object.message ?? "";
    message.requestId = object.requestId ?? "";
    message.docs = object.docs ?? undefined;
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
