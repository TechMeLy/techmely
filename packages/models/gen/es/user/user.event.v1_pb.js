// @generated by protoc-gen-es v1.8.0
// @generated from file user/user.event.v1.proto (package techmely.user.event.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message techmely.user.event.v1.GetUserRequest
 */
export const GetUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "techmely.user.event.v1.GetUserRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message techmely.user.event.v1.GetUserResponse
 */
export const GetUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "techmely.user.event.v1.GetUserResponse",
  [],
);

/**
 * @generated from message techmely.user.event.v1.UpdateUserRequest
 */
export const UpdateUserRequest = /*@__PURE__*/ proto3.makeMessageType(
  "techmely.user.event.v1.UpdateUserRequest",
  () => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message techmely.user.event.v1.UpdateUserResponse
 */
export const UpdateUserResponse = /*@__PURE__*/ proto3.makeMessageType(
  "techmely.user.event.v1.UpdateUserResponse",
  [],
);

/**
 * @generated from message techmely.user.event.v1.UserChangePasswordRequest
 */
export const UserChangePasswordRequest = /*@__PURE__*/ proto3.makeMessageType(
  "techmely.user.event.v1.UserChangePasswordRequest",
  () => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message techmely.user.event.v1.UserChangePasswordResponse
 */
export const UserChangePasswordResponse = /*@__PURE__*/ proto3.makeMessageType(
  "techmely.user.event.v1.UserChangePasswordResponse",
  () => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message techmely.user.event.v1.ChangeUserEmailRequest
 */
export const ChangeUserEmailRequest = /*@__PURE__*/ proto3.makeMessageType(
  "techmely.user.event.v1.ChangeUserEmailRequest",
  () => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message techmely.user.event.v1.ChangeUserEmailResponse
 */
export const ChangeUserEmailResponse = /*@__PURE__*/ proto3.makeMessageType(
  "techmely.user.event.v1.ChangeUserEmailResponse",
  () => [
    { no: 1, name: "email", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

