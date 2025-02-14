// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file lage/v1/lage.proto (package connectrpc.lage.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message connectrpc.lage.v1.RunTargetRequest
 */
export class RunTargetRequest extends Message<RunTargetRequest> {
  /**
   * @generated from field: optional string package_name = 1;
   */
  packageName?: string;

  /**
   * @generated from field: string task = 2;
   */
  task = "";

  /**
   * @generated from field: repeated string taskArgs = 3;
   */
  taskArgs: string[] = [];

  /**
   * @generated from field: string nodeOptions = 4;
   */
  nodeOptions = "";

  /**
   * @generated from field: string npmClient = 5;
   */
  npmClient = "";

  constructor(data?: PartialMessage<RunTargetRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.lage.v1.RunTargetRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "package_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 2, name: "task", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "taskArgs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 4, name: "nodeOptions", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "npmClient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RunTargetRequest {
    return new RunTargetRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RunTargetRequest {
    return new RunTargetRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RunTargetRequest {
    return new RunTargetRequest().fromJsonString(jsonString, options);
  }

  static equals(
    a: RunTargetRequest | PlainMessage<RunTargetRequest> | undefined,
    b: RunTargetRequest | PlainMessage<RunTargetRequest> | undefined
  ): boolean {
    return proto3.util.equals(RunTargetRequest, a, b);
  }
}

/**
 * @generated from message connectrpc.lage.v1.RunTargetResponse
 */
export class RunTargetResponse extends Message<RunTargetResponse> {
  /**
   * @generated from field: string id = 1;
   */
  id = "";

  /**
   * @generated from field: optional string package_name = 2;
   */
  packageName?: string;

  /**
   * @generated from field: string task = 3;
   */
  task = "";

  /**
   * @generated from field: int32 exit_code = 4;
   */
  exitCode = 0;

  /**
   * @generated from field: repeated string inputs = 5;
   */
  inputs: string[] = [];

  /**
   * @generated from field: repeated string outputs = 6;
   */
  outputs: string[] = [];

  /**
   * @generated from field: string stdout = 7;
   */
  stdout = "";

  /**
   * @generated from field: string stderr = 8;
   */
  stderr = "";

  /**
   * @generated from field: repeated string global_inputs = 9;
   */
  globalInputs: string[] = [];

  constructor(data?: PartialMessage<RunTargetResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.lage.v1.RunTargetResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "package_name", kind: "scalar", T: 9 /* ScalarType.STRING */, opt: true },
    { no: 3, name: "task", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "exit_code", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 5, name: "inputs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 6, name: "outputs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 7, name: "stdout", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "stderr", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "global_inputs", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RunTargetResponse {
    return new RunTargetResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RunTargetResponse {
    return new RunTargetResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RunTargetResponse {
    return new RunTargetResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: RunTargetResponse | PlainMessage<RunTargetResponse> | undefined,
    b: RunTargetResponse | PlainMessage<RunTargetResponse> | undefined
  ): boolean {
    return proto3.util.equals(RunTargetResponse, a, b);
  }
}

/**
 * @generated from message connectrpc.lage.v1.PingRequest
 */
export class PingRequest extends Message<PingRequest> {
  constructor(data?: PartialMessage<PingRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.lage.v1.PingRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => []);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PingRequest {
    return new PingRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PingRequest {
    return new PingRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PingRequest {
    return new PingRequest().fromJsonString(jsonString, options);
  }

  static equals(a: PingRequest | PlainMessage<PingRequest> | undefined, b: PingRequest | PlainMessage<PingRequest> | undefined): boolean {
    return proto3.util.equals(PingRequest, a, b);
  }
}

/**
 * @generated from message connectrpc.lage.v1.PingResponse
 */
export class PingResponse extends Message<PingResponse> {
  /**
   * @generated from field: bool pong = 1;
   */
  pong = false;

  constructor(data?: PartialMessage<PingResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "connectrpc.lage.v1.PingResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [{ no: 1, name: "pong", kind: "scalar", T: 8 /* ScalarType.BOOL */ }]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): PingResponse {
    return new PingResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): PingResponse {
    return new PingResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): PingResponse {
    return new PingResponse().fromJsonString(jsonString, options);
  }

  static equals(
    a: PingResponse | PlainMessage<PingResponse> | undefined,
    b: PingResponse | PlainMessage<PingResponse> | undefined
  ): boolean {
    return proto3.util.equals(PingResponse, a, b);
  }
}
