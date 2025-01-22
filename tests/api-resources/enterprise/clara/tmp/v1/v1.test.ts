// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DriveHealth from 'drive-health';
import { Response } from 'node-fetch';

const client = new DriveHealth({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  test('makeOutboundCall: only required params', async () => {
    const responsePromise = client.enterprise.clara.tmp.v1.makeOutboundCall({
      first_name: 'John',
      last_name: 'Doe',
      phone_number: '+15813337354',
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
    const response = await client.enterprise.clara.tmp.v1.makeOutboundCall({
      first_name: 'John',
      last_name: 'Doe',
      phone_number: '+15813337354',
      address: 'address',
      city: 'city',
      dob: '2019-12-27',
      email: 'dev@stainlessapi.com',
      state: 'state',
      zip: '73216-0225',
    });
  });
});
