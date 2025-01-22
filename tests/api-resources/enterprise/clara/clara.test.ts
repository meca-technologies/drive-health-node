// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import DriveHealth from 'drive-health';
import { Response } from 'node-fetch';

const client = new DriveHealth({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource clara', () => {
  test('createReminder: only required params', async () => {
    const responsePromise = client.enterprise.clara.createReminder({
      reminder: { date: '2019-12-27', name: 'Medication Reminder', period: 'daily', time: 'time' },
      reminder_type: 'medication',
      user: { first_name: 'first_name', last_name: 'last_name', phone: '+46991022' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createReminder: required and optional params', async () => {
    const response = await client.enterprise.clara.createReminder({
      reminder: {
        date: '2019-12-27',
        name: 'Medication Reminder',
        period: 'daily',
        time: 'time',
        description: 'description',
      },
      reminder_type: 'medication',
      user: {
        first_name: 'first_name',
        last_name: 'last_name',
        phone: '+46991022',
        dob: '2019-12-27',
        gender: 'male',
        ref_id: 'ref_id',
      },
      medication: {
        dosage: 'dosage',
        fill_date: '2019-12-27',
        form: 'form',
        instructions: 'instructions',
        name: 'name',
        quantity: 0,
        refill_due: '2019-12-27',
        refill_left: 0,
        rx_number: 'rx_number',
        unit: 'unit',
      },
    });
  });

  test('registerWebCall: only required params', async () => {
    const responsePromise = client.enterprise.clara.registerWebCall({
      assistant_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      internal_user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('registerWebCall: required and optional params', async () => {
    const response = await client.enterprise.clara.registerWebCall({
      assistant_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      internal_user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
