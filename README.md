<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).





Este repositório contém o backend do App "PRODEX", um Aplicativo de gerenciamento de produtos (CRUD de produtos) desenvolvido com NestJS.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js (>= v14.x)
- npm (>= v6.x) ou yarn (>= v1.x)
- NestJS CLI (opcional, mas recomendado):  
  ```bash
  npm install -g @nestjs/cli
  ```

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/kalielfoliveira/backend-product-management.git
   cd backend-product-management
   ```

2. Instale as dependências:
   ```bash
   # usando npm
   npm install

   # ou usando yarn
   yarn install
   ```

## Executando o Projeto

- Em modo desenvolvimento:
  ```bash
  npm run start:dev
  ```
- Em modo produção:
  ```bash
  npm run build
  npm run start:prod
  ```

O servidor ficará disponível em `http://localhost:3000`.


## Testando com Postman

Para testar todas as rotas da API (CRUD e regras de negócio), importe a Collection abaixo no Postman:

[Produtos.postman_collection.json](https://github.com/user-attachments/files/20757635/Produtos.postman_collection.json)

Ou, se você tiver o arquivo JSON exportado, basta usar **File > Import** no Postman.

### Pasta “CRUD’s”

1. **Consulta Produto**  
   • Método: GET  
   • URL: `http://localhost:3000/products`

2. **Consulta Produto por ID**  
   • Método: GET  
   • URL: `http://localhost:3000/products/22339b4b-1848-4eec-9413-a3d4d14e09c1`

3. **Criar Produto**  
   • Método: POST  
   • URL: `http://localhost:3000/products`  
   • Body (raw JSON):
   ```json
   {
     "name": "Livro de NestJS",
     "description": "Livro sobre backend com NestJS",
     "price": 80,
     "favorite": false,
     "bought": false
   }
   ```

4. **Atualizar Produto**  
   • Método: PATCH  
   • URL: `http://localhost:3000/products/1b725775-b4e0-488f-98d9-374fab6b4847`  
   • Body (raw JSON):
   ```json
   {
     "id": "1b725775-b4e0-488f-98d9-374fab6b4847",
     "name": "Livro de ANGULAR",
     "description": "Livro sobre aprendizado de código do Framework ANGULAR",
     "price": 30,
     "favorite": true,
     "bought": false
   }
   ```

5. **Remover Produto**  
   • Método: DELETE  
   • URL: `http://localhost:3000/products/56461440-b476-4503-ad16-358863864185`

---

### Pasta “Regras de Negócio”

1. **Criar Produto – Nome duplicado**  
   • Método: POST  
   • URL: `http://localhost:3000/products`  
   • Body:
   ```json
   {
     "name": "Livro de ANGULAR",
     "description": "Livro sobre aprendizado de código do Framework ANGULAR",
     "price": 50,
     "favorite": false,
     "bought": false
   }
   ```

2. **Criar Produto – Preço inválido**  
   • Método: POST  
   • URL: `http://localhost:3000/products`  
   • Body:
   ```json
   {
     "name": "Mouse Gamer",
     "description": "Mouse para jogos",
     "price": 0,
     "favorite": false,
     "bought": false
   }
   ```

3. **Criar Produto – Descrição curta**  
   • Método: POST  
   • URL: `http://localhost:3000/products`  
   • Body:
   ```json
   {
     "name": "Teclado",
     "description": "Bom",
     "price": 150,
     "favorite": false,
     "bought": false
   }
   ```

4. **Criar Produto – Campo favorite não booleano**  
   • Método: POST  
   • URL: `http://localhost:3000/products`  
   • Body:
   ```json
   {
     "name": "Monitor",
     "description": "Monitor Full HD",
     "price": 800,
     "favorite": "sim",
     "bought": false
   }
   ```

5. **Buscar Produto por ID – UUID inválido**  
   • Método: GET  
   • URL: `http://localhost:3000/products/123`

6. **Criar Produto – Campo bought não booleano**  
   • Método: POST  
   • URL: `http://localhost:3000/products`  
   • Body:
   ```json
   {
     "name": "Cadeira Gamer",
     "description": "Cadeira confortável para jogos",
     "price": 1200,
     "favorite": false,
     "bought": "não"
   }
   ```

7. **Buscar Produto por ID – Produto não encontrado**  
   • Método: GET  
   • URL: `http://localhost:3000/products/1b725775-b4e0-488f-98d9-374fab6b4847`

8. **Criar Produto – Nome com caractere especial**  
   • Método: POST  
   • URL: `http://localhost:3000/products`  
   • Body:
   ```json
   {
     "id": "22339b4b-1848-4eec-9413-a3d4d14e09c1",
     "name": "Notebook@Dell",
     "description": "Notebook para trabalho",
     "price": 3500,
     "favorite": false,
     "bought": false
   }
   ```

9. **Criar Produto – UUID inválido**  
   • Método: POST  
   • URL: `http://localhost:3000/products`  
   • Body:
   ```json
   {
     "id": "123",
     "name": "SSD Samsung",
     "description": "SSD NVMe de 1TB",
     "price": 600,
     "favorite": false,
     "bought": false
   }
   ```

10. **Criar Produto – Preço acima do máximo**  
    • Método: POST  
    • URL: `http://localhost:3000/products`  
    • Body:
    ```json
    {
      "id": "d8e9f0a1-2b3c-4d5e-9f0a-1b2c3d4e5f6a",
      "name": "Drone DJI",
      "description": "Drone com câmera 4K",
      "price": 200000,
      "favorite": false,
      "bought": false
    }
    ```

11. **Criar Produto – Descrição com link**  
    • Método: POST  
    • URL: `http://localhost:3000/products`  
    • Body:
    ```json
    {
      "id": "d8e9f0a1-2b3c-4d5e-9f0a-1b2c5d1e2f6a",
      "name": "Gabinete Gamer",
      "description": "Veja mais em http://manfrotto.com",
      "price": 400,
      "favorite": false,
      "bought": false
    }
    ```

## Estrutura de Pastas

```
src/
├── app.module.ts        # Módulo raiz
├── products/            # Módulo, controller e service de produtos
│   ├── dto/             # Data Transfer Objects
│   ├── entities/        # Classes de entidade
│   ├── products.controller.ts
│   └── products.service.ts
└── main.ts              # Bootstrap do NestJS
```
