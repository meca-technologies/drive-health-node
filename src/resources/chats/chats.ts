// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SessionsAPI from './sessions';
import {
  ChatSession,
  SessionListParams,
  SessionListResponse,
  SessionRetrieveResponse,
  Sessions,
} from './sessions';

export class Chats extends APIResource {
  sessions: SessionsAPI.Sessions = new SessionsAPI.Sessions(this._client);
}

Chats.Sessions = Sessions;

export declare namespace Chats {
  export {
    Sessions as Sessions,
    type ChatSession as ChatSession,
    type SessionRetrieveResponse as SessionRetrieveResponse,
    type SessionListResponse as SessionListResponse,
    type SessionListParams as SessionListParams,
  };
}
