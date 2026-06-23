# 🚀 VG Tech API

<div align="center">

![License](https://img.shields.io/github/license/lucasdaniel2201/projeto-VG-Tech)
![Node](https://img.shields.io/badge/node-%3E%3D18-brightgreen)
![TypeScript](https://img.shields.io/badge/typescript-5.8-blue)
![Express](https://img.shields.io/badge/express-5.1-lightgrey)
![Tests](https://img.shields.io/badge/tests-11%2F11-brightgreen)

**API REST em Node.js + TypeScript + Express — boas práticas de backend moderno**

[![GitHub stars](https://img.shields.io/github/stars/lucasdaniel2201/projeto-VG-Tech?style=social)](https://github.com/lucasdaniel2201/projeto-VG-Tech)

</div>

---

## 📋 Sobre

Projeto desenvolvido como **teste técnico** para vaga de estágio, evoluído para demonstrar boas práticas de desenvolvimento backend com:

- **TypeScript** com tipagem estrita e ESM nativo
- **Express 5** com arquitetura modular (controllers, middlewares, validators)
- **Zod** para validação de entradas com mensagens de erro amigáveis
- **Swagger** para documentação interativa da API em `/docs`
- **Vitest** com 11 testes automatizados dos endpoints
- **ESLint + Prettier** para qualidade e consistência de código
- **Verificação de qualidade** com ESLint, TypeScript strict mode e 11 testes
- **Docker** com build multi-stage para deploy leve
- **Helmet + CORS + Morgan** para segurança e observabilidade

---

## 🛠️ Stack

| Camada | Tecnologia |
|---|---|
| Runtime | Node.js 18+ |
| Linguagem | TypeScript 5.8 |
| Framework | Express 5.1 |
| Validação | Zod 4 |
| Documentação | Swagger UI Express |
| Testes | Vitest + Supertest |
| Lint/Format | ESLint 10 + Prettier |
| Segurança | Helmet 8 + CORS |
| Container | Docker multi-stage |

---

## 🏗️ Arquitetura

```
src/
├── server.ts            ← Bootstrap (apenas listen)
├── app.ts               ← Config do Express (middlewares, rotas)
├── config/
│   ├── paths.ts         ← Paths do projeto
│   └── swagger.ts       ← Especificação OpenAPI 3.0
├── controllers/
│   ├── root.controller.ts
│   ├── health.controller.ts
│   ├── produtos.controller.ts
│   └── voos.controller.ts
├── middlewares/
│   ├── error-handler.ts ← AppError + handler global
│   ├── not-found.ts     ← Handler 404
│   └── validate.ts      ← Middleware genérico Zod
├── routes/
│   ├── index.ts          ← Agregador + /docs + /docs.json
│   ├── health.routes.ts
│   ├── produtos.routes.ts
│   └── voos.routes.ts
├── validators/
│   ├── produtos.schema.ts
│   └── voos.schema.ts
└── utils/
    └── logger.ts
```

---

## 🚀 Como Rodar

### Pré-requisitos

- **Node.js** >= 18.0.0
- **npm** >= 9

### Instalação

```bash
# Clone o repositório
git clone https://github.com/lucasdaniel2201/projeto-VG-Tech.git
cd projeto-VG-Tech

# Copie as variáveis de ambiente
cp .env.example .env

# Instale as dependências
npm install

# Inicie em modo desenvolvimento (com hot-reload)
npm run dev
```

O servidor estará rodando em **http://localhost:3000**.

### Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia com hot-reload (tsx watch) |
| `npm run build` | Compila TypeScript → `dist/` |
| `npm start` | Roda versão compilada (produção) |
| `npm test` | Executa os testes (Vitest) |
| `npm run test:watch` | Testes em modo watch |
| `npm run test:coverage` | Testes com relatório de cobertura |
| `npm run lint` | Verifica código com ESLint |
| `npm run lint:fix` | Corrige automaticamente problemas de lint |
| `npm run format` | Formata código com Prettier |
| `npm run format:check` | Verifica formatação sem alterar |

---

## 📡 Endpoints

### Raiz — Info do Dev

```http
GET /
```

```json
{
  "name": "Lucas Daniel",
  "role": "Backend Developer",
  "stack": ["Node.js", "TypeScript", "Express"],
  "links": {
    "github": "https://github.com/lucasdaniel2201",
    "docs": "/docs"
  }
}
```

### Health Check

```http
GET /health
```

```json
{
  "success": true,
  "status": "healthy",
  "timestamp": "2025-06-23T12:00:00.000Z",
  "uptime": 42.5,
  "nodeVersion": "v20.11.0"
}
```

### Produtos

```http
GET /produtos              # Lista todos os produtos
GET /produtos/:id          # Detalhe do produto (valida ID não vazio)
```

**Exemplo:**
```bash
curl http://localhost:3000/produtos/42
```

```json
{
  "success": true,
  "data": {
    "id": "42",
    "name": "Teclado Xyz",
    "price": 90
  }
}
```

### Voos

```http
GET /voos/:from/:to        # Simula rota de voo (valida siglas 2-3 letras)
```

**Exemplo:**
```bash
curl http://localhost:3000/voos/SP/RJ
```

```json
{
  "success": true,
  "data": {
    "flight": {
      "from": "SP",
      "to": "RJ",
      "price": 12345
    }
  }
}
```

### Swagger

```http
GET /docs                   # Documentação interativa (Swagger UI)
GET /docs.json              # Especificação OpenAPI em JSON
```

---

## 🧪 Testes

São **11 testes** cobrindo os 3 módulos:

```bash
npm test
```

```
✓ tests/health.test.ts  (1)
✓ tests/produtos.test.ts (4)
  - GET /produtos        — lista, estrutura
  - GET /produtos/:id    — válido, ID vazio (400)
✓ tests/voos.test.ts    (6)
  - GET /voos/:from/:to  — válido, sigla curta, números, longa, uppercase
  - 404 para rota incompleta
```

---

## 🐳 Docker

```bash
# Build da imagem
docker build -t vg-tech-api .

# Rodar container
docker run -p 3000:3000 --env-file .env vg-tech-api
```

---

## 📄 Licença

Este projeto está sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

<div align="center">
  <strong>Lucas Daniel</strong>
  <br />
  <a href="https://github.com/lucasdaniel2201">GitHub</a> &bull;
  <a href="https://linkedin.com/in/lucas-santos-a620011b9/">LinkedIn</a>
  <br /><br />
  <em>Projeto de portfólio — feedbacks e contribuições são bem-vindos!</em>
</div>
