# Boas-vindas ao repositório do projeto Zuck Challenge

Para realizar o projeto, atente-se a cada passo descrito a seguir e, se tiver qualquer dúvida, nos envie por _Slack_! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um _Pull Request_ para colocar seus arquivos.

## Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

## Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary>

  - **Cada grupo terá uma branch específica** no formato `main-group-X`. Ex: `main-group-1`; `main-group-2`; etc;

  - **Para entregar o seu projeto você deverá criar um `Pull Request` base neste repositório no formato `[MAIN GROUP X] [BASE]`**. Seu `Pull Request` deve apontar da branch `main-group-X` para a branch `main` (que será seu PR principal) e deve agregar todo o trabalho do seu grupo para avaliação no final do desenvolvimento;

  > Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/35e03d5e-6341-4a8c-84d1-b4308b2887ef/lesson/573db55d-f451-455d-bdb5-66545668f436) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!

  <br/>
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary>

A idealização de uma solução digital que torne um ou mais aplicativos do META mais inclusivos. 

O grupo deverá responder as seguintes perguntas na construção:
- Qual o público para o qual se destina essa solução?
- Que necessidade essa solução satisfaz?
- Porque implementar essa solução é relevante para a empresa (Meta)?
- Como essa solução se relaciona com diversidade e inclusão?

A solução deverá ser explicada no dia 5.4 através de uma **apresentação oral e visual**.

  <br/>
</details>

<details>
  <summary><strong>🗓 Data de Entrega</strong></summary>

  - Este projeto é em grupo;
  - Serão `1` dias de projeto, atente-se para os horários destinados ao desenvolvimento em cada um dos dias;
  - Data de entrega para **apresentação final** do projeto: `14/12/2022 14:00`.

  <br/>
</details>

## Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary>

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/sd-029-a-project-zuck-challenge.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `cd sd-029-a-project-zuck-challenge`
  - Vá para a branch do seu grupo, com `git checkout main-group-XX && git pull`, onde `XX` é o número do seu grupo. Exemplos: `main-group-1`, `main-group-22`.

  2. Instale as dependências [**Caso existam**]

  - Para isso, use o seguinte comando: `npm install`

  3. Faça alterações separadas por novas branchs, criadas a partir da branch `main-group-XX`. Lembre-se de criar uma nova branch para cada demanda. [**Se necessário**]

  - Verifique se você está na branch `main-group-XX`
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `main-group-XX`
    - Exemplo: `git checkout main-group-XX && git pull`
  - Agora, crie uma branch para a demanda que você vai desenvolver do seu projeto
    - Você deve criar uma branch com uma breve descrição da demanda a ser desenvolvida
    - Exemplo: `git checkout -b main-group-XX-cria-campo-de-input`

  4. Adicione as mudanças ao _stage_ do Git e faça um `commit`

  - Verifique se as mudanças ainda não estão no _stage_
    - Exemplo: `git status` (devem aparecer listadas as novas alterações em vermelho)
  - Adicione o novo arquivo ao _stage_ do Git
    - Exemplo:
      - `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial
    - Exemplo:
      - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

  5. Adicione a sua branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin main-group-XX-cria-campo-de-input`

  6. Crie um novo `Pull Request` _(PR)_

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-029-a-project-zuck-challenge/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a branch do grupo, `main-group-XX`, e a sua branch **com atenção**
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"[GRUPO XX] Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-029-a-project-zuck-challenge/pulls) e confira que o seu _Pull Request_ está criado

  7. Assim que aprovado por pelo menos duas pessoas do seu grupo e com o _Linter_ adereçado, acesse **SEU** _Pull Request_ e clique no botão _"Merge pull request"_

  <br/>
</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary>

  - Faça `commits` das alterações que você realizar no código regularmente;

  - Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto;

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
    2. `git add` _(para adicionar arquivos ao stage do Git)_
    3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
    4. `git push -u origin nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
    5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

  <br/>
</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary>

  Para sinalizar que o seu projeto está pronto para _"Code Review"_, faça o seguinte:

  - Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

    - No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

    - No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-029-a`.

  Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).
  
  <br/>
</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary>

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para te ajudar a revisar os _Pull Requests_.

<br/>
</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary>

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar o seu aprendizado lá é muito importante para quem deseja construir uma carreira de sucesso? Compartilhe esse projeto no seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre para a sua rede toda a sua evolução.

  <br/>
</details>

---

## Zuck Challenge: Desafio de soluções inclusivas para o Meta

Este documento descreve o desafio para a vaga de pessoa desenvolvedora no Meta.

### 👩🏿‍💻 O que precisa ser entregue

Para entregar o desafio, o grupo deverá fazer a entrega através deste repositório _(utilizando a branch de seu grupo)_ e apresentar em **3(três) minutos** a solução criada.

Para construção do desafio é necessário que o grupo reflita e apresente:

- 🖼️ **Identidade visual da equipe:** usem a(s) ferramenta(s) que preferirem para criarem uma apresentação curta e essa apresentação deverá ser entregue por aqui, na branch do seu respectivo grupo.

- 🫂**Quem somos:** Qual a marca pessoal que o grupo vai deixar? Um nome para a solução criada?

- 🏗️**Processo de desenvolvimento e aprendizagem:**
  - Qual o público para o qual se destina _(stakeholders)_ essa solução?
  - Que necessidade essa solução satisfaz?
  - Porque implementar essa solução é relevante para a empresa (Meta)?
  - Como essa solução se relaciona com diversidade e inclusão?
 
### 👁️‍🗨️ Avaliação

- A avaliação será realizada entre pares no momento de apresentação (explicação detalhada será realizada no dia da apresentação);
- A rubrica de avaliação pode ser acessada [nesse link](https://docsend.com/view/tu33jvuafzpj3q9v) e conta com os seguintes critérios:
  - Assertividade da comunicação;
  - Gestão do tempo: Organização da apresentação e da fala no tempo previsto [3 minutos];
  - Leitura de ambiente: Adaptar o discurso e postura para o público;
  - Os tópicos da apresentação devem estar de acordo ao que precisa ser entregue.
- **Dica:** Utilizem a rubrica como guia para montar a apresentação.

### 👥 Divisão dos grupos

Descubra [aqui](--link_aqui) quem será o seu grupo de trabalho.
