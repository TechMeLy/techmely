// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.1
// 	protoc        (unknown)
// source: account/v1/account.service.proto

package authv1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

var File_account_v1_account_service_proto protoreflect.FileDescriptor

var file_account_v1_account_service_proto_rawDesc = []byte{
	0x0a, 0x20, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2f, 0x76, 0x31, 0x2f, 0x61, 0x63, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x12, 0x0e, 0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e,
	0x76, 0x31, 0x1a, 0x1e, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2f, 0x76, 0x31, 0x2f, 0x61,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2e, 0x65, 0x76, 0x65, 0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x32, 0xe8, 0x06, 0x0a, 0x12, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x50, 0x6f, 0x72, 0x74, 0x12, 0x46, 0x0a, 0x05, 0x6c, 0x6f, 0x67,
	0x69, 0x6e, 0x12, 0x1c, 0x2e, 0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68,
	0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x1d, 0x2e, 0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76,
	0x31, 0x2e, 0x4c, 0x6f, 0x67, 0x69, 0x6e, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22,
	0x00, 0x12, 0x4f, 0x0a, 0x08, 0x72, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x12, 0x1f, 0x2e,
	0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x52,
	0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x20,
	0x2e, 0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e,
	0x52, 0x65, 0x67, 0x69, 0x73, 0x74, 0x65, 0x72, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x22, 0x00, 0x12, 0x49, 0x0a, 0x06, 0x6c, 0x6f, 0x67, 0x6f, 0x75, 0x74, 0x12, 0x1d, 0x2e, 0x67,
	0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x6f,
	0x67, 0x6f, 0x75, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1e, 0x2e, 0x67, 0x65,
	0x6e, 0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x4c, 0x6f, 0x67,
	0x6f, 0x75, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x79, 0x0a,
	0x16, 0x72, 0x65, 0x73, 0x65, 0x6e, 0x64, 0x56, 0x65, 0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x2d, 0x2e, 0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f,
	0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x73, 0x65, 0x6e, 0x64, 0x56,
	0x65, 0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x64, 0x65, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2e, 0x2e, 0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e,
	0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x52, 0x65, 0x73, 0x65, 0x6e, 0x64, 0x56, 0x65,
	0x72, 0x69, 0x66, 0x69, 0x63, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x43, 0x6f, 0x64, 0x65, 0x52, 0x65,
	0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x61, 0x0a, 0x0e, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x25, 0x2e, 0x67, 0x65, 0x6e,
	0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73,
	0x74, 0x1a, 0x26, 0x2e, 0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e,
	0x76, 0x31, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72,
	0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x58, 0x0a, 0x0b, 0x75,
	0x70, 0x64, 0x61, 0x74, 0x65, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x12, 0x22, 0x2e, 0x67, 0x65, 0x6e,
	0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x23,
	0x2e, 0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e,
	0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x45, 0x6d, 0x61, 0x69, 0x6c, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x5e, 0x0a, 0x0d, 0x76, 0x65, 0x72, 0x69, 0x66, 0x79, 0x41,
	0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x24, 0x2e, 0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e,
	0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x65, 0x72, 0x69, 0x66, 0x79, 0x41, 0x63,
	0x63, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x25, 0x2e, 0x67,
	0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x65,
	0x72, 0x69, 0x66, 0x79, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x73, 0x0a, 0x14, 0x76, 0x65, 0x72, 0x69, 0x66, 0x79, 0x41,
	0x63, 0x74, 0x69, 0x76, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4c, 0x69, 0x6e, 0x6b, 0x12, 0x2b, 0x2e,
	0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x56,
	0x65, 0x72, 0x69, 0x66, 0x79, 0x41, 0x63, 0x74, 0x69, 0x76, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4c,
	0x69, 0x6e, 0x6b, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x2c, 0x2e, 0x67, 0x65, 0x6e,
	0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x56, 0x65, 0x72, 0x69,
	0x66, 0x79, 0x41, 0x63, 0x74, 0x69, 0x76, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x4c, 0x69, 0x6e, 0x6b,
	0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x61, 0x0a, 0x0e, 0x66, 0x6f,
	0x72, 0x67, 0x6f, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x25, 0x2e, 0x67,
	0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74, 0x68, 0x2e, 0x76, 0x31, 0x2e, 0x46, 0x6f,
	0x72, 0x67, 0x6f, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x26, 0x2e, 0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74,
	0x68, 0x2e, 0x76, 0x31, 0x2e, 0x46, 0x6f, 0x72, 0x67, 0x6f, 0x74, 0x50, 0x61, 0x73, 0x73, 0x77,
	0x6f, 0x72, 0x64, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0xb2, 0x01,
	0x0a, 0x12, 0x63, 0x6f, 0x6d, 0x2e, 0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e, 0x61, 0x75, 0x74,
	0x68, 0x2e, 0x76, 0x31, 0x42, 0x13, 0x41, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x50, 0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x2c, 0x67, 0x69, 0x74,
	0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x74, 0x65, 0x63, 0x68, 0x6d, 0x65, 0x6c, 0x79,
	0x2f, 0x6d, 0x6f, 0x64, 0x65, 0x6c, 0x73, 0x2f, 0x61, 0x63, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x2f,
	0x76, 0x31, 0x3b, 0x61, 0x75, 0x74, 0x68, 0x76, 0x31, 0xa2, 0x02, 0x03, 0x47, 0x47, 0x41, 0xaa,
	0x02, 0x0e, 0x47, 0x65, 0x6e, 0x2e, 0x47, 0x6f, 0x2e, 0x41, 0x75, 0x74, 0x68, 0x2e, 0x56, 0x31,
	0xca, 0x02, 0x0e, 0x47, 0x65, 0x6e, 0x5c, 0x47, 0x6f, 0x5c, 0x41, 0x75, 0x74, 0x68, 0x5c, 0x56,
	0x31, 0xe2, 0x02, 0x1a, 0x47, 0x65, 0x6e, 0x5c, 0x47, 0x6f, 0x5c, 0x41, 0x75, 0x74, 0x68, 0x5c,
	0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02,
	0x11, 0x47, 0x65, 0x6e, 0x3a, 0x3a, 0x47, 0x6f, 0x3a, 0x3a, 0x41, 0x75, 0x74, 0x68, 0x3a, 0x3a,
	0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var file_account_v1_account_service_proto_goTypes = []interface{}{
	(*LoginRequest)(nil),                   // 0: gen.go.auth.v1.LoginRequest
	(*RegisterRequest)(nil),                // 1: gen.go.auth.v1.RegisterRequest
	(*LogoutRequest)(nil),                  // 2: gen.go.auth.v1.LogoutRequest
	(*ResendVerificationCodeRequest)(nil),  // 3: gen.go.auth.v1.ResendVerificationCodeRequest
	(*UpdatePasswordRequest)(nil),          // 4: gen.go.auth.v1.UpdatePasswordRequest
	(*UpdateEmailRequest)(nil),             // 5: gen.go.auth.v1.UpdateEmailRequest
	(*VerifyAccountRequest)(nil),           // 6: gen.go.auth.v1.VerifyAccountRequest
	(*VerifyActivationLinkRequest)(nil),    // 7: gen.go.auth.v1.VerifyActivationLinkRequest
	(*ForgotPasswordRequest)(nil),          // 8: gen.go.auth.v1.ForgotPasswordRequest
	(*LoginResponse)(nil),                  // 9: gen.go.auth.v1.LoginResponse
	(*RegisterResponse)(nil),               // 10: gen.go.auth.v1.RegisterResponse
	(*LogoutResponse)(nil),                 // 11: gen.go.auth.v1.LogoutResponse
	(*ResendVerificationCodeResponse)(nil), // 12: gen.go.auth.v1.ResendVerificationCodeResponse
	(*UpdatePasswordResponse)(nil),         // 13: gen.go.auth.v1.UpdatePasswordResponse
	(*UpdateEmailResponse)(nil),            // 14: gen.go.auth.v1.UpdateEmailResponse
	(*VerifyAccountResponse)(nil),          // 15: gen.go.auth.v1.VerifyAccountResponse
	(*VerifyActivationLinkResponse)(nil),   // 16: gen.go.auth.v1.VerifyActivationLinkResponse
	(*ForgotPasswordResponse)(nil),         // 17: gen.go.auth.v1.ForgotPasswordResponse
}
var file_account_v1_account_service_proto_depIdxs = []int32{
	0,  // 0: gen.go.auth.v1.AccountServicePort.login:input_type -> gen.go.auth.v1.LoginRequest
	1,  // 1: gen.go.auth.v1.AccountServicePort.register:input_type -> gen.go.auth.v1.RegisterRequest
	2,  // 2: gen.go.auth.v1.AccountServicePort.logout:input_type -> gen.go.auth.v1.LogoutRequest
	3,  // 3: gen.go.auth.v1.AccountServicePort.resendVerificationCode:input_type -> gen.go.auth.v1.ResendVerificationCodeRequest
	4,  // 4: gen.go.auth.v1.AccountServicePort.updatePassword:input_type -> gen.go.auth.v1.UpdatePasswordRequest
	5,  // 5: gen.go.auth.v1.AccountServicePort.updateEmail:input_type -> gen.go.auth.v1.UpdateEmailRequest
	6,  // 6: gen.go.auth.v1.AccountServicePort.verifyAccount:input_type -> gen.go.auth.v1.VerifyAccountRequest
	7,  // 7: gen.go.auth.v1.AccountServicePort.verifyActivationLink:input_type -> gen.go.auth.v1.VerifyActivationLinkRequest
	8,  // 8: gen.go.auth.v1.AccountServicePort.forgotPassword:input_type -> gen.go.auth.v1.ForgotPasswordRequest
	9,  // 9: gen.go.auth.v1.AccountServicePort.login:output_type -> gen.go.auth.v1.LoginResponse
	10, // 10: gen.go.auth.v1.AccountServicePort.register:output_type -> gen.go.auth.v1.RegisterResponse
	11, // 11: gen.go.auth.v1.AccountServicePort.logout:output_type -> gen.go.auth.v1.LogoutResponse
	12, // 12: gen.go.auth.v1.AccountServicePort.resendVerificationCode:output_type -> gen.go.auth.v1.ResendVerificationCodeResponse
	13, // 13: gen.go.auth.v1.AccountServicePort.updatePassword:output_type -> gen.go.auth.v1.UpdatePasswordResponse
	14, // 14: gen.go.auth.v1.AccountServicePort.updateEmail:output_type -> gen.go.auth.v1.UpdateEmailResponse
	15, // 15: gen.go.auth.v1.AccountServicePort.verifyAccount:output_type -> gen.go.auth.v1.VerifyAccountResponse
	16, // 16: gen.go.auth.v1.AccountServicePort.verifyActivationLink:output_type -> gen.go.auth.v1.VerifyActivationLinkResponse
	17, // 17: gen.go.auth.v1.AccountServicePort.forgotPassword:output_type -> gen.go.auth.v1.ForgotPasswordResponse
	9,  // [9:18] is the sub-list for method output_type
	0,  // [0:9] is the sub-list for method input_type
	0,  // [0:0] is the sub-list for extension type_name
	0,  // [0:0] is the sub-list for extension extendee
	0,  // [0:0] is the sub-list for field type_name
}

func init() { file_account_v1_account_service_proto_init() }
func file_account_v1_account_service_proto_init() {
	if File_account_v1_account_service_proto != nil {
		return
	}
	file_account_v1_account_event_proto_init()
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_account_v1_account_service_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   0,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_account_v1_account_service_proto_goTypes,
		DependencyIndexes: file_account_v1_account_service_proto_depIdxs,
	}.Build()
	File_account_v1_account_service_proto = out.File
	file_account_v1_account_service_proto_rawDesc = nil
	file_account_v1_account_service_proto_goTypes = nil
	file_account_v1_account_service_proto_depIdxs = nil
}
