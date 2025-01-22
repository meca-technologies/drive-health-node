// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface CallLog {
  id?: string;

  call_analysis?: unknown;

  connection_status?: 'USER_HANGUP';

  end?: number;

  recording_url?: string;

  sentiment?: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';

  start?: number;

  status?: 'ended';

  to_number?: string;

  transcript?: string;
}
