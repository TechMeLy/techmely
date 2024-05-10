// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.34.1
// 	protoc        (unknown)
// source: meta_schema/v1/meta_schema.event.proto

package meta_schemav1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type GetMetaSchemaRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetMetaSchemaRequest) Reset() {
	*x = GetMetaSchemaRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_meta_schema_v1_meta_schema_event_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMetaSchemaRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMetaSchemaRequest) ProtoMessage() {}

func (x *GetMetaSchemaRequest) ProtoReflect() protoreflect.Message {
	mi := &file_meta_schema_v1_meta_schema_event_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMetaSchemaRequest.ProtoReflect.Descriptor instead.
func (*GetMetaSchemaRequest) Descriptor() ([]byte, []int) {
	return file_meta_schema_v1_meta_schema_event_proto_rawDescGZIP(), []int{0}
}

func (x *GetMetaSchemaRequest) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

type GetMetaSchemaResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id string `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`
}

func (x *GetMetaSchemaResponse) Reset() {
	*x = GetMetaSchemaResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_meta_schema_v1_meta_schema_event_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *GetMetaSchemaResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*GetMetaSchemaResponse) ProtoMessage() {}

func (x *GetMetaSchemaResponse) ProtoReflect() protoreflect.Message {
	mi := &file_meta_schema_v1_meta_schema_event_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use GetMetaSchemaResponse.ProtoReflect.Descriptor instead.
func (*GetMetaSchemaResponse) Descriptor() ([]byte, []int) {
	return file_meta_schema_v1_meta_schema_event_proto_rawDescGZIP(), []int{1}
}

func (x *GetMetaSchemaResponse) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

var File_meta_schema_v1_meta_schema_event_proto protoreflect.FileDescriptor

var file_meta_schema_v1_meta_schema_event_proto_rawDesc = []byte{
	0x0a, 0x26, 0x6d, 0x65, 0x74, 0x61, 0x5f, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2f, 0x76, 0x31,
	0x2f, 0x6d, 0x65, 0x74, 0x61, 0x5f, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2e, 0x65, 0x76, 0x65,
	0x6e, 0x74, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x15, 0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f,
	0x2e, 0x6d, 0x65, 0x74, 0x61, 0x5f, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2e, 0x76, 0x31, 0x22,
	0x26, 0x0a, 0x14, 0x47, 0x65, 0x74, 0x4d, 0x65, 0x74, 0x61, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64, 0x22, 0x27, 0x0a, 0x15, 0x47, 0x65, 0x74, 0x4d, 0x65,
	0x74, 0x61, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69, 0x64,
	0x42, 0xdd, 0x01, 0x0a, 0x19, 0x63, 0x6f, 0x6d, 0x2e, 0x67, 0x65, 0x6e, 0x2e, 0x67, 0x6f, 0x2e,
	0x6d, 0x65, 0x74, 0x61, 0x5f, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2e, 0x76, 0x31, 0x42, 0x14,
	0x4d, 0x65, 0x74, 0x61, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x45, 0x76, 0x65, 0x6e, 0x74, 0x50,
	0x72, 0x6f, 0x74, 0x6f, 0x50, 0x01, 0x5a, 0x37, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x74, 0x65, 0x63, 0x68, 0x6d, 0x65, 0x6c, 0x79, 0x2f, 0x6d, 0x6f, 0x64, 0x65,
	0x6c, 0x73, 0x2f, 0x6d, 0x65, 0x74, 0x61, 0x5f, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2f, 0x76,
	0x31, 0x3b, 0x6d, 0x65, 0x74, 0x61, 0x5f, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x76, 0x31, 0xa2,
	0x02, 0x03, 0x47, 0x47, 0x4d, 0xaa, 0x02, 0x14, 0x47, 0x65, 0x6e, 0x2e, 0x47, 0x6f, 0x2e, 0x4d,
	0x65, 0x74, 0x61, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2e, 0x56, 0x31, 0xca, 0x02, 0x14, 0x47,
	0x65, 0x6e, 0x5c, 0x47, 0x6f, 0x5c, 0x4d, 0x65, 0x74, 0x61, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61,
	0x5c, 0x56, 0x31, 0xe2, 0x02, 0x20, 0x47, 0x65, 0x6e, 0x5c, 0x47, 0x6f, 0x5c, 0x4d, 0x65, 0x74,
	0x61, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x5c, 0x56, 0x31, 0x5c, 0x47, 0x50, 0x42, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0xea, 0x02, 0x17, 0x47, 0x65, 0x6e, 0x3a, 0x3a, 0x47, 0x6f,
	0x3a, 0x3a, 0x4d, 0x65, 0x74, 0x61, 0x53, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x3a, 0x3a, 0x56, 0x31,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_meta_schema_v1_meta_schema_event_proto_rawDescOnce sync.Once
	file_meta_schema_v1_meta_schema_event_proto_rawDescData = file_meta_schema_v1_meta_schema_event_proto_rawDesc
)

func file_meta_schema_v1_meta_schema_event_proto_rawDescGZIP() []byte {
	file_meta_schema_v1_meta_schema_event_proto_rawDescOnce.Do(func() {
		file_meta_schema_v1_meta_schema_event_proto_rawDescData = protoimpl.X.CompressGZIP(file_meta_schema_v1_meta_schema_event_proto_rawDescData)
	})
	return file_meta_schema_v1_meta_schema_event_proto_rawDescData
}

var file_meta_schema_v1_meta_schema_event_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_meta_schema_v1_meta_schema_event_proto_goTypes = []interface{}{
	(*GetMetaSchemaRequest)(nil),  // 0: gen.go.meta_schema.v1.GetMetaSchemaRequest
	(*GetMetaSchemaResponse)(nil), // 1: gen.go.meta_schema.v1.GetMetaSchemaResponse
}
var file_meta_schema_v1_meta_schema_event_proto_depIdxs = []int32{
	0, // [0:0] is the sub-list for method output_type
	0, // [0:0] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_meta_schema_v1_meta_schema_event_proto_init() }
func file_meta_schema_v1_meta_schema_event_proto_init() {
	if File_meta_schema_v1_meta_schema_event_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_meta_schema_v1_meta_schema_event_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMetaSchemaRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_meta_schema_v1_meta_schema_event_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*GetMetaSchemaResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_meta_schema_v1_meta_schema_event_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_meta_schema_v1_meta_schema_event_proto_goTypes,
		DependencyIndexes: file_meta_schema_v1_meta_schema_event_proto_depIdxs,
		MessageInfos:      file_meta_schema_v1_meta_schema_event_proto_msgTypes,
	}.Build()
	File_meta_schema_v1_meta_schema_event_proto = out.File
	file_meta_schema_v1_meta_schema_event_proto_rawDesc = nil
	file_meta_schema_v1_meta_schema_event_proto_goTypes = nil
	file_meta_schema_v1_meta_schema_event_proto_depIdxs = nil
}
