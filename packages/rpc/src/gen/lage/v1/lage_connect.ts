// @generated by protoc-gen-connect-es v1.4.0 with parameter "target=ts"
// @generated from file lage/v1/lage.proto (package connectrpc.lage.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { RunTargetRequest, RunTargetResponse } from "./lage_pb.js";
import { MethodKind } from "@bufbuild/protobuf";

/**
 * @generated from service connectrpc.lage.v1.LageService
 */
export const LageService = {
  typeName: "connectrpc.lage.v1.LageService",
  methods: {
    /**
     * @generated from rpc connectrpc.lage.v1.LageService.RunTarget
     */
    runTarget: {
      name: "RunTarget",
      I: RunTargetRequest,
      O: RunTargetResponse,
      kind: MethodKind.Unary,
    },
  },
} as const;
