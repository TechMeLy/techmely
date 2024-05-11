// Code generated by protoc-gen-connect-go. DO NOT EDIT.
//
// Source: meta_schema/v1/meta_schema.service.proto

package meta_schemav1connect

import (
	connect "connectrpc.com/connect"
	context "context"
	errors "errors"
	v1 "github.com/techmely/models/meta_schema/v1"
	http "net/http"
	strings "strings"
)

// This is a compile-time assertion to ensure that this generated file and the connect package are
// compatible. If you get a compiler error that this constant is not defined, this code was
// generated with a version of connect newer than the one compiled into your binary. You can fix the
// problem by either regenerating this code with an older version of connect or updating the connect
// version compiled into your binary.
const _ = connect.IsAtLeastVersion1_13_0

const (
	// MetaSchemaServiceName is the fully-qualified name of the MetaSchemaService service.
	MetaSchemaServiceName = "gen.go.meta_schema.v1.MetaSchemaService"
)

// These constants are the fully-qualified names of the RPCs defined in this package. They're
// exposed at runtime as Spec.Procedure and as the final two segments of the HTTP route.
//
// Note that these are different from the fully-qualified method names used by
// google.golang.org/protobuf/reflect/protoreflect. To convert from these constants to
// reflection-formatted method names, remove the leading slash and convert the remaining slash to a
// period.
const (
	// MetaSchemaServiceGetProcedure is the fully-qualified name of the MetaSchemaService's Get RPC.
	MetaSchemaServiceGetProcedure = "/gen.go.meta_schema.v1.MetaSchemaService/Get"
)

// These variables are the protoreflect.Descriptor objects for the RPCs defined in this package.
var (
	metaSchemaServiceServiceDescriptor   = v1.File_meta_schema_v1_meta_schema_service_proto.Services().ByName("MetaSchemaService")
	metaSchemaServiceGetMethodDescriptor = metaSchemaServiceServiceDescriptor.Methods().ByName("Get")
)

// MetaSchemaServiceClient is a client for the gen.go.meta_schema.v1.MetaSchemaService service.
type MetaSchemaServiceClient interface {
	Get(context.Context, *connect.Request[v1.GetMetaSchemaRequest]) (*connect.Response[v1.GetMetaSchemaResponse], error)
}

// NewMetaSchemaServiceClient constructs a client for the gen.go.meta_schema.v1.MetaSchemaService
// service. By default, it uses the Connect protocol with the binary Protobuf Codec, asks for
// gzipped responses, and sends uncompressed requests. To use the gRPC or gRPC-Web protocols, supply
// the connect.WithGRPC() or connect.WithGRPCWeb() options.
//
// The URL supplied here should be the base URL for the Connect or gRPC server (for example,
// http://api.acme.com or https://acme.com/grpc).
func NewMetaSchemaServiceClient(httpClient connect.HTTPClient, baseURL string, opts ...connect.ClientOption) MetaSchemaServiceClient {
	baseURL = strings.TrimRight(baseURL, "/")
	return &metaSchemaServiceClient{
		get: connect.NewClient[v1.GetMetaSchemaRequest, v1.GetMetaSchemaResponse](
			httpClient,
			baseURL+MetaSchemaServiceGetProcedure,
			connect.WithSchema(metaSchemaServiceGetMethodDescriptor),
			connect.WithClientOptions(opts...),
		),
	}
}

// metaSchemaServiceClient implements MetaSchemaServiceClient.
type metaSchemaServiceClient struct {
	get *connect.Client[v1.GetMetaSchemaRequest, v1.GetMetaSchemaResponse]
}

// Get calls gen.go.meta_schema.v1.MetaSchemaService.Get.
func (c *metaSchemaServiceClient) Get(ctx context.Context, req *connect.Request[v1.GetMetaSchemaRequest]) (*connect.Response[v1.GetMetaSchemaResponse], error) {
	return c.get.CallUnary(ctx, req)
}

// MetaSchemaServiceHandler is an implementation of the gen.go.meta_schema.v1.MetaSchemaService
// service.
type MetaSchemaServiceHandler interface {
	Get(context.Context, *connect.Request[v1.GetMetaSchemaRequest]) (*connect.Response[v1.GetMetaSchemaResponse], error)
}

// NewMetaSchemaServiceHandler builds an HTTP handler from the service implementation. It returns
// the path on which to mount the handler and the handler itself.
//
// By default, handlers support the Connect, gRPC, and gRPC-Web protocols with the binary Protobuf
// and JSON codecs. They also support gzip compression.
func NewMetaSchemaServiceHandler(svc MetaSchemaServiceHandler, opts ...connect.HandlerOption) (string, http.Handler) {
	metaSchemaServiceGetHandler := connect.NewUnaryHandler(
		MetaSchemaServiceGetProcedure,
		svc.Get,
		connect.WithSchema(metaSchemaServiceGetMethodDescriptor),
		connect.WithHandlerOptions(opts...),
	)
	return "/gen.go.meta_schema.v1.MetaSchemaService/", http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		switch r.URL.Path {
		case MetaSchemaServiceGetProcedure:
			metaSchemaServiceGetHandler.ServeHTTP(w, r)
		default:
			http.NotFound(w, r)
		}
	})
}

// UnimplementedMetaSchemaServiceHandler returns CodeUnimplemented from all methods.
type UnimplementedMetaSchemaServiceHandler struct{}

func (UnimplementedMetaSchemaServiceHandler) Get(context.Context, *connect.Request[v1.GetMetaSchemaRequest]) (*connect.Response[v1.GetMetaSchemaResponse], error) {
	return nil, connect.NewError(connect.CodeUnimplemented, errors.New("gen.go.meta_schema.v1.MetaSchemaService.Get is not implemented"))
}
