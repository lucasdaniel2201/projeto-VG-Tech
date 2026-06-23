/**
 * Configuração da especificação OpenAPI (Swagger).
 * Documentação interativa disponível em /docs.
 */

export const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'VG Tech API',
    version: '1.0.0',
    description:
      'API REST em Node.js + TypeScript + Express — demonstrando boas práticas de backend com validação, testes e documentação interativa.',
    contact: {
      name: 'Lucas Daniel',
      url: 'https://github.com/lucasdaniel2201',
    },
    license: {
      name: 'MIT',
      url: 'https://github.com/lucasdaniel2201/projeto-VG-Tech/blob/main/LICENSE',
    },
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor local (desenvolvimento)',
    },
  ],
  tags: [
    { name: 'System', description: 'Health check e informações da API' },
    { name: 'Produtos', description: 'CRUD de produtos' },
    { name: 'Voos', description: 'Simulação de rotas de voo' },
  ],
  paths: {
    '/': {
      get: {
        summary: 'Informações do desenvolvedor',
        tags: ['System'],
        responses: {
          '200': {
            description: 'OK',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    name: { type: 'string', example: 'Lucas Daniel' },
                    role: { type: 'string', example: 'Backend Developer' },
                    stack: {
                      type: 'array',
                      items: { type: 'string' },
                      example: ['Node.js', 'TypeScript', 'Express'],
                    },
                    links: {
                      type: 'object',
                      properties: {
                        github: { type: 'string' },
                        docs: { type: 'string' },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/health': {
      get: {
        summary: 'Verifica a saúde da aplicação',
        tags: ['System'],
        responses: {
          '200': {
            description: 'Aplicação saudável',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean', example: true },
                    status: { type: 'string', example: 'healthy' },
                    timestamp: { type: 'string', format: 'date-time' },
                    uptime: { type: 'number' },
                    nodeVersion: { type: 'string' },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/produtos': {
      get: {
        summary: 'Lista todos os produtos',
        tags: ['Produtos'],
        responses: {
          '200': {
            description: 'Lista de produtos',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean', example: true },
                    data: {
                      type: 'array',
                      items: {
                        type: 'object',
                        properties: {
                          id: { type: 'string' },
                          name: { type: 'string' },
                          price: { type: 'number' },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/produtos/{id}': {
      get: {
        summary: 'Retorna um produto pelo ID',
        tags: ['Produtos'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'ID do produto',
          },
        ],
        responses: {
          '200': {
            description: 'Produto encontrado',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean', example: true },
                    data: {
                      type: 'object',
                      properties: {
                        id: { type: 'string' },
                        name: { type: 'string' },
                        price: { type: 'number' },
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    '/voos/{from}/{to}': {
      get: {
        summary: 'Simula uma rota de voo entre dois estados',
        tags: ['Voos'],
        parameters: [
          {
            in: 'path',
            name: 'from',
            required: true,
            schema: { type: 'string', minLength: 2, maxLength: 3 },
            description: 'Sigla do estado de origem (ex: SP, RJ)',
          },
          {
            in: 'path',
            name: 'to',
            required: true,
            schema: { type: 'string', minLength: 2, maxLength: 3 },
            description: 'Sigla do estado de destino (ex: BA, MG)',
          },
        ],
        responses: {
          '200': {
            description: 'Detalhes do voo',
            content: {
              'application/json': {
                schema: {
                  type: 'object',
                  properties: {
                    success: { type: 'boolean', example: true },
                    data: {
                      type: 'object',
                      properties: {
                        flight: {
                          type: 'object',
                          properties: {
                            from: { type: 'string', example: 'SP' },
                            to: { type: 'string', example: 'RJ' },
                            price: { type: 'number', example: 12345 },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
          '400': {
            description: 'Parâmetros inválidos',
          },
        },
      },
    },
  },
};
