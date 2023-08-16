# Boas-vindas ao repositório do projeto Trybewallet!

Para realizar o projeto, atente a cada passo descrito a seguir. Se tiver alguma dúvida, envie uma mensagem por Slack! #vamoquevamo 🚀

Agora, você vai aprender como estruturar o desenvolvimento de seu projeto a partir deste repositório utilizando uma branch específica e um Pull Request para colocar seus códigos.

# Termos e acordos

Ao iniciar este projeto, você concorda com as diretrizes do Código de Conduta e do Manual da Pessoa Estudante da Trybe.

# Entregáveis

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar seu projeto, você deverá criar um *Pull Request* neste repositório.

  Lembre-se de que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/fc998c60-386e-46bc-83ca-4269beb17e17/section/fe827a71-3222-4b4d-a66f-ed98e09961af/day/1a530297-e176-4c79-8ed9-291ae2950540/lesson/2281eade-e2de-436e-a783-6b4108d188cc) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Neste projeto, você vai desenvolver uma carteira de controle de gastos com conversor de moedas. Ao utilizar essa aplicação, a pessoa usuária deverá ser capaz de:

  - Adicionar, remover e editar um gasto.
  - Visualizar sua tabela de gastos.
  - Visualizar o total de gastos convertidos para uma moeda de sua escolha.
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

Neste projeto, verificamos se você é capaz de:

- Criar um _store_ Redux em aplicações React.

- Criar _reducers_ no Redux em aplicações React.

- Criar _actions_ no Redux em aplicações React.

- Criar _dispatchers_ no Redux em aplicações React.

- Usar os hooks do redux para manipulação e leitura do estado global..

- Criar _actions_ assíncronas na aplicação React que faz uso de Redux.
</details>

<details>
  <summary><strong>🗓 Data de Entrega</strong></summary><br />
  
  * Este projeto é individual;
  * São `X` dias de projeto;
  * Data para entrega final do projeto: `DD/MM/YYYY - 14:00h`.

</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Clone o repositório

  - Use o comando: `git clone git@github.com:tryber/beta-2023-project-trybewallet-ts.git`.
  - Entre na pasta do repositório que você acabou de clonar:
    - `beta-2023-project-trybewallet-ts`

  2. Instale as dependências

  - `npm install`.
  
  3. Crie uma branch a partir da branch `main`

  - Verifique se você está na branch `main`.
    - Exemplo: `git branch`
  - Se não estiver, mude para a branch `main`.
    - Exemplo: `git checkout main`
  - Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    - Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    - Exemplo: `git checkout -b joaozinho-sd-0x-project-trybewallet`

  4. Adicione as mudanças ao stage do Git e faça um `commit`

  - Verifique se as mudanças ainda não estão no stage.
    - Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  - Adicione o novo arquivo ao stage do Git.
    - Exemplo:
      - `git add .` (adicionando todas as mudanças – que estavam em vermelho – ao stage do Git)
      - `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  - Faça o `commit` inicial.
    - Exemplo:
      - `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
      - `git status` (deve aparecer uma mensagem tipo _nothing to commit_)

  5. Adicione a branch com o novo `commit` ao repositório remoto

  - Usando o exemplo anterior: `git push -u origin joaozinho-sd-0x-project-trybewallet`

  6. Crie um novo Pull Request (PR)

  - Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/beta-2023-project-trybewallet-ts/pulls)
  - Clique no botão verde _"New pull request"_
  - Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  - Coloque um título para a sua _Pull Request_
    - Exemplo: _"Cria tela de busca"_
  - Clique no botão verde _"Create pull request"_
  - Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  - **Não se preocupe em preencher mais nada por enquanto!**
  - Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/beta-2023-project-trybewallet-ts/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

  - Faça `commits` das alterações que você fizer no código regularmente.

  - Lembre-se de sempre atualizar o repositório remoto, após um ou alguns `commits`.

  - Os comandos que você utilizará com mais frequência são:
    1. `git status` (para verificar o que está em vermelho – fora do stage – e o que está em verde – no stage)
    2. `git add` (para adicionar arquivos ao stage do Git)
    3. `git commit` (para criar um commit com os arquivos que estão no stage do Git)
    4. `git push -u origin nome-da-branch` (para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)
    5. `git push` (para enviar o commit para o repositório remoto após o passo anterior)

</details>

<details>
  <summary><strong>🤝 Depois de terminar o desenvolvimento (opcional)</strong></summary><br />

  Para sinalizar que seu projeto está pronto para o _Code Review_, siga os passos a seguir.

  - Vá até a página **DO SEU** Pull Request, adicione a label **code-review** e marque as pessoas que estudam com você.

    - No menu à direita, clique no link **"Labels"** e escolha a label **code-review**.

    - No menu à direita, clique no link **"Assignees"** e escolha **seu usuário**.

    - No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

  Caso tenha alguma dúvida, assista a [este vídeo explicativo](https://vimeo.com/362189205).

</details>

<details>
  <summary><strong>🕵🏿 Revisando um pull request</strong></summary><br />

  Use o conteúdo sobre [Code Review](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/b3af2f05-08e5-4b4a-9667-6f5f729c351d/lesson/36268865-fc46-40c7-92bf-cbded9af9006) para revisar os Pull Requests.

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

  Para garantir a qualidade do código, utilize neste projeto o linter ESLint. Assim, o código estará alinhado com as boas práticas de desenvolvimento e será mais legível e de fácil manutenção! Para rodar o linter localmente no projeto, execute o comando a seguir.

  `npm run lint`

  ⚠ PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS. ATENTE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO! ⚠

  Em caso de dúvidas, confira o material do course sobre [ESLint e Stylelint](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/f04cdb21-382e-4588-8950-3b1a29afd2dd/section/3b1546b5-f7bc-40f7-a674-77b16c408756/lesson/0c9e8c0e-24c3-4526-ba6b-60d95913e022).
</details>

<a name="testes"></a>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

* <details><summary><b> Execução de testes de requisito</b></summary>

  Os testes deste projeto foram feitos por meio do [Cypress](https://www.cypress.io/how-it-works/). A resolução usada nos teste de layout é `1366 x 768` (1366 pixels de largura por 768 pixels de altura). Logo, recomenda-se desenvolver seu projeto usando a mesma resolução. Para facilitar a configuração dessa resolução, instale [este plugin](https://chrome.google.com/webstore/detail/window-resizer/kkelicaakdanhinjdeammmilcgefonfh?hl=en) do `Chrome`.

  Para o projeto ser validado, ele deve passar por todos os testes de comportamento. É possível realizar isso rodando `npm run cy`. Esse comando roda a suíte de testes do Cypress que verifica se o fluxo geral e os requisitos funcionais estão funcionando como deveriam. Você pode também executar o comando `npm run cy:open` para ter um resultado visual dos testes executados.

  Esses testes não consideram o layout de maneira geral, mas, sim, os atributos e as informações corretas. Então, preste atenção nesse aspecto. Os testes devolverão uma mensagem de erro caso não estejam passando (seja qual for o motivo). 😉

  **Atenção**: Sua aplicação deve estar rodando para que o Cypress no terminal possa testar.
  </details>

* <details><summary><b> Execução de um teste específico</b></summary>

  Para executar somente uma `spec` de testes, você pode rodar somente um arquivo de teste com o comando `npm run cy -- --spec cypress/integration/nomeDoArquivo_spec.js` ou selecionar qual delas você deseja após executar o comando `npm run cy:open`.

  ![image](./imgs/cy-specs.png)

  Além disso, é possível rodar apenas um trecho de um `spec`. Para isso, basta utilizar a função .only após o `describe`, `it` ou `test`. Com isso, será possível fazer com que apenas parte de um teste rode localmente e seja avaliada.

  ![image](./imgs/itOnly.png)

  </details>

* <details><summary><b> Execução de teste de cobertura</b></summary>

  Alguns requisitos irão pedir a você que desenvolva testes para sua aplicação. Esses testes serão avaliados por meio da cobertura de testes.

  É possível verificar o percentual da cobertura de testes com o comando `npm run coverage`. 

  Você também pode executar `npm run coverage -- --collectCoverageFrom=caminho/da/Pagina` para verificar o percentual de cobertura de testes de cada 'Página'. Por exemplo, para verificar a cobertura de testes da página de login, execute o comando `npm run coverage -- --collectCoverageFrom=src/pages/Login.js`.
  </details><br />
</details>

<details>
  <summary><strong id="como-desenvolver">:convenience_store: Desenvolvimento </strong></summary><br />

  Neste projeto, você vai desenvolver uma carteira de controle de gastos com conversor de moedas utilizando o Redux React. Na implementação, você deverá **obrigatoriamente** utilizar o seguinte formato do estado global:

```
  {
    user: {
      email: '', // string que armazena o e-mail da pessoa usuária
    },
    wallet: {
      currencies: [], // array de string
      expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
      editor: false, // valor booleano que indica se uma despesa está sendo editada
      idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
    }
  }
```

  É importante respeitar esse formato para que o avaliador funcione corretamente. Você pode adicionar novos campos ao seu estado global, mas essa estrutura básica deve se manter. Por exemplo, você pode adicionar uma propriedade `isFetching` em seu estado. Mas você **não** pode salvar as despesas em uma chave diferente de `wallet.expenses`.

  Para que os testes consigam acessar a `store` do Redux e realizar os testes, é necessário adicionar o seguinte bloco de código ao arquivo da `store`:

  ```javascript
  if (window.Cypress) {
    window.store = store;
  }
  ```

  **Observações importantes**

  - Devido à estrutura que o avaliador utiliza para realizar os testes, é necessário que o Redux esteja configurado, ou seja, que a store e os reducers estejam criados e conectados.

  <br />
  <details><summary><b> :bulb: Configurando o Redux DevTools</b></summary>

  Para usar o Redux DevTools com o Redux-Thunk, utilize uma biblioteca chamada `redux-devtools-extension`, que tem a função `composeWithDevTools`. Ela já está no package.json, portanto você deve apenas configurar sua store, por exemplo:

  ```javascript
  import { applyMiddleware, legacy_createStore as createStore } from 'redux';
  import { composeWithDevTools } from '@redux-devtools/extension';
  import thunk from 'redux-thunk';
  import reducer from './reducers';

  const store = createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(thunk),
    ),
  );

  export default store;
  ```
  </details>

  <details><summary><b> :bulb: Documentação da API de Cotações de Moedas</b></summary>

  Sua página web irá consumir os dados da API do _awesomeapi API de Cotações_ para realizar a busca de câmbio de moedas. Para realizar essas buscas, você precisará consultar o seguinte endpoint:

  - <https://economia.awesomeapi.com.br/json/all>

  O retorno desse endpoint será similiar a:

  ```json
  {
    {
      "USD": {
        "code":"USD",
        "codein":"BRL",
        "name":"Dólar Americano/Real Brasileiro",
        "high":"5.6689",
        "low":"5.6071",
        "varBid":"-0.0166",
        "pctChange":"-0.29",
        "bid":"5.6173",
        "ask":"5.6183",
        "timestamp":"1601476370",
        "create_date":"2020-09-30 11:32:53"
        },
        ...
    }
  }
  ```

  Para aprender mais sobre a API, veja [esta documentação](https://docs.awesomeapi.com.br/api-de-moedas).
  </details><br />

</details>

<details>
  <summary><strong>🗣 Nos dê feedbacks sobre o projeto!</strong></summary><br />

Ao finalizar e submeter o projeto, não se esqueça de avaliar sua experiência preenchendo o formulário a seguir. 
**Leva menos de 3 minutos!**

[FORMULÁRIO DE AVALIAÇÃO DE PROJETO](https://be-trybe.typeform.com/to/ZTeR4IbH)

</details>

<details>
  <summary><strong>💻 Protótipo do projeto no Figma</strong></summary><br />

  Além da qualidade do código e do atendimento aos requisitos, um bom layout é um dos aspectos responsáveis por melhorar a usabilidade de uma aplicação e turbinar seu portfólio!

  Você pode estar se perguntando: *Como deixo meu projeto com um layout mais atrativo?* 🤔

  Para isso, disponibilizamos [este protótipo do Figma](https://www.figma.com/file/ibAEAbS7A6EBprCvXJNhbt/%5BProjeto%5D%5BFrontend%5D-TrybeWallet?node-id=0%3A1)!

  ⚠️ A estilização de sua aplicação não será avaliada nesse projeto, portanto esse protótipo é apenas uma **sugestão** e seu uso é **opcional**. Sinta-se à vontade para modificar o layout e deixá-lo do seu jeito.

</details>

<details>
  <summary><strong>🗂 Compartilhe seu portfólio!</strong></summary><br />

  Agora que você finalizou os requisitos, chegou a hora de mostrar ao mundo que você aprendeu algo novo! 🚀

  Siga [**este guia**](https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c936530fd326/module/a3cac6d2-5060-445d-81f4-ea33451d8ea4/section/d4f5e97a-ca66-4e28-945d-9dd5c4282085/day/eff12025-1627-42c6-953d-238e9222c8ff/lesson/49cb103b-9e08-4ad5-af17-d423a624285a) para disponibilizar o projeto finalizado em seu GitHub pessoal.

  Esse passo é muito importante para que você ganhe mais visibilidade no mercado de trabalho, mas também é útil para manter um backup de seu trabalho.

  Você sabia que o LinkedIn é a principal rede social profissional e compartilhar seu aprendizado lá é muito importante caso deseje construir uma carreira de sucesso? Compartilhe esse projeto em seu LinkedIn, marque o perfil da Trybe (@trybe) e mostre à sua rede toda a sua evolução.

  </details>

# Requisitos

:warning: **PULL REQUESTS COM ISSUES DE LINTER NÃO SERÃO AVALIADAS.** :warning:

:warning: Os GIFs são meramente ilustrativos para visualizar o fluxo da aplicação. Os nomes devem seguir os requisitos e não o GIF. :warning:

---

## Página de login

Crie uma página para que a pessoa usuária se identifique com e-mail e senha. Essa página deve ser a página inicial de seu aplicativo.

<details><summary> Página de login</summary>

  ![image](./imgs/login.gif)
</details><br />

## 1. Crie uma página inicial de login com os seguintes campos e características:

* A rota para esta página deve ser `/`.

* <details><summary> Você deve criar um local para que a pessoa usuária insira seu e-mail e sua senha:</summary>

  - O campo para o e-mail precisa ter o atributo `data-testid="email-input"`.
  - O e-mail precisa estar em um formato válido, como 'alguem@alguem.com'.
  - O campo para a senha precisa ter o atributo `data-testid="password-input"`.
  - A senha precisa ter 6 ou mais caracteres.
</details>

* <details><summary> Crie um botão com o texto <code>Entrar</code>:</summary>

  - O botão precisa estar **desabilitado** caso o e-mail não tenha um formato válido ou a senha possua um tamanho menor que 6 caracteres.

  - Salve o e-mail no estado global da aplicação com a chave **_e-mail_** assim que a pessoa usuária logar.

  - A rota deve ser mudada para `/carteira` após o clique no botão `**Entrar**`.
</details>

<br />
<details><summary><strong>O que será verificado</strong></summary><br />

- A rota para esta página é `"/"`.
- É renderizado um elemento para que a pessoa usuária insira seu e-mail e sua senha.
- É renderizado um botão com o texto `Entrar`.
- <details><summary> Foram realizadas as seguintes verificações nos campos de e-mail, senha e botão:</summary>

  - É um e-mail no formato válido.
  - A senha tem 6 ou mais caracteres.
  - O botão `Entrar` é desabilitado caso o e-mail e/ou a senha estejam no formato inválido.
  - O botão `Entrar` é habilitado caso o e-mail e a senha sejam válidos.
  </details><br />
- O e-mail é salvo no estado da aplicação, com a chave e-mail, assim que a pessoa usuária loga na página.
- A rota é alterada para `"/carteira"` após o clique no botão.
</details>

---

## Página da carteira

Crie uma página para que a pessoa usuária gerencie a carteira de gastos em diversas moedas. A página deve indicar a despesa total em real, que é representado pelo código BRL. Além disso, a página deve ser renderizada por um componente chamado **Wallet**.

- A rota para esta página deve ser `/carteira`.

<details><summary> Página da carteira:</summary>
  
  ![image](./imgs/carteira.gif)
</details><br />

---

## Header

## 2. Crie um header para a página de carteira com as seguintes características:

<details>
<summary>O componente `Header` deve ser renderizado dentro do componente [`Wallet`](#página-da-carteira)</summary><br />

* <details><summary> Um elemento que exiba o e-mail da pessoa usuária que fez login:</summary>

  - Adicione o atributo `data-testid="email-field"`.

  - :bulb: **Dica**: você deve pegar o e-mail do estado global da aplicação (no Redux).

* <details><summary> Um elemento com a despesa total gerada pela lista de gastos:</summary>

  - Adicione o atributo `data-testid="total-field"` neste elemento.

  - Inicialmente esse elemento deve exibir o valor `0`.

* <details><summary> Um elemento que mostre qual câmbio está sendo utilizado, o qual, nesse caso, será BRL:</summary>

  - Adicione o atributo `data-testid="header-currency-field"` nesse elemento.

</details>

<details>
  <summary><strong>O que será verificado</strong></summary>

- O elemento com o `data-testid="email-field"` renderiza o e-mail salvo no estado global.
- O elemento com o `data-testid="total-field"` inicialmente renderiza o valor `0`.
- O elemento com o `data-testid="header-currency-field` renderiza o texto `BRL`.
</details>

---

## 3. Desenvolva um formulário para adicionar uma despesa contendo as seguintes características:

<details><summary>O componente `WalletForm` deve ser renderizado dentro do componente <a href="#página-da-carteira"><code>Wallet</code></a></summary><br />

  * <details><summary> Um campo para adicionar valor da despesa:</summary>

      - Adicione o atributo `data-testid="value-input"`.

  * <details><summary> Um campo para adicionar a descrição da despesa:</summary>

      - Adicione o atributo `data-testid="description-input"`.

  * <details><summary> Um campo para selecionar em qual moeda será registrada a despesa:</summary>

    - O campo deve ser um `<select>`.
    - Adicione o atributo `data-testid="currency-input"`.
    - As options devem ser preenchidas pelo valor da chave `currencies` do estado global.
      - Os valores da chave <code>currencies</code> no estado global devem ser puxados por meio de uma requisição à API no endpoint `https://economia.awesomeapi.com.br/json/all`.
      - Remova, das informações trazidas pela API, a opção 'USDT'.
      - A chave `currencies` do estado global deve ser um array.

  * <details><summary> Um campo para adicionar o método de pagamento utilizado:</summary>

    - Esse campo deve ser um `<select>`.
    - Adicione o atributo `data-testid="method-input"`.
    - A pessoa usuária deve poder escolher entre os campos: 'Dinheiro', 'Cartão de crédito' e 'Cartão de débito'.

  * <details><summary> Um campo para selecionar uma categoria (tag) para a despesa:</summary>

    - O campo deve ser um `<select>`.
    - Adicione o atributo `data-testid="tag-input"`.
    - Esse campo deve ser um dropdown. A pessoa usuária deve poder escolher entre os campos: 'Alimentação', 'Lazer', 'Trabalho', 'Transporte' e 'Saúde'.

  <br />
  <details>
    <summary><strong>Observações importantes:</strong></summary><br />

    Note que os campos `<select>` já iniciam com um valor selecionado em seu navegador. Você também pode verificar por meio do React Developer Tools se o estado de seu componente inicializa de modo sincronizado com o que é exibido no navegador.

    Para ilustrar, imagine que o estado inicial seja uma string vazia. Nesse caso, a pessoa usuária poderá facilmente causar um problema onde ela acredita que a opção já está selecionada (uma vez que o select mostra um valor), quando na verdade ela ainda não está (o estado foi inicializado com uma string vazia). Por esse motivo, é importante sincronizar o mesmo valor inicial do `<select>` em seu estado no React, em vez de inicializar com uma string vazia.

  <br />
  <details><summary> Ilustração do formulário</summary>

  ![image](./imgs/addItem.gif)
  </details><br />
</details>
</details>

<details><summary> Desenvolva a funcionalidade do botão `Adicionar despesa` de modo que, ao clicar no botão, as ações descritas a seguir sejam executadas.</summary>

  - Crie um botão com o texto `Adicionar despesa`. Ele servirá para salvar as informações da despesa no estado global e atualizar a soma de despesas no header.

  - <details><summary> Os valores dos campos devem ser salvos no estado da aplicação, na chave <b><i>expenses</i></b>, dentro de um array contendo todos gastos que serão adicionados:</summary>

    - O `id` da despesa **deve** ser um número sequencial que comece em 0. Assim, a primeira despesa terá id 0, a segunda terá id 1, a terceira terá id 2, e assim por diante.
    - :bulb: **Atenção**: você deverá fazer uma requisição para a API e buscar a cotação no momento em que o botão `Adicionar despesa` for apertado. Para isso, você poderá utilizar um thunk.
      - **Você deverá salvar a cotação do câmbio feita no momento da adição** para efetuar a edição do gasto (requisito 8). Caso você não tenha essa informação salva, o valor da cotação trazida poderá ser diferente do obtido anteriormente.

    </details>

  - <details><summary> Após adicionar a despesa:</summary>

    - Atualize a soma total das despesas (por meio da chave `ask`). Essa informação deve ficar no [`header`](#2-crie-uma-página-para-sua-carteira-com-as-seguintes-características), dentro do elemento com `data-testid="total-field"`.
      - O elemento com o testID deve conter apenas a soma total das despesas.
      - O valor total deverá ser exibido com duas casas decimais. Exemplo: (valor – ponto – duas casas decimais) `100.00` `23.50`

    - Limpe os inputs de valor e descrição.
    </details>

  - <details><summary> As despesas salvas no Redux ficarão com um formato semelhante ao seguinte:</summary>

      ```javascript
      expenses: [{
        "id": 0,
        "value": "3",
        "description": "Hot Dog",
        "currency": "USD",
        "method": "Dinheiro",
        "tag": "Alimentação",
        "exchangeRates": {
          "USD": {
            "code": "USD",
            "name": "Dólar Comercial",
            "ask": "5.6208",
            ...
          },
          "CAD": {
            "code": "CAD",
            "name": "Dólar Canadense",
            "ask": "4.2313",
            ...
          },
          "EUR": {
            "code": "EUR",
            "name": "Euro",
            "ask": "6.6112",
            ...
          },
          "GBP": {
            "code": "GBP",
            "name": "Libra Esterlina",
            "ask": "7.2498",
            ...
          },
          "ARS": {
            "code": "ARS",
            "name": "Peso Argentino",
            "ask": "0.0729",
            ...
          },
          "BTC": {
            "code": "BTC",
            "name": "Bitcoin",
            "ask": "60299",
            ...
          },
          "LTC": {
            "code": "LTC",
            "name": "Litecoin",
            "ask": "261.69",
            ...
          },
          "JPY": {
            "code": "JPY",
            "name": "Iene Japonês",
            "ask": "0.05301",
            ...
          },
          "CHF": {
            "code": "CHF",
            "name": "Franco Suíço",
            "ask": "6.1297",
            ...
          },
          "AUD": {
            "code": "AUD",
            "name": "Dólar Australiano",
            "ask": "4.0124",
            ...
          },
          "CNY": {
            "code": "CNY",
            "name": "Yuan Chinês",
            "ask": "0.8278",
            ...
          },
          "ILS": {
            "code": "ILS",
            "name": "Novo Shekel Israelense",
            "ask": "1.6514",
            ...
          },
          "ETH": {
            "code": "ETH",
            "name": "Ethereum",
            "ask": "5184",
            ...
          },
          "XRP": {
            "code": "XRP",
            "name": "Ripple",
            "ask": "1.4",
            ...
          }
        }
      }]
      ```
    </details>
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary>

  <br />
  
  - <details><summary>Estrutura do formulário</summary><br />
  
    - O campo para adicionar o valor da despesa tem o `data-testid="value-input"`.
    - O campo para adicionar a descrição da despesa tem o `data-testid="description-input"`.
    - O campo para selecionar em qual moeda será registrada a despesa tem o `data-testid="currency-input"`.
      - A API é chamada com o endpoint `https://economia.awesomeapi.com.br/json/all`.
      - O valor da chave `currencies` no estado global é um array que tem as siglas das moedas que vieram da API.
      - O campo para selecionar em qual moeda será registrada a despesa tem options com os valores iguais ao do array localizado na chave currencies do estado global.
    - O campo para selecionar qual método de pagamento será utilizado tem o `data-testid="method-input"`.
    - O campo para selecionar qual método de pagamento será utilizado tem options com os valores `Dinheiro`, `Cartão de crédito` e `Cartão de débito`.
    - O campo para selecionar uma categoria (tag) da despesa tem o `data-testid="tag-input"`
    - O campo para selecionar uma categoria (tag) da despesa tem options com os valores `Alimentação`, `Lazer`, `Trabalho`, `Transporte` e `Saúde`.

  - <details><summary>Funcionalidades do formulário</summary><br />

    - É renderizado um botão com o texto `Adicionar despesa`.
    - Ao clicar no botão `Adicionar despesa`:
      - é feita uma requisição à API.
      - é salva uma nova despesa na chave `expenses` do estado global.
      - o valor total do elemento com o `data-testid="total-field"` é atualizado.
      - cada despesa tem um ID sequencial.
      - os inputs de valor e descrição voltam ao valor inicial, contendo o valor `""`.
      - é exibido o total das despesas com duas casas decimais no elemento com o `data-testid="total-field"` considerando a cotação localizada na chave `ask`.
  </details>
</details>

---

## 4. Desenvolva testes para atingir 60% de cobertura total da aplicação:

<details>
<summary><strong>Observações técnicas</strong></summary><br />

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver os testes unitários e de integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
  * Em caso de dúvidas, leia a seção <a href="#testes">Testes > Execução de teste de cobertura</a>.

</details>

<details>
<summary><strong>O que será avaliado</strong></summary><br />

  * Será validado se, ao executar `npm run coverage`, são obtidos os seguintes resultados:
    * `% Stmts` da linha `All files` é maior ou igual a 60.
    * `% Branch` da linha `All files` é maior ou igual a 60.
    * `% Funcs` da linha `All files` é maior ou igual a 60.
</details>

---

## Tabela de gastos

## 5. Desenvolva uma tabela de gastos contendo as seguintes características:

<details><summary> A tabela deve ter um cabeçalho com os seguintes valores:</summary>
  O componente `Table` deve ser renderizado dentro do componente [`Wallet`](#página-da-carteira).

    - Descrição;
    - Tag;
    - Método de pagamento;
    - Valor;
    - Moeda;
    - Câmbio utilizado;
    - Valor convertido;
    - Moeda de conversão;
    - Editar/Excluir.
</details><br />

<details><summary> A tabela deve ser alimentada pelo estado da aplicação, que estará disponível na chave <b><i>expenses</i></b>, que vem do <i>reducer</i> <code>wallet</code>:</summary>.

  - O campo de `Moeda` deverá conter o nome da moeda. Portanto, em vez de conter 'USD' ou 'EUR', o campo deve apresentar "Dólar Americano/Real Brasileiro" e "Euro/Real Brasileiro", respectivamente.

  - O elemento que exibe a `Moeda de conversão` deverá ser sempre 'Real'.

  - Como a tabela apresenta valores contábeis, eles devem ter duas casas após o ponto. Arredonde sua resposta somente na hora de renderizar o resultado e, para os cálculos, utilize sempre os valores vindos da API (utilize o campo `ask` que vem da API).

  - Utilize sempre o formato `0.00` (número – ponto – duas casas decimais).
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary>

  - A tabela tem um cabeçalho com elementos `<th>` com os valores `Descrição`, `Tag`, `Método de pagamento`,`Valor`, `Moeda`, `Câmbio utilizado`, `Valor convertido`, `Moeda de conversão` e `Editar/Excluir`.
  - A tabela é atualizada com as informações vindas da chave `expense` do estado global.
  - A tabela tem um corpo com um elemento `<tr>` para cada despesa.
  - O elemento `<tr>` tem elementos `<td>` com `Descrição`, `Tag`, `Método de pagamento`,`Valor`, `Moeda`, `Câmbio utilizado`, `Valor convertido` e `Moeda de conversão` de cada despesa.
</details>

---

## 6. Crie um botão para deletar uma despesa da tabela contendo as seguintes características:

<details><summary> Ilustração do botão</summary>

  ![image](./imgs/deleteBtn.gif)
</details>

* O botão deve ser o último item da linha da tabela e deve ter o atributo `data-testid="delete-btn"`.

* Após o botão ser clicado, as seguintes ações deverão ocorrer:
  * A despesa deverá ser deletada do estado global.
  * A despesa deixará de ser exibida na tabela.
  * O valor total exibido no header será alterado.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

- O botão se encontra no último elemento `<td>` de cada elemento `<tr>`.
- O botão tem o `data-testid="delete-btn"`.
- Ao clicar no botão, a despesa é removida do estado global e consequentemente da tabela.
- Ao clicar no botão, a despesa total é atualizada no header, subtraindo o valor correspondente.
</details>

---

# Requisitos Bônus

## 7. Crie um botão para editar uma despesa da tabela contendo as seguintes características:

<details><summary> Ilustração do botão</summary>

  ![image](./imgs/editBtn.gif)
</details>

* O botão deve estar dentro do último item da linha da tabela e deve ter `data-testid="edit-btn"`.

* <details><summary> Ao ser clicado, o botão habilita um formulário para editar a linha da tabela. Ao clicar em "Editar despesa", ela é atualizada, alterando o estado global.</summary>

  - O formulário deverá ter os mesmos `data-testid` do formulário de adicionar despesa. Assim, você pode reaproveitá-lo.

  - O botão para submeter a despesa para edição deverá conter **exatamente** o texto `Editar despesa`.

  - Após a edição da despesa, a ordem das despesas na tabela precisa ser mantida.

  - :bulb: **Observação**: para esse requisito, não é necessário popular os inputs com os valores prévios da despesa. A imagem do GIF é apenas uma sugestão. 

  - :bulb: Lembre-se de utilizar o formato do estado global da aplicação informado na seção <a href="#como-desenvolver">Desenvolvimento</a>.

  - **Atenção**: o câmbio utilizado na edição deve ser o mesmo do cálculo feito na adição do gasto.
</details><br />

<details>
  <summary><strong>O que será verificado</strong></summary>

- O botão se encontra no último elemento `<td>` de cada elemento `<tr>`.
- O botão tem o `data-testid="edit-btn"`.
- Ao ser clicado, o formulário de adição passa a ser um formulário de edição.
- Ao ser clicado, o botão com o texto `Adicionar Despesa` é alterado para `Editar despesa`.
- Após editar uma despesa, a chave `expenses` no estado global é atualizada com o novo valor.
- A ordem das despesas é mantida após a edição.
- O valor no campo com o `data-testid="total-field"` é atualizado após a edição de uma despesa.
</details>

## 8. Desenvolva testes para atingir 90% de cobertura total da aplicação:

<details>
<summary><strong>Observações técnicas</strong></summary><br />

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver os testes unitários e de integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.
  * Em caso de dúvidas, leia a seção <a href="#testes">Testes > Execução de teste de cobertura</a>.

</details>

<details>
<summary><strong>O que será avaliado</strong></summary><br />

  * Será validado se, ao executar `npm run coverage`, são obtidos os seguintes resultados:
    * `% Stmts` da linha `All files` é maior ou igual a 90.
    * `% Branch` da linha `All files` é maior ou igual a 90.
    * `% Funcs` da linha `All files` é maior ou igual a 90.
</details>
