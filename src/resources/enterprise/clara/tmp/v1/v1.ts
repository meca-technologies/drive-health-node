// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import * as CallLogsAPI from './call-logs';
import { CallLogListParams, CallLogListResponse, CallLogRetrieveResponse, CallLogs } from './call-logs';
import * as ArkAPI from './ark/ark';
import { Ark, ArkMakeOutboundCallParams, ArkMakeOutboundCallResponse } from './ark/ark';

export class V1 extends APIResource {
  callLogs: CallLogsAPI.CallLogs = new CallLogsAPI.CallLogs(this._client);
  ark: ArkAPI.Ark = new ArkAPI.Ark(this._client);

  /**
   * Initiate an outbound call to a specified contact
   */
  makeOutboundCall(
    body: V1MakeOutboundCallParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<V1MakeOutboundCallResponse> {
    return this._client.post(
      '/enterprise/clara/tmp/v1/make-outbound-call',
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface V1MakeOutboundCallResponse {
  err?: boolean;

  msg?: string;

  results?: V1MakeOutboundCallResponse.Results;
}

export namespace V1MakeOutboundCallResponse {
  export interface Results {
    id?: string;
  }
}

export interface V1MakeOutboundCallParams {
  first_name: string;

  last_name: string;

  phone_number: string;

  address?: string;

  city?: string;

  dob?: string;

  email?: string;

  state?: string;

  zip?: string;
}

V1.CallLogs = CallLogs;
V1.Ark = Ark;

export declare namespace V1 {
  export {
    type V1MakeOutboundCallResponse as V1MakeOutboundCallResponse,
    type V1MakeOutboundCallParams as V1MakeOutboundCallParams,
  };

  export {
    CallLogs as CallLogs,
    type CallLogRetrieveResponse as CallLogRetrieveResponse,
    type CallLogListResponse as CallLogListResponse,
    type CallLogListParams as CallLogListParams,
  };

  export {
    Ark as Ark,
    type ArkMakeOutboundCallResponse as ArkMakeOutboundCallResponse,
    type ArkMakeOutboundCallParams as ArkMakeOutboundCallParams,
  };
}
