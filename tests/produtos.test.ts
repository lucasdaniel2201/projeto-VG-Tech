import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app.js';

const app = createApp();

describe('GET /produtos', () => {
  it('deve retornar lista de produtos', async () => {
    const res = await request(app).get('/produtos');

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toBeInstanceOf(Array);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it('cada produto deve ter id, name e price', async () => {
    const res = await request(app).get('/produtos');

    for (const produto of res.body.data) {
      expect(produto).toHaveProperty('id');
      expect(produto).toHaveProperty('name');
      expect(produto).toHaveProperty('price');
      expect(typeof produto.price).toBe('number');
    }
  });
});

describe('GET /produtos/:id', () => {
  it('deve retornar produto para ID válido', async () => {
    const res = await request(app).get('/produtos/42');

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data).toHaveProperty('id', '42');
    expect(res.body.data).toHaveProperty('name');
    expect(res.body.data).toHaveProperty('price');
  });

  it('deve retornar 400 para ID vazio', async () => {
    const res = await request(app).get('/produtos/%20'); // espaço = trimmed vazio

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('success', false);
  });
});
