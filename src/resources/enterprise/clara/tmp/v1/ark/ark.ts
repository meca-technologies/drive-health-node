// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../../resource';
import * as Core from '../../../../../../core';
import * as CallLogsAPI from './call-logs';
import { CallLogs } from './call-logs';

export class Ark extends APIResource {
  callLogs: CallLogsAPI.CallLogs = new CallLogsAPI.CallLogs(this._client);

  /**
   * Initiate an outbound call with minimal required contact information for ARK
   * system
   */
  makeOutboundCall(
    body: ArkMakeOutboundCallParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ArkMakeOutboundCallResponse> {
    return this._client.post(
      '/enterprise/clara/tmp/v1/ark/make-outbound-call',
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface ArkMakeOutboundCallResponse {
  err?: boolean;

  msg?: string;

  results?: ArkMakeOutboundCallResponse.Results;
}

export namespace ArkMakeOutboundCallResponse {
  export interface Results {
    id?: string;
  }
}

export interface ArkMakeOutboundCallParams {
  dob: string;

  first_name: string;

  last_name: string;

  phone_number: string;
}

Ark.CallLogs = CallLogs;

export declare namespace Ark {
  export {
    type ArkMakeOutboundCallResponse as ArkMakeOutboundCallResponse,
    type ArkMakeOutboundCallParams as ArkMakeOutboundCallParams,
  };

  export { CallLogs as CallLogs };
}
