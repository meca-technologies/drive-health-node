// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Calls extends APIResource {
  /**
   * Retrieve detailed information about a specific call
   */
  retrieve(callId: string, options?: Core.RequestOptions): Core.APIPromise<CallRetrieveResponse> {
    return this._client.get(`/calls/${callId}`, options);
  }

  /**
   * Retrieve a paginated list of call records with optional filters
   */
  list(query?: CallListParams, options?: Core.RequestOptions): Core.APIPromise<CallListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CallListResponse>;
  list(
    query: CallListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CallListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/calls', { query, ...options });
  }
}

export interface CallRecord {
  assistant_id?: string;

  assistant_name?: string;

  call_analysis?: CallRecord.CallAnalysis;

  call_duration_seconds?: number;

  call_id?: string;

  call_recording_enabled?: boolean;

  call_recording_url?: string;

  call_type?: string;

  end_time?: string;

  from_number?: string;

  metadata?: unknown;

  protocol?: string;

  provider_call_id?: string;

  start_time?: string;

  status?: string;

  to_number?: string;

  transcript?: string;

  transcript_object?: Array<CallRecord.TranscriptObject>;

  variables?: unknown | null;

  voice_id?: string;

  voice_name?: string;
}

export namespace CallRecord {
  export interface CallAnalysis {
    call_completion?: string | null;

    call_completion_summary?: string | null;

    summary?: string;

    task_completion?: string;

    task_completion_summary?: string;
  }

  export interface TranscriptObject {
    content?: string;

    role?: 'assistant' | 'user';
  }
}

export interface CallRetrieveResponse {
  err?: boolean;

  msg?: string;

  results?: CallRecord;
}

export interface CallListResponse {
  count?: number;

  next?: string | null;

  previous?: string | null;

  results?: Array<CallRecord>;
}

export interface CallListParams {
  assistant_id?: string;

  call_type?: 'incoming' | 'outgoing';

  from_number?: string;

  limit?: number;

  page?: number;

  status?: 'completed' | 'failed' | 'in-progress';

  to_number?: string;
}

export declare namespace Calls {
  export {
    type CallRecord as CallRecord,
    type CallRetrieveResponse as CallRetrieveResponse,
    type CallListResponse as CallListResponse,
    type CallListParams as CallListParams,
  };
}
