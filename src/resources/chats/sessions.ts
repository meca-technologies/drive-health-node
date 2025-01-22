// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Sessions extends APIResource {
  /**
   * Retrieve details of a specific chat session by ID
   */
  retrieve(chatId: string, options?: Core.RequestOptions): Core.APIPromise<SessionRetrieveResponse> {
    return this._client.get(`/chats/sessions/${chatId}`, options);
  }

  /**
   * Retrieve a paginated list of chat sessions for a specific assistant
   */
  list(query: SessionListParams, options?: Core.RequestOptions): Core.APIPromise<SessionListResponse> {
    return this._client.get('/chats/sessions', { query, ...options });
  }
}

export interface ChatSession {
  assistant_id?: string;

  assistant_message_count?: number;

  assistant_name?: string;

  chat_id?: string;

  created_at?: string;

  meta_data?: unknown | null;

  tool_invocation_count?: number;

  transcript?: string;

  transcript_object?: Array<ChatSession.TranscriptObject>;

  user_message_count?: number;
}

export namespace ChatSession {
  export interface TranscriptObject {
    content?: string;

    role?: 'assistant' | 'user';
  }
}

export interface SessionRetrieveResponse {
  err?: boolean;

  msg?: string;

  results?: ChatSession;
}

export interface SessionListResponse {
  /**
   * Total number of chat sessions
   */
  count?: number;

  /**
   * URL for the next page
   */
  next?: string | null;

  /**
   * URL for the previous page
   */
  previous?: string | null;

  results?: Array<ChatSession>;
}

export interface SessionListParams {
  /**
   * The UUID of the assistant
   */
  assistant_id: string;

  /**
   * Number of items per page
   */
  limit?: number;

  /**
   * Page number for pagination
   */
  page?: number;
}

export declare namespace Sessions {
  export {
    type ChatSession as ChatSession,
    type SessionRetrieveResponse as SessionRetrieveResponse,
    type SessionListResponse as SessionListResponse,
    type SessionListParams as SessionListParams,
  };
}
