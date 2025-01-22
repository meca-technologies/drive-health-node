// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DriveHealth from 'drive-health';
import { Response } from 'node-fetch';

const client = new DriveHealth({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource calls', () => {
  test('retrieve', async () => {
    const responsePromise = client.calls.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
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
      client.calls.retrieve('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(DriveHealth.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.calls.list();
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
    await expect(client.calls.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      DriveHealth.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.calls.list(
        {
          assistant_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
          call_type: 'incoming',
          from_number: 'from_number',
          limit: 0,
          page: 1,
          status: 'completed',
          to_number: 'to_number',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(DriveHealth.NotFoundError);
  });
});
