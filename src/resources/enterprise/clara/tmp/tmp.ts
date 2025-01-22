// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ArkAPI from './ark/ark';
import { Ark } from './ark/ark';
import * as V1API from './v1/v1';
import { V1, V1MakeOutboundCallParams, V1MakeOutboundCallResponse } from './v1/v1';

export class Tmp extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
  ark: ArkAPI.Ark = new ArkAPI.Ark(this._client);
}

Tmp.V1 = V1;
Tmp.Ark = Ark;

export declare namespace Tmp {
  export {
    V1 as V1,
    type V1MakeOutboundCallResponse as V1MakeOutboundCallResponse,
    type V1MakeOutboundCallParams as V1MakeOutboundCallParams,
  };

  export { Ark as Ark };
}
