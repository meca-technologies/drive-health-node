// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ClaraAPI from './clara/clara';
import {
  Clara,
  ClaraCreateReminderParams,
  ClaraCreateReminderResponse,
  ClaraRegisterWebCallParams,
} from './clara/clara';

export class Enterprise extends APIResource {
  clara: ClaraAPI.Clara = new ClaraAPI.Clara(this._client);
}

Enterprise.Clara = Clara;

export declare namespace Enterprise {
  export {
    Clara as Clara,
    type ClaraCreateReminderResponse as ClaraCreateReminderResponse,
    type ClaraCreateReminderParams as ClaraCreateReminderParams,
    type ClaraRegisterWebCallParams as ClaraRegisterWebCallParams,
  };
}
