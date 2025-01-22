// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { isRequestOptions } from '../../../../../core';
import * as Core from '../../../../../core';
import * as Shared from '../../../../shared';

export class CallLogs extends APIResource {
  /**
   * Retrieve detailed information about a specific ARK call including health survey
   * responses
   */
  retrieve(callId: string, options?: Core.RequestOptions): Core.APIPromise<CallLogRetrieveResponse> {
    return this._client.get(`/enterprise/clara/tmp/v1/ark/get-call-logs/${callId}`, options);
  }

  /**
   * Retrieve a paginated list of ARK call logs with transcripts and health survey
   * analysis
   */
  list(query?: CallLogListParams, options?: Core.RequestOptions): Core.APIPromise<CallLogListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CallLogListResponse>;
  list(
    query: CallLogListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CallLogListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/enterprise/clara/tmp/v1/ark/get-call-logs', { query, ...options });
  }
}

export interface CallLogRetrieveResponse {
  err?: boolean;

  msg?: string;

  results?: Shared.CallLog;
}

export interface CallLogListResponse {
  err?: boolean;

  msg?: string;

  results?: Array<Shared.CallLog>;
}

export interface CallLogListParams {
  /**
   * Cursor token for pagination
   */
  cursor?: string;

  /**
   * Number of records to return
   */
  limit?: number;
}

export declare namespace CallLogs {
  export {
    type CallLogRetrieveResponse as CallLogRetrieveResponse,
    type CallLogListResponse as CallLogListResponse,
    type CallLogListParams as CallLogListParams,
  };
}
