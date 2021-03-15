/* eslint-disable no-undef */
const request = require('supertest');
const app = require('../../src/app/main');
const SquareMeters = require('../../src/app/service/SquareMeters');

describe('API', () => {
  test('calculate square meter and return success ', async () => {
    const response = await request(app)
      .get('/square-meters/calculation')
      .query({ meter: 10, value: 10 });
    expect(response.body).toStrictEqual({ success: 'R$100,00' });
  });

  test('calculate square meter and return error meter has to be a bigger than 10', async () => {
    const response = await request(app)
      .get('/square-meters/calculation')
      .query({ meter: 1, value: 10 });
    expect(response.body).toStrictEqual({
      ValidationError: 'meter has to be a bigger than 10',
    });
  });

  test('calculate square meter and return error meter has to be a less than 10000', async () => {
    const response = await request(app)
      .get('/square-meters/calculation')
      .query({ meter: 100000, value: 10 });
    expect(response.body).toStrictEqual({
      ValidationError: 'meter has to be a less than 10000',
    });
  });

  test('calculate square meter and return error meter is a required field', async () => {
    const response = await request(app)
      .get('/square-meters/calculation')
      .query({ value: 10 });
    expect(response.body).toStrictEqual({
      ValidationError: 'meter is a required field',
    });
  });

  test('calculate square meter and return meter has to be a bigger than 10 - meter have to be positive number', async () => {
    const response = await request(app)
      .get('/square-meters/calculation')
      .query({ meter: -10, value: 10 });
    expect(response.body).toStrictEqual({
      ValidationError: 'meter has to be a bigger than 10',
    });
  });

  test('calculate square meter without pass value parameter', async () => {
    const stubFind = jest
      .spyOn(SquareMeters, 'value')
      .mockReturnValue({ data: { value: '10' } });
    const response = await request(app)
      .get('/square-meters/calculation')
      .query({ meter: 10 });
    expect(stubFind).toBeCalled();
    expect(response.body).toStrictEqual({
      success: 'R$100,00',
    });
  });
});
