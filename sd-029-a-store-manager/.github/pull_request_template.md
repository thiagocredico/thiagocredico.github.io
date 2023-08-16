# Projeto Store Manager

## O que vou desenvolver?

- Você vai desenvolver sua primeira API utilizando a arquitetura em camadas!
- A API a ser construída é um sistema de gerenciamento de vendas em que será possível criar, visualizar, deletar e atualizar produtos e vendas. Você deverá utilizar o banco de dados MySQL para a gestão de dados. Além disso, a API deve ser RESTful.
- Você também irá desenvolver testes para garantir as funcionalidade das implementações, uma habilidade essencial para a pessoa desenvolvedora.

Neste projeto, verificamos se você é capaz de:

- Interagir com um banco de dados relacional MySQL;
- Implementar uma API utilizando arquitetura em camadas;
- Criar validações para os dados recebidos pela API;
- Escrever testes para APIs para garantir a implementação dos endpoints;

## Missão essencial

- [X] PR aberto para entrega do projeto Store Manager

## O que preciso saber para fazer o projeto?

- [ ] Fazer a comunicação do Node com o Banco de Dados
- [ ] Criar a camada de modelo usando o fluxo TDD (Desenvolver o teste unitário e depois o código)
- [ ] Criar a camada de serviço usando o fluxo TDD (Desenvolver o teste unitário e depois o código)
- [ ] Criar a camada de controller usando o fluxo TDD (Desenvolver o teste unitário e depois o código)

## Habilidades para o projeto

### _Vão ser necessárias para realização do projeto_

<details>
   <summary>1. BE4.5 - Node.js: Express e MySQL</summary>

- [ ] [BE4.5 - Node.js: Express e MySQL](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/2ed87e4f-9049-4314-8091-8f71b1925cf6/day/6b700197-22c6-4a2d-b791-b66d5247d3f0/lesson/4083c533-2264-42eb-b39a-dd7cd5b505e8): Neste dia de conteúdo é apresentado pela primeira vez a integração de **Express** com **MySQL** que é uma habilidade que é replicada principalmente no dia BE5.1 para a criação da camada **Model**. Também é apresentado o uso do **docker-compose** para iniciar uma aplicação com banco de dados criando um container para cada responsabilidade (_api_ e _banco de dados_). Esse dia dá uma bagagem para começar a seção 5 entendendo o funcionamento básico da lib _mysql2_.

</details>

<details>
   <summary>2. BE5.1 - Arquitetura de Software: Camada Model</summary>

- [ ] [Implementando um CRUD do zero - Parte 1 - Camada Model](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/6b5ecd71-9499-4ffe-8776-e91e46f93a08/lesson/35826f95-5fc1-4985-8497-7fc1464a937a): Nesta lição existe um exemplo de como implementar uma função na camada **Model** para as funcionalidades `Listar pessoas passageiras` e `Buscar pessoas passageiras por id` através da implementação das funções `findAll` e `findById` na camada **Model**, em conjunto com a escrita dos **testes unitários** destas funções. Além disso, o vídeo que está no começo desta lição replica o código que é implementado nesta lição e na lição seguinte.
- [ ] [Implementando um CRUD do zero - Parte 2 - Camada Model](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/6b5ecd71-9499-4ffe-8776-e91e46f93a08/lesson/395a6abf-b513-40f2-b392-6d242671b0d9): Nesta lição existe um exemplo de como criar a funcionalidade `Cadastrar pessoa passageira` implementando a função `insert` na camada _**Model**_, em paralelo a isso é apresentado a escrita do **teste unitário** desta função. Também existe nesta lição uma instrução de como usar o VSCode para _**debbugar**_ código para encontrar erros de uma forma melhor que usar **console.log**.
- [ ] [Avaliando cobertura de teste com nyc](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/6b5ecd71-9499-4ffe-8776-e91e46f93a08/lesson/e3b85ab5-cb8d-422b-873d-5ba7ec8a2d83): Nesta lição é apresentado como a ferramenta _**nyc**_ mede a cobertura de testes de uma aplicação.
- [ ] [Refatorando a inserção de viagens](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/6b5ecd71-9499-4ffe-8776-e91e46f93a08/lesson/74cae9c5-01bf-4042-92fe-5850ff165cfa): Nesta lição é apresentado como começar **refatorar** a funcionalidade `Criar Viagem` para utilizar a camada **Model** e através da implementação da função `insert` no model de viagens, similar ao que foi apresentado na lição `Implementando um CRUD do zero - Parte 2 - Camada Model`.
- [ ] [Continuando a refatoração](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/6b5ecd71-9499-4ffe-8776-e91e46f93a08/lesson/db1a4c3f-759e-4e23-980d-4c9687683813): Nesta lição continuamos vendo o processo **refatoração** da funcionalidade `Criar Viagem` passando a responsabilidade da busca de uma viagem no banco para camada **Model** implementando a função `findById` similar a implementada na lição `Implementando um CRUD do zero - Parte 1 - Camada Model`. Também é apresentada uma terceira refatoração para funcionalidade de `Buscar viagens em Aberto`.

</details>

<details>
   <summary>3. BE5.2 - Arquitetura de Software: Camada Service</summary>

- [ ] [Implementando um CRUD do zero - Parte 3 - Camada Service](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/6e17b47a-8c39-46f0-aa0f-98d10e689e2d/lesson/7ff514c7-b101-422d-9ef0-73ad7220c90d): Nesta lição está a continuação da implementação das funcionalidades `Listar pessoas passageiras` e `Buscar pessoas passageiras por id` que começaram a ser implementadas na lição `Implementando um CRUD do zero - Parte 1 - Camada Model`. Aqui são implementadas as funções `findAll` e `findById` na camada **Service** e os respectivos testes unitários destas funções. Nesta lição é apresentado pela primeira vez o uso do módulo **Joi** e um contrato de retorno de funções do **Service** para fazer uma validação.
- [ ] [Implementando um CRUD do zero - Parte 4 - Camada Service](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/6e17b47a-8c39-46f0-aa0f-98d10e689e2d/lesson/09e9cd30-ce77-4dfc-98fa-12a5224b64c9): Nesta lição está a continuação da implementação da funcionalidade de `Cadastrar pessoa passageira` que começou na lição `Implementando um CRUD do zero - Parte 2 - Camada Model`. É implementada a função `createPassenger` que lida com as regras de negócio de validar se as informações para cadastrar uma pessoa passageira são válidas, utilizando o **Joi** e o contrato de retorno do service.
- [ ] [Refatorando - Parte 1](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/6e17b47a-8c39-46f0-aa0f-98d10e689e2d/lesson/9e624151-2c01-4af8-9564-62075b2514d1): Nesta lição é feita a refatoração da funcionalidade `Criar Viagem` para camada **Service** implementando a função `createTravel` que vai lidar com a responsabilidade de validar e _eventualmente_ cadastrar uma viagem e seus respectivos pontos de parada.
    - 💡**Dica:** Esta lição contém uma boa referência para lidar com inserção de dados em duas tabelas diferentes e como fazer inserção de várias linhas utilizando o `Promise.all`. Uma boa compreensão desta lição vai te ajudar a resolver o **requisito 5** 😉!
- [ ] [Validações](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/6e17b47a-8c39-46f0-aa0f-98d10e689e2d/lesson/b3016ec8-4df4-4ee9-9e71-22a5e77504ea): Nesta lição é apresentado mais um exemplo de como implementar validações na camada **Service** utilizando o **JOI** para uma regra de negócio mais complexa. Uma boa compreensão desta lição vai te ajudar a resolver o **requisito 6** 😉!
- [ ] [Refatorando - Parte 2](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/6e17b47a-8c39-46f0-aa0f-98d10e689e2d/lesson/3b63da9d-f106-417c-85ce-5e61cbc4f701): Esta lição contém mais um exemplo de refatoração através da camada **Service**, agora para funcionalidade `Buscar viagens em Aberto`.

</details>

<details>
   <summary>4. BE5.3: Arquitetura de Software: Camada Controller</summary>

- [ ] [Implementando um CRUD do zero - Parte 5 - Camada Controller](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/47e36934-739e-427e-b405-cda3908ff9b1/lesson/77d2e6be-f6c0-4853-87d2-a18ba4747bea): Esta lição apresenta a implementação das funcionalidades `Listar pessoas passageiras` e `Buscar pessoas passageiras por id` na camada **Controller** e seus respectivos testes unitários, apresentado algumas caraterísticas na etapa de _arranjo_ que é um pouco diferente dos testes das outras duas camadas.
- [ ] [Implementando um CRUD do zero - Parte 6 - Camada Controller](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/47e36934-739e-427e-b405-cda3908ff9b1/lesson/19b77051-8a63-4a33-9e89-81a5142d7623): Esta lição apresenta a implementação da funcionalidade `Cadastrar pessoa passageira` na camada **Controller** e seus respectivo teste unitário, aqui vemos como escrever o teste unitário simulando o envio dos dados no _body_ da requisição.
- [ ] [Implementando um CRUD do zero - Parte 7 - Camada Controller](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/47e36934-739e-427e-b405-cda3908ff9b1/lesson/b08267a0-3675-4947-923c-358438ef4d62): Esta parte mostra como organizar a aplicação para usar o recurso `Router` do Express para ser uma das partes da camada **Controller** com a responsabilidade de mapear as rotas para suas respectivas funções. Também nesta lição, há uma explicação sobre validações na camada **Controller** e qual a diferença para validações na camada **Service**.
- [ ] [Refatorando Controller - Parte 1](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/47e36934-739e-427e-b405-cda3908ff9b1/lesson/5dd8db22-92e7-472a-90a6-b170da1c7e98): Nesta lição é concluída a refatoração da funcionalidade `Criar viagem` refatorando sua lógica para camada **Controller** e seu respectivo teste unitário.
- [ ] [Refatorando Controller - Parte 2](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/47e36934-739e-427e-b405-cda3908ff9b1/lesson/91529b00-350c-448e-a6cf-b8f54b2a3609): Nesta lição é concluída a refatoração da funcionalidade `Listando as viagens em aberto` refatorando sua lógica para camada **Controller** e seu respectivo teste unitário.

</details>

### Conteúdos de Soft Skills

Bora relembrar conceitos importantes para gerir suas emoções durante o projeto?

- [ ] [Inteligência emocional](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/2e0692c9-e226-4e95-860a-b4cad80e3c3c/section/d041930c-2861-493a-ab7e-9f566aa90d29/day/6b885527-c7e6-468f-b5ae-6cf19d7aa110/lesson/87cad177-bff0-4beb-b9f8-c19b126513f7)
- [ ] [Emoções](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/2e0692c9-e226-4e95-860a-b4cad80e3c3c/section/d041930c-2861-493a-ab7e-9f566aa90d29/day/5b748ff2-db33-4356-95c8-709c9ff40263/lesson/ecf9bb36-ca1d-470c-bfe9-e5409e2e3e15)
- [ ] [Aprender a aprender](https://www.youtube.com/watch?v=zPXhXfA2GEY)
- [ ] [Como lidar com a preocupação constante](https://zenklub.com.br/conteudo/jornadas/preocupacao---vermelho/?from=library)


## Requisitos obrigatórios do Projeto

- [ ] 01 - Crie endpoints para listar produtos
- [ ] 02 - Crie endpoints para listar vendas
- [ ] 03 - Crie endpoint para cadastrar produtos
- [ ] 04 - Crie validações para o cadastro de produtos
- [ ] 05 - Crie endpoint para cadastrar vendas
- [ ] 06 - Crie validações para o cadastro de vendas
- [ ] 07 - Crie endpoint para atualizar um produto
- [ ] 08 - Crie endpoint para deletar um produto

:bulb: _**Dica:** Os requisitos 5 e 6 são os que exigem maior esforço no desenvolvimento. Separe um tempo de qualidade para focar nesses requisitos. Use a dica de revisar as lições. **[Refatorando - Parte 1](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/6e17b47a-8c39-46f0-aa0f-98d10e689e2d/lesson/9e624151-2c01-4af8-9564-62075b2514d1)** e **[Validações](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/d8fc0320-73f1-45d4-9f4f-2b6911b176b1/day/6e17b47a-8c39-46f0-aa0f-98d10e689e2d/lesson/b3016ec8-4df4-4ee9-9e71-22a5e77504ea)** para fazer esse requisito._

## Requisitos bônus

- [ ] 09 - Crie endpoint para deletar uma venda
- [ ] 10 - Crie endpoint para atualizar a quantidade de um produto em uma venda
- [ ] 11 - Crie endpoint para pesquisar produtos

---

## Bônus: Sugestão de Planejamento

O projeto possui 8 requisitos obrigatórios e 5 dias dedicados completamente. Para ser aprovado dentro do prazo regular vai ser necessário fazer no mínimo 7 dos requisitos obrigatórios. Se você fizer 2 requisitos por dia, é possível entregar o projeto praticamente inteiro dentro dos dias do projeto! 🤩

Segue uma sugestão de cronograma simplificado de planejamento. Fique a vontade para fazer as adaptações que achar necessário.

### **Dia 1:** Requisitos 1 e 2

- Os requisitos 1 são para o desenvolvimento dos _endpoints_ de listagem, que não demandam o desenvolvimento de uma regra de negócio nem validação. Aproveite para criar uma estrutura de projeto bem organizada e com uma boa cobertura de testes.

### Dia 2: Requisitos 3 e 4

- Os requisitos 3 e 4 são parte de uma mesma funcionalidade (_cadastrar um produto_).

- O requisito 3 é mais simples, pois apenas pede a criação do _endpoint_ sem validações (o _"caminho feliz"_).

- 💡Dica: Ao chegar no requisito 4, crie os testes de validação (os _"caminhos tristes"_) antes de implementar as validações, assim ficará mais fácil ver que a validação está funcionando corretamente.

### Dia 3: Requisito 5 e 6

- Os requisitos 5 e 6 são parte de uma mesma funcionalidade (_cadastrar uma venda_).

- Esses requisitos seguem na mesma linha dos requisitos 3 e 4, mas adicionam a complexidade de ter que manipular mais de uma tabela no banco de dados. Começar pelos testes é uma boa estratégia para esses requisitos!

### Dia 4: Requisitos 7 e 8

- O requisito 7 é um requisito mais rápido de desenvolver, pois pode aproveitar as validações do requisito 3, e o requisito 8 tem um esforço similar ao requisito 1.

### Dia 5: Requisitos bônus!

- Parabéns pelo seu esforço até aqui! Se você chegou no dia 5 com 7 dos requisitos obrigatórios feitos, você já está aprovado! 🎉

- Caso ainda não tenha completado os requisitos obrigatórios, aproveite o dia 5 para finalizar o que falta e, se ainda tiver tempo, comece a fazer os requisitos bônus! 🚀

Desejamos um bom projeto para todas as pessoas estudantes e que seja fonte de muito aprendizado. ✌️
