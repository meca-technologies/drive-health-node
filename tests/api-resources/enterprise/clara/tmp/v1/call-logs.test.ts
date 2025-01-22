// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DriveHealth from 'drive-health';
import { Response } from 'node-fetch';

const client = new DriveHealth({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource callLogs', () => {
  test('retrieve', async () => {
    const responsePromise = client.enterprise.clara.tmp.v1.callLogs.retrieve('call_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.enterprise.clara.tmp.v1.callLogs.retrieve('call_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(DriveHealth.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.enterprise.clara.tmp.v1.callLogs.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.enterprise.clara.tmp.v1.callLogs.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(DriveHealth.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.enterprise.clara.tmp.v1.callLogs.list(
        { cursor: 'cursor', limit: 1 },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DriveHealth.NotFoundError);
  });
});
