// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as TmpAPI from './tmp/tmp';
import { Tmp } from './tmp/tmp';

export class Clara extends APIResource {
  tmp: TmpAPI.Tmp = new TmpAPI.Tmp(this._client);

  /**
   * Create a new reminder for medication or other purposes
   */
  createReminder(
    body: ClaraCreateReminderParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClaraCreateReminderResponse> {
    return this._client.post('/enterprise/clara/create-reminder', { body, ...options });
  }

  /**
   * Register and initiate a web-based call with a Clara assistant
   */
  registerWebCall(body: ClaraRegisterWebCallParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post(
      '/enterprise/clara/register-web-call',
      Core.multipartFormRequestOptions({ body, ...options, headers: { Accept: '*/*', ...options?.headers } }),
    );
  }
}

export interface ClaraCreateReminderResponse {
  err?: boolean;

  msg?: string;

  results?: ClaraCreateReminderResponse.Results;
}

export namespace ClaraCreateReminderResponse {
  export interface Results {
    id?: number;

    created_at?: string;

    date?: string;

    description?: string;

    medication?: Results.Medication;

    name?: string;

    period?: string;

    reminder_type?: string;

    time?: string;

    user?: Results.User;
  }

  export namespace Results {
    export interface Medication {
      dosage?: string;

      fill_date?: string;

      form?: string;

      instructions?: string;

      name?: string;

      quantity?: number;

      refill_due?: string;

      refill_left?: number;

      rx_number?: string;

      unit?: string;
    }

    export interface User {
      first_name: string;

      last_name: string;

      phone: string;

      dob?: string;

      gender?: 'male' | 'female' | 'other';

      ref_id?: string;
    }
  }
}

export interface ClaraCreateReminderParams {
  reminder: ClaraCreateReminderParams.Reminder;

  reminder_type: 'medication';

  user: ClaraCreateReminderParams.User;

  medication?: ClaraCreateReminderParams.Medication;
}

export namespace ClaraCreateReminderParams {
  export interface Reminder {
    date: string;

    name: string;

    period: 'daily' | 'weekly' | 'monthly';

    time: string;

    description?: string;
  }

  export interface User {
    first_name: string;

    last_name: string;

    phone: string;

    dob?: string;

    gender?: 'male' | 'female' | 'other';

    ref_id?: string;
  }

  export interface Medication {
    dosage?: string;

    fill_date?: string;

    form?: string;

    instructions?: string;

    name?: string;

    quantity?: number;

    refill_due?: string;

    refill_left?: number;

    rx_number?: string;

    unit?: string;
  }
}

export interface ClaraRegisterWebCallParams {
  /**
   * The UUID of the Clara assistant to initiate the call with
   */
  assistant_id: string;

  /**
   * The UUID of the internal user initiating the call
   */
  internal_user_id: string;
}

Clara.Tmp = Tmp;

export declare namespace Clara {
  export {
    type ClaraCreateReminderResponse as ClaraCreateReminderResponse,
    type ClaraCreateReminderParams as ClaraCreateReminderParams,
    type ClaraRegisterWebCallParams as ClaraRegisterWebCallParams,
  };

  export { Tmp as Tmp };
}
