// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.176.1
//   protoc               unknown
// source: common/response.model.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Value } from "../google/protobuf/struct";

export const protobufPackage = "gen.go.common";

export interface BaseErrorResponse {
  code: string;
  message: string;
  requestId: string;
  docs?: string | undefined;
}

export interface BaseResponse {
  data?: any | undefined;
  code?: string | undefined;
  message?: string | undefined;
  metadata?: any | undefined;
}

function createBaseBaseErrorResponse(): BaseErrorResponse {
  return { code: "", message: "", requestId: "", docs: undefined };
}

export const BaseErrorResponse = {
  encode(message: BaseErrorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseErrorResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseErrorResponse();
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

  fromJSON(object: any): BaseErrorResponse {
    return {
      code: isSet(object.code) ? globalThis.String(object.code) : "",
      message: isSet(object.message) ? globalThis.String(object.message) : "",
      requestId: isSet(object.requestId) ? globalThis.String(object.requestId) : "",
      docs: isSet(object.docs) ? globalThis.String(object.docs) : undefined,
    };
  },

  toJSON(message: BaseErrorResponse): unknown {
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

  create<I extends Exact<DeepPartial<BaseErrorResponse>, I>>(base?: I): BaseErrorResponse {
    return BaseErrorResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BaseErrorResponse>, I>>(object: I): BaseErrorResponse {
    const message = createBaseBaseErrorResponse();
    message.code = object.code ?? "";
    message.message = object.message ?? "";
    message.requestId = object.requestId ?? "";
    message.docs = object.docs ?? undefined;
    return message;
  },
};

function createBaseBaseResponse(): BaseResponse {
  return { data: undefined, code: undefined, message: undefined, metadata: undefined };
}

export const BaseResponse = {
  encode(message: BaseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.data !== undefined) {
      Value.encode(Value.wrap(message.data), writer.uint32(10).fork()).ldelim();
    }
    if (message.code !== undefined) {
      writer.uint32(18).string(message.code);
    }
    if (message.message !== undefined) {
      writer.uint32(26).string(message.message);
    }
    if (message.metadata !== undefined) {
      Value.encode(Value.wrap(message.metadata), writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): BaseResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseBaseResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.data = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.code = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.message = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.metadata = Value.unwrap(Value.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): BaseResponse {
    return {
      data: isSet(object?.data) ? object.data : undefined,
      code: isSet(object.code) ? globalThis.String(object.code) : undefined,
      message: isSet(object.message) ? globalThis.String(object.message) : undefined,
      metadata: isSet(object?.metadata) ? object.metadata : undefined,
    };
  },

  toJSON(message: BaseResponse): unknown {
    const obj: any = {};
    if (message.data !== undefined) {
      obj.data = message.data;
    }
    if (message.code !== undefined) {
      obj.code = message.code;
    }
    if (message.message !== undefined) {
      obj.message = message.message;
    }
    if (message.metadata !== undefined) {
      obj.metadata = message.metadata;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<BaseResponse>, I>>(base?: I): BaseResponse {
    return BaseResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<BaseResponse>, I>>(object: I): BaseResponse {
    const message = createBaseBaseResponse();
    message.data = object.data ?? undefined;
    message.code = object.code ?? undefined;
    message.message = object.message ?? undefined;
    message.metadata = object.metadata ?? undefined;
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
