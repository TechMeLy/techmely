//
//  Generated code. Do not modify.
//  source: meta_schema/v1/meta_schema.service.proto
//
// @dart = 2.12

// ignore_for_file: annotate_overrides, camel_case_types, comment_references
// ignore_for_file: constant_identifier_names, library_prefixes
// ignore_for_file: non_constant_identifier_names, prefer_final_fields
// ignore_for_file: unnecessary_import, unnecessary_this, unused_import

import 'dart:async' as $async;
import 'dart:core' as $core;

import 'package:protobuf/protobuf.dart' as $pb;

import 'meta_schema.event.pb.dart' as $1;

class MetaSchemaServiceApi {
  $pb.RpcClient _client;
  MetaSchemaServiceApi(this._client);

  $async.Future<$1.GetMetaSchemaResponse> get($pb.ClientContext? ctx, $1.GetMetaSchemaRequest request) =>
    _client.invoke<$1.GetMetaSchemaResponse>(ctx, 'MetaSchemaService', 'Get', request, $1.GetMetaSchemaResponse())
  ;
}

