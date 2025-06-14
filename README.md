# Projeto de Teste Técnico - Estágio Node.js VG Tech Solutions

Este projeto foi desenvolvido como parte de um teste técnico para uma vaga de estágio, com o objetivo de demonstrar conhecimentos básicos em Node.js e na criação de rotas.

## 📜 Sobre

O projeto consiste em uma aplicação Node.js simples com duas rotas dinâmicas:

## 🚀 Como Rodar o Projeto Localmente

Siga os passos abaixo para executar o projeto em sua máquina.

### Pré-requisitos

* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)

### Passos

1.  **Clone o repositório:**

    ```bash
    git clone https://github.com/lucasdaniel2201/projeto-VG-Tech
    cd projeto-VG-Tech
    ```

2.  **Instale as dependências:**

    ```bash
    npm install
    ```

3.  **Inicie o servidor:**

    ```bash
    npm start
    ```

O servidor estará rodando em `http://localhost:2000`.

### Acessando as Rotas

* **Rota Dinâmica 1:** Acesse `http://localhost:2000/produtos/{id}`, no qual retorna um json com o ID dinâmico baseado no que foi digitado na url.
* **Rota Dinâmica 2:** Acesse `http://localhost:2000/voos/:from/:to`, substituindo `:from` por qualquer valor mas simulando uma sigla de estado de origem, e `:to` por qualquer valor mas simulando o estado de destino.
