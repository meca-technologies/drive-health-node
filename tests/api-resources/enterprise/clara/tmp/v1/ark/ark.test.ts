// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DriveHealth from 'drive-health';
import { Response } from 'node-fetch';

const client = new DriveHealth({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ark', () => {
  test('makeOutboundCall: only required params', async () => {
    const responsePromise = client.enterprise.clara.tmp.v1.ark.makeOutboundCall({
      dob: '1934-10-09',
      first_name: 'John',
      last_name: 'Doe',
      phone_number: '+17472723279',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('makeOutboundCall: required and optional params', async () => {
    const response = await client.enterprise.clara.tmp.v1.ark.makeOutboundCall({
      dob: '1934-10-09',
      first_name: 'John',
      last_name: 'Doe',
      phone_number: '+17472723279',
    });
  });
});
