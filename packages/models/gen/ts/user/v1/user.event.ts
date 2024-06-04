// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.176.1
//   protoc               unknown
// source: user/v1/user.event.proto

/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Any } from "../../google/protobuf/any";
import {
  AuthStrategy,
  authStrategyFromJSON,
  authStrategyToJSON,
  UserStatus,
  userStatusFromJSON,
  userStatusToJSON,
} from "./user.model";
import Long = require("long");

export const protobufPackage = "gen.go.user.v1";

export interface CreateUserRequest {
  email: string;
  nickname: string;
  status: UserStatus;
  isEmailVerified: boolean;
  name: string;
  avatarUrl: string;
  firebaseUserId: string;
  authStrategy: AuthStrategy;
  openPlatform: string;
  utmCampaign: string;
  utmMedium: string;
  utmSource: string;
  metadata: Any | undefined;
}

export interface GetUserRequest {
  key: string;
  value: string;
}

export interface GetUserByAuthIdRequest {
  id: string;
}

export interface GetUsersPaginationRequest {
  tenantId: string;
  limit: number;
  page: number;
}

export interface GetUsersPaginationResponse {
  id: string;
}

export interface UpdateUserRequest {
  id: string;
}

export interface DeleteUserRequest {
  id: string;
}

export interface DeleteUserResponse {
  email: string;
}

function createBaseCreateUserRequest(): CreateUserRequest {
  return {
    email: "",
    nickname: "",
    status: 0,
    isEmailVerified: false,
    name: "",
    avatarUrl: "",
    firebaseUserId: "",
    authStrategy: 0,
    openPlatform: "",
    utmCampaign: "",
    utmMedium: "",
    utmSource: "",
    metadata: undefined,
  };
}

export const CreateUserRequest = {
  encode(message: CreateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.nickname !== "") {
      writer.uint32(26).string(message.nickname);
    }
    if (message.status !== 0) {
      writer.uint32(32).int32(message.status);
    }
    if (message.isEmailVerified !== false) {
      writer.uint32(40).bool(message.isEmailVerified);
    }
    if (message.name !== "") {
      writer.uint32(50).string(message.name);
    }
    if (message.avatarUrl !== "") {
      writer.uint32(58).string(message.avatarUrl);
    }
    if (message.firebaseUserId !== "") {
      writer.uint32(66).string(message.firebaseUserId);
    }
    if (message.authStrategy !== 0) {
      writer.uint32(72).int32(message.authStrategy);
    }
    if (message.openPlatform !== "") {
      writer.uint32(82).string(message.openPlatform);
    }
    if (message.utmCampaign !== "") {
      writer.uint32(90).string(message.utmCampaign);
    }
    if (message.utmMedium !== "") {
      writer.uint32(98).string(message.utmMedium);
    }
    if (message.utmSource !== "") {
      writer.uint32(106).string(message.utmSource);
    }
    if (message.metadata !== undefined) {
      Any.encode(message.metadata, writer.uint32(114).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 2:
          if (tag !== 18) {
            break;
          }

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.nickname = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.status = reader.int32() as any;
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.isEmailVerified = reader.bool();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.name = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.avatarUrl = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.firebaseUserId = reader.string();
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.authStrategy = reader.int32() as any;
          continue;
        case 10:
          if (tag !== 82) {
            break;
          }

          message.openPlatform = reader.string();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.utmCampaign = reader.string();
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.utmMedium = reader.string();
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.utmSource = reader.string();
          continue;
        case 14:
          if (tag !== 114) {
            break;
          }

          message.metadata = Any.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateUserRequest {
    return {
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      nickname: isSet(object.nickname) ? globalThis.String(object.nickname) : "",
      status: isSet(object.status) ? userStatusFromJSON(object.status) : 0,
      isEmailVerified: isSet(object.isEmailVerified) ? globalThis.Boolean(object.isEmailVerified) : false,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      avatarUrl: isSet(object.avatarUrl) ? globalThis.String(object.avatarUrl) : "",
      firebaseUserId: isSet(object.firebaseUserId) ? globalThis.String(object.firebaseUserId) : "",
      authStrategy: isSet(object.authStrategy) ? authStrategyFromJSON(object.authStrategy) : 0,
      openPlatform: isSet(object.openPlatform) ? globalThis.String(object.openPlatform) : "",
      utmCampaign: isSet(object.utmCampaign) ? globalThis.String(object.utmCampaign) : "",
      utmMedium: isSet(object.utmMedium) ? globalThis.String(object.utmMedium) : "",
      utmSource: isSet(object.utmSource) ? globalThis.String(object.utmSource) : "",
      metadata: isSet(object.metadata) ? Any.fromJSON(object.metadata) : undefined,
    };
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.nickname !== "") {
      obj.nickname = message.nickname;
    }
    if (message.status !== 0) {
      obj.status = userStatusToJSON(message.status);
    }
    if (message.isEmailVerified !== false) {
      obj.isEmailVerified = message.isEmailVerified;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.avatarUrl !== "") {
      obj.avatarUrl = message.avatarUrl;
    }
    if (message.firebaseUserId !== "") {
      obj.firebaseUserId = message.firebaseUserId;
    }
    if (message.authStrategy !== 0) {
      obj.authStrategy = authStrategyToJSON(message.authStrategy);
    }
    if (message.openPlatform !== "") {
      obj.openPlatform = message.openPlatform;
    }
    if (message.utmCampaign !== "") {
      obj.utmCampaign = message.utmCampaign;
    }
    if (message.utmMedium !== "") {
      obj.utmMedium = message.utmMedium;
    }
    if (message.utmSource !== "") {
      obj.utmSource = message.utmSource;
    }
    if (message.metadata !== undefined) {
      obj.metadata = Any.toJSON(message.metadata);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserRequest>, I>>(base?: I): CreateUserRequest {
    return CreateUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(object: I): CreateUserRequest {
    const message = createBaseCreateUserRequest();
    message.email = object.email ?? "";
    message.nickname = object.nickname ?? "";
    message.status = object.status ?? 0;
    message.isEmailVerified = object.isEmailVerified ?? false;
    message.name = object.name ?? "";
    message.avatarUrl = object.avatarUrl ?? "";
    message.firebaseUserId = object.firebaseUserId ?? "";
    message.authStrategy = object.authStrategy ?? 0;
    message.openPlatform = object.openPlatform ?? "";
    message.utmCampaign = object.utmCampaign ?? "";
    message.utmMedium = object.utmMedium ?? "";
    message.utmSource = object.utmSource ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Any.fromPartial(object.metadata)
      : undefined;
    return message;
  },
};

function createBaseGetUserRequest(): GetUserRequest {
  return { key: "", value: "" };
}

export const GetUserRequest = {
  encode(message: GetUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.key !== "") {
      writer.uint32(10).string(message.key);
    }
    if (message.value !== "") {
      writer.uint32(18).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.key = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserRequest {
    return {
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      value: isSet(object.value) ? globalThis.String(object.value) : "",
    };
  },

  toJSON(message: GetUserRequest): unknown {
    const obj: any = {};
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserRequest>, I>>(base?: I): GetUserRequest {
    return GetUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserRequest>, I>>(object: I): GetUserRequest {
    const message = createBaseGetUserRequest();
    message.key = object.key ?? "";
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseGetUserByAuthIdRequest(): GetUserByAuthIdRequest {
  return { id: "" };
}

export const GetUserByAuthIdRequest = {
  encode(message: GetUserByAuthIdRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUserByAuthIdRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUserByAuthIdRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUserByAuthIdRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetUserByAuthIdRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUserByAuthIdRequest>, I>>(base?: I): GetUserByAuthIdRequest {
    return GetUserByAuthIdRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUserByAuthIdRequest>, I>>(object: I): GetUserByAuthIdRequest {
    const message = createBaseGetUserByAuthIdRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseGetUsersPaginationRequest(): GetUsersPaginationRequest {
  return { tenantId: "", limit: 0, page: 0 };
}

export const GetUsersPaginationRequest = {
  encode(message: GetUsersPaginationRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tenantId !== "") {
      writer.uint32(10).string(message.tenantId);
    }
    if (message.limit !== 0) {
      writer.uint32(16).uint64(message.limit);
    }
    if (message.page !== 0) {
      writer.uint32(24).uint64(message.page);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsersPaginationRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsersPaginationRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tenantId = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.limit = longToNumber(reader.uint64() as Long);
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.page = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUsersPaginationRequest {
    return {
      tenantId: isSet(object.tenantId) ? globalThis.String(object.tenantId) : "",
      limit: isSet(object.limit) ? globalThis.Number(object.limit) : 0,
      page: isSet(object.page) ? globalThis.Number(object.page) : 0,
    };
  },

  toJSON(message: GetUsersPaginationRequest): unknown {
    const obj: any = {};
    if (message.tenantId !== "") {
      obj.tenantId = message.tenantId;
    }
    if (message.limit !== 0) {
      obj.limit = Math.round(message.limit);
    }
    if (message.page !== 0) {
      obj.page = Math.round(message.page);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUsersPaginationRequest>, I>>(base?: I): GetUsersPaginationRequest {
    return GetUsersPaginationRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUsersPaginationRequest>, I>>(object: I): GetUsersPaginationRequest {
    const message = createBaseGetUsersPaginationRequest();
    message.tenantId = object.tenantId ?? "";
    message.limit = object.limit ?? 0;
    message.page = object.page ?? 0;
    return message;
  },
};

function createBaseGetUsersPaginationResponse(): GetUsersPaginationResponse {
  return { id: "" };
}

export const GetUsersPaginationResponse = {
  encode(message: GetUsersPaginationResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetUsersPaginationResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetUsersPaginationResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetUsersPaginationResponse {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: GetUsersPaginationResponse): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetUsersPaginationResponse>, I>>(base?: I): GetUsersPaginationResponse {
    return GetUsersPaginationResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetUsersPaginationResponse>, I>>(object: I): GetUsersPaginationResponse {
    const message = createBaseGetUsersPaginationResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseUpdateUserRequest(): UpdateUserRequest {
  return { id: "" };
}

export const UpdateUserRequest = {
  encode(message: UpdateUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UpdateUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateUserRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: UpdateUserRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(base?: I): UpdateUserRequest {
    return UpdateUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateUserRequest>, I>>(object: I): UpdateUserRequest {
    const message = createBaseUpdateUserRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteUserRequest(): DeleteUserRequest {
  return { id: "" };
}

export const DeleteUserRequest = {
  encode(message: DeleteUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteUserRequest {
    return { id: isSet(object.id) ? globalThis.String(object.id) : "" };
  },

  toJSON(message: DeleteUserRequest): unknown {
    const obj: any = {};
    if (message.id !== "") {
      obj.id = message.id;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteUserRequest>, I>>(base?: I): DeleteUserRequest {
    return DeleteUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteUserRequest>, I>>(object: I): DeleteUserRequest {
    const message = createBaseDeleteUserRequest();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseDeleteUserResponse(): DeleteUserResponse {
  return { email: "" };
}

export const DeleteUserResponse = {
  encode(message: DeleteUserResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.email !== "") {
      writer.uint32(10).string(message.email);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeleteUserResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteUserResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.email = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteUserResponse {
    return { email: isSet(object.email) ? globalThis.String(object.email) : "" };
  },

  toJSON(message: DeleteUserResponse): unknown {
    const obj: any = {};
    if (message.email !== "") {
      obj.email = message.email;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteUserResponse>, I>>(base?: I): DeleteUserResponse {
    return DeleteUserResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteUserResponse>, I>>(object: I): DeleteUserResponse {
    const message = createBaseDeleteUserResponse();
    message.email = object.email ?? "";
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
