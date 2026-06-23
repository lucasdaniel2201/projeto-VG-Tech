import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app.js';

const app = createApp();

describe('GET /voos/:from/:to', () => {
  it('deve retornar voo com siglas válidas', async () => {
    const res = await request(app).get('/voos/SP/RJ');

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body.data.flight).toHaveProperty('from', 'SP');
    expect(res.body.data.flight).toHaveProperty('to', 'RJ');
    expect(res.body.data.flight).toHaveProperty('price');
  });

  it('deve retornar 400 para sigla curta demais', async () => {
    const res = await request(app).get('/voos/A/B');

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('success', false);
  });

  it('deve retornar 400 para sigla com números', async () => {
    const res = await request(app).get('/voos/S1/RJ');

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('success', false);
  });

  it('deve retornar 400 para sigla longa demais', async () => {
    const res = await request(app).get('/voos/SPPP/RJ');

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('success', false);
  });

  it('deve retornar dados em maiúsculas independente do input', async () => {
    const res = await request(app).get('/voos/sp/rj');

    expect(res.body.data.flight.from).toBe('SP');
    expect(res.body.data.flight.to).toBe('RJ');
  });
});

describe('GET /voos/:from/:to — rotas 404', () => {
  it('deve retornar 404 para rota de voo incompleta', async () => {
    const res = await request(app).get('/voos/SP');

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('success', false);
  });
});
