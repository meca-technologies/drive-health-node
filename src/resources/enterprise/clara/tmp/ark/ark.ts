// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as CallLogsAPI from './call-logs';
import { CallLogListParams, CallLogListResponse, CallLogRetrieveResponse, CallLogs } from './call-logs';

export class Ark extends APIResource {
  callLogs: CallLogsAPI.CallLogs = new CallLogsAPI.CallLogs(this._client);
}

Ark.CallLogs = CallLogs;

export declare namespace Ark {
  export {
    CallLogs as CallLogs,
    type CallLogRetrieveResponse as CallLogRetrieveResponse,
    type CallLogListResponse as CallLogListResponse,
    type CallLogListParams as CallLogListParams,
  };
}
