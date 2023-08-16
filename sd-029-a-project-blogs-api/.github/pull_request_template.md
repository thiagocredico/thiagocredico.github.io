# Projeto API de Blogs

## O que vou desenvolver?

Você vai desenvolver uma API e um banco de dados para a produção de conteúdo para um blog! Para isso, desenvolverá uma aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts.

Neste projeto você irá:

- Desenvolver endpoints que estarão conectados ao seu banco de dados seguindo os princípios do REST;
- Trabalhar a relação user e post, visto que para fazer um post é necessário usuário e login
- Trabalhar a relação de posts para categories e de categories para posts, visto que será necessária a utilização categorias para os posts.

## Missão essencial

- [X] PR aberto para entrega do projeto API de Blogs

## O que preciso saber para fazer o projeto?

- [ ] Entender o conceito de Migrations
- [ ] Entender o conceito de Model
- [ ] Entender o conceito de Seeders
- [ ] Entender relacionamentos 1:N
- [ ] Entender relacionamentos N:N
- [ ] Entender como criar uma rota com JWT

## Habilidades para o projeto

### _Vão ser necessárias para realização do projeto_

- [ ] [Dia 01: ORM - Interface da aplicação com o banco de dados](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/0da9bd44-abf6-43d6-96b9-9614274e6c36/lesson/f0806ecc-6ea9-45e1-9c81-b92a60db9b6b)
- [ ] [Dia 02: ORM - Associations 1:1 e 1:N](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/94e113d7-6a86-4536-a1d3-08f55f557811/lesson/1f2a47c4-5a3c-411c-89cd-27190966915e)
- [ ] [Dia 03: ORM - Associations N:N e Transactions](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/22fa9643-5f27-41f5-943b-2c7cc1c67c01/lesson/be289f53-bd25-4a5f-817e-1770bbf006b4)
- [ ] [Dia 04: JWT - (JSON Web Token)](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/0ca77b1d-4770-4646-8368-167d2305e763/day/85fd2ed3-f6cc-4789-8990-7f5fe827422c/lesson/c93a3302-ddd6-4927-8c09-bf5307b5c492)
- [ ] [Mentoria - Revisão: criando do zero uma API com Sequelize](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/live-lectures/1ad46538-81ac-40b9-8a16-1fa50743c6cf/recording/c95da169-6d2e-4e85-87ba-01cdd8bc5d9a)
- [ ] [Mentoria - Revisitando JWT](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/live-lectures/1ad46538-81ac-40b9-8a16-1fa50743c6cf/recording/e54c047a-b364-43b0-9fff-009bdd93c8b5)

### Conteúdos de Soft Skills

- [ ] [Reconhecendo as nossas Emoções](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/2e0692c9-e226-4e95-860a-b4cad80e3c3c/section/d041930c-2861-493a-ab7e-9f566aa90d29/day/5b748ff2-db33-4356-95c8-709c9ff40263/lesson/b9ef55ce-a2c5-411b-914b-1cbdc5a00cc5)
- [ ] [Empatia](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/2e0692c9-e226-4e95-860a-b4cad80e3c3c/section/d041930c-2861-493a-ab7e-9f566aa90d29/day/bbba778d-382d-4387-a43d-4f94fca4c7c0/lesson/51278e0b-e687-4ef5-a2b7-4e20122c65ff)

## Requisitos obrigatórios do projeto

- [ ] 1. Crie migrations para as tabelas users, categories, blog_posts, posts_categories
- [ ] 2. Crie o modelo User em src/models/User.js com as propriedades corretas
- [ ] 3. Sua aplicação deve ter o endpoint POST /login
- [ ] 4. Sua aplicação deve ter o endpoint POST /user
- [ ] 5. Sua aplicação deve ter o endpoint GET /user
- [ ] 6. Sua aplicação deve ter o endpoint GET /user/:id
- [ ] 7. Crie o modelo Category em src/models/Category.js com as propriedades corretas
- [ ] 8. Sua aplicação deve ter o endpoint POST /categories
- [ ] 9. Sua aplicação deve ter o endpoint GET /categories
- [ ] 10. Crie o modelo BlogPost em src/models/BlogPost.js com as propriedades e associações corretas
- [ ] 11. Crie o modelo PostCategory em src/models/PostCategory.js com as propriedades e associações corretas
- [ ] 12. Sua aplicação deve ter o endpoint POST /post
- [ ] 13. Sua aplicação deve ter o endpoint GET /post
- [ ] 14. Sua aplicação deve ter o endpoint GET /post/:id
- [ ] 15. Sua aplicação deve ter o endpoint PUT /post/:id

## Requisitos bônus

- [ ] 16. Sua aplicação deve ter o endpoint DELETE /post/:id
- [ ] 17. Sua aplicação deve ter o endpoint DELETE /user/me
- [ ] 18. Sua aplicação deve ter o endpoint GET /post/search?q=:searchTerm

Desejamos um bom projeto para todas as pessoas estudantes e que seja fonte de muito aprendizado. ✌️
