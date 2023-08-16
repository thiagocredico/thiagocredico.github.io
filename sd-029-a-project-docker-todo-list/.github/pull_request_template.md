# Projeto Docker Todo List

## O que vou desenvolver? 🤔

Você deverá desenvolver os arquivos de configuração para cada frente específica de um projeto: Front-end, Back-end e, no nosso caso, para um aplicativo de teste que valida se as aplicações estão se comunicando.

Neste projeto você irá:

- Conteinerizar aplicações;
- Criar uma conexão entre elas;
- Orquestrar seu funcionamento.

## Missão essencial ⭐️

- [X] PR aberto para entrega do projeto Docker Todo List

## O que preciso saber para fazer o projeto?

- [ ] Entender o que é um container;
- [ ] Entender o processo de criação de um container;
- [ ] Entender o que é Dockerfile;
- [ ] Entender o que é Docker Compose.

## Habilidades para o projeto 📚

### _Vão ser necessárias para realização do projeto_

- [ ] [Utilizando containers - Docker](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/a852c0dd-0602-4357-88e8-707352e97927/lesson/f8c01b36-6180-4b7e-905c-0b8645155889)
- [ ] [Manipulando imagens no Docker](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/da25fd46-8818-4234-8603-a442b047370f/lesson/670cdc27-f578-4733-907e-87652c46c002)
- [ ] [Orquestrando containers com Docker Compose](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/94d0e996-1827-4fbc-bc24-c99fb592925b/section/5987fa2d-0d04-45b2-9d91-1c2ffce09862/day/2f1a5c4d-74b1-488a-8d9b-408682c93724/lesson/170b7b6e-925c-40e8-9d0a-08e41f599ec5)

### Conteúdos de Soft Skills

- [ ] [Iniciamos o primeiro projeto do módulo de Back-end e você sabia que sua rotina pode ser decisiva no seu desempenho? Este vídeo explica como utilizar seus hábitos a favor da seu aprendizagem.](https://www.youtube.com/watch?v=9BtrLf6PfYY)
- [ ] [A etapa do planejamento não é seu ponto forte? Confira este artigo que lista 10 técnicas de gestão do tempo no trabalho.](https://blog.runrun.it/gestao-do-tempo/#h-os-principais-erros-cometidos-na-gestao-do-tempo%22%3E%3Cstrong%3EOs%20principais%20erros%20cometidos%20na%20gest%C3%A3o%20do%20tempo%E2%80%9D%3EOs%20principais%20erros%20cometidos%20na%20gest%C3%A3o%20do%20tempo%3C/a%3E%3C/li%3E%3Cli%3E%3Ca%20href=)

### Materiais complementares e links úteis 🏆

- [ ] [Dockerfile e Cheat Sheet!](https://trybecourse.slack.com/archives/C05891KFGES/p1684781318481079)
- [ ] [Informações úteis e interessantes](https://trybecourse.slack.com/archives/C05891KFGES/p1684877989700629)

🎥 Todas as aulas ao vivo e as mentorias estruturadas podem ser encontradas no course 🎥

## Requisitos obrigatórios do Projeto

- [ ] 1. Crie um container em modo interativo, sem rodá-lo, nomeando-o como 01container e utilizando a imagem alpine na versão 3.12 (2 pontos de dificuldade)

- [ ] 2. Inicie o container 01container (2 pontos de dificuldade)

- [ ] 3. Liste os containers filtrando pelo nome 01container (2 pontos de dificuldade)

- [ ] 4. Execute o comando cat /etc/os-release no container 01container sem se acoplar a ele (2 pontos de dificuldade)

- [ ] 5. Remova o container 01container (2 pontos de dificuldade)

- [ ] 6. Faça o download da imagem nginx com a versão 1.21.3-alpine sem criar ou rodar um container (2 pontos de dificuldade)

- [ ] 7. Rode um novo container com a imagem nginx com a versão 1.21.3-alpine em segundo plano nomeando-o como 02images e mapeando sua porta padrão de acesso para porta 3000 do sistema hospedeiro (4 pontos de dificuldade)

- [ ] 8. Pare o container 02images que está em andamento (2 pontos de dificuldade)

- [ ] 9. Gere uma build a partir do Dockerfile do back-end do todo-app nomeando a imagem para todobackend (4 pontos de dificuldade)

- [ ] 10. Gere uma build a partir do Dockerfile do front-end do todo-app nomeando a imagem para todofrontend (4 pontos de dificuldade)

- [ ] 11. Gere uma build a partir do Dockerfile dos testes do todo-app nomeando a imagem para todotests (4 pontos de dificuldade)

### Requisitos bônus 🎁

- [ ] 12. Suba uma orquestração em segundo plano com o docker-compose de forma que backend, frontend e tests consigam se comunicar (6 pontos de dificuldade)

### ⏲️ Gestão de tempo

O tempo estimado para realização desse projeto é de x dias letivos (o equivale a algo entre xh a xh) levando em conta que você assimilou as habilidades necessárias para a realização do mesmo. Com base nisso deixamos algumas dicas de produtividade.

#### 1. Crie slots na sua agenda (google calendar) para focar no projete e intercale com momento de pausas.Use os slots para focar em um (ou mais) requisito(s)

Ex: Das 15h às 16h meu foco é fazer o requisito 1. Se você usar o pomodoro, pode se planejar para fazer dois sprints de 25 minutos com duas pausas de 5 minutos. Vá fazendo o mesmo com os demais requisitos. Um bom ponto de partida é estimar de 1 hora a 2 horas para cada requisito (dependendo do requisito talvez você leve um pouco mais ou menos de tempo). Faça dentro desses slots, ciclos de pomodoro que vai ajudar a você a ter uma estimativa. Se programe para que o excedente de tempo seja contemplado nos dias consecutivos dentro do prazo regular.

Estamos no ciclo de projeto e todo tempo possível para que você foque no aprendizado das novas habilidades que serão ensinadas nessa seção vai ser importante, além de que os novos conteúdos tem como base o conteúdo do projeto. Por isso a importância de ficar on-track. Não deixe para ultima hora. O prazo final é uma ferramenta para caso algum imprevisto aconteça que te impeça de realizar a entrega dentro do prazo regular.

Dificuldades técnicas podem surgir no caminho. Para te apoiar, temos as mentorias técnicas e o Slack. Então, não deixe de procurar o time de instrução caso tenha alguma dificuldade. Relacionando com o que vocês vão viver em breve no mercado de trabalho, é esperado que as entregas aconteçam dentro do prazo, demonstrando comprometimento e dedicação. Se no meio do caminho, entende-se que o prazo não é suficiente, a liderança deve ser acionada para ajudar com qualquer aspecto técnico, entender como o prazo dessa entrega pode ser ajustado e, te apoiar a recalcular a rota. E aqui, é muito importante dar visibilidade do que está acontecendo, praticando a transparência e pedindo ajuda.

Desejamos um bom projeto para todas as pessoas estudantes e que seja fonte de muito aprendizado. ✌️ 🎊🎉
