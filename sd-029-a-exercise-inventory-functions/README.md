# Boas-vindas ao repositório do Desafio Prático de Testes com Jest

Para realizar este desafio, uma pessoa do grupo deverá compartilhar a tela e clonar este repositório. Concentrem seus esforços na discussão dos testes, quais _matchers_ utilizar e como avaliar a cobertura do código. Todas as funções já estão implementadas na pasta `src` e a missão da sua equipe é implementar os testes na pasta `test`. Tenham tranquilidade de fazerem o quanto conseguirem, sem se preocupar se vão conseguir implementar todos os testes. Este exercício não possui avaliação automatizada, porém vocês podem acompanhar a cobertura de código ao rodar `npm test` 😉.

<details>
  <summary><strong>🤷🏽‍♀️ Como entregar</strong></summary><br />

  Para entregar o exercício sua equipe deverá criar um *Pull Request* neste repositório.

  Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://app.betrybe.com/course/4d67f5b4-34a6-489f-a205-b6c7dc50fc16/) e nosso [Blog - Git & GitHub](https://blog.betrybe.com/tecnologia/git-e-github/) sempre que precisar!
</details>

<details>
<summary>
  <strong>‼️ Antes de começar a desenvolver</strong>
</summary>

Para a pessoa compartilhando a tela:

1. Clone o repositório
  * `git clone git@github.com:tryber/sd-029-a-exercise-inventory-functions.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-029-a-exercise-inventory-tests`

2. Instale as dependências e inicialize o exercício
  * Instale as dependências:
    * `npm install`

3. Crie uma branch a partir da branch `main`
  * Verifique que você está na branch `main`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `main`
    * Exemplo: `git checkout main`
  * Agora, crie uma branch onde vai guardar os `commits` do exercício
    * Você deve criar uma branch no seguinte formato: `equipe-x-nome-do-exercicio`
    * Exemplo: `git checkout -b equipe-1-inventory-tests`

4. Quando fizer mudanças, adicione-as ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer as alterações realizadas em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado os arquivos em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o exercício. VAMOS COM TUDO :rocket:'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin equipe-1-inventory-tests`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-029-a-exercise-inventory-functions/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
    * Coloque um título para a sua _Pull Request_
    * Exemplo: _"Cria tela de busca"_
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_, um título claro que o identifique, e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-exercise-magic-card/pulls) e confira que o seu _Pull Request_ está criado

</details>

<details>
<summary>
  <strong>🛠 Como executar os testes?</strong>
</summary>

Para executar todos os testes utilize o comando: `npm test`.
Este exercício já está configurado para apresentar a cobertura de código. 
Para executar os testes de um arquivo específico adicione o nome do arquivo. 
Por exemplo:

```
npm test addToInventory
```

A saída da execução vai ser algo parecido com:

```
 PASS  test/addToInventory.test.js
  a função addToInventory
    ✎ todo adiciona item ao inventário
    ✎ todo lança exceção se não for passado um array

-------------------|---------|----------|---------|---------|-------------------
File               | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-------------------|---------|----------|---------|---------|-------------------
All files          |      25 |        0 |       0 |      25 |                   
 addToInventory.js |      25 |        0 |       0 |      25 | 2-5               
-------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       2 todo, 2 total
Snapshots:   0 total
Time:        0.183 s, estimated 1 s
Ran all test suites matching /addToInventory/i.
```

Cada arquivo de teste possui sugestões do que pode ser testado, na forma de `it.todo`.
Por exemplo:

```javascript
describe('a função addToInventory', () => {
  it.todo('adiciona item ao inventário');
});
```

Para implementar o teste remova o `.todo` e adicione a função com o seu teste. 
Exemplo:

```javascript
describe('a função addToInventory', () => {
  it('adiciona item ao inventário', () => {
    // seu teste vai aqui! ;)  
  });
});
```

Por fim, a execução do testes irá gerar um relatório em `coverage/lcov-report/index.html`. Acompanhem esse relatório a cada novo teste implementado, e discutam testes que vocês possam implementar para aumentar a cobertura de código.

</details>

## Exercícios

Dica: cada exercício contém dicas do que vocês podem testar. Procurem discutir (e implementar) suas sugestões de testes antes de olhar as dicas 😉;

### 1. Implemente os testes da função `addToInventory`

<details>
<summary>
  Dicas do que vocês podem testar:
</summary>

* Se ao chamar a função passando um novo item o tamanho do array aumentou em um;
* Se ao chamar a função passando um novo item o array contém o novo item; Lembrem que o valor que estamos [avaliando é um objeto dentro de um array](https://jestjs.io/pt-BR/docs/expect#tocontainequalitem).
* Se ao chamar a função sem parâmetros lança a exceção `O inventário deve ser um array`. Lembrem de envolver a chamada da função em uma nova função [para que o Jest possa capturar o erro.](https://jestjs.io/pt-BR/docs/using-matchers#exce%C3%A7%C3%B5es)

</details>


### 2. Implemente os testes da função `clearInventory`

<details>
<summary>
  Dicas do que vocês podem testar:
</summary>

* Se ao chamar a função passando um array com quatro itens, sendo que um destes tem `quantity` igual a zero:

  - o tamanho do array após chamar a função deve ser `3`;
  - o array não deve conter o item removido;

</details>

### 3. Implemente os testes da função `decrementQuantity`
  
<details>
<summary>
  Dicas do que vocês podem testar:
</summary>

* Se para um array, contendo um objeto com as propriedades `name: banana` e `quantity: 20`, ao chamar a função passando os seguintes parametros: o array, a string `banana` e number `5` o retorno da função é um objeto com as propriedades `name: banana` e `quantity: 15`. Além disso, teste se o segundo parâmetro está presente no array.

* Se para um array, contendo um objeto com as propriedades `name: banana` e `quantity: 20`, ao chamar a função passando os seguintes parametros: o array, a string `banana` e **não passando** o terceiro argumento o retorno da função é um objeto com as propriedades `name: banana` e `quantity: 19`.

* Se para um array, contendo um objeto com as propriedades `name: banana` e `quantity: 20`, ao chamar a função passando os seguintes parametros: o array, a string `banana` e `30` a função lança um erro `O decremento deve ser menor ou igual a quantidade atual`.

</details>

### 4. Implemente os testes da função `findItem`

<details>
<summary>
  Dicas do que vocês podem testar:
</summary>

* Se ao chamar a função passando um array e uma string = "banana", sendo que o array contem um objeto com a propriedade nome: `banana`, o retorno da função é um objeto, com a propriedade `name` igual à `banana`.

* Se ao chamar a função passando um array e uma string = "maçã", sendo que o array contem um objeto com a propriedade nome: `banana`, é lançado um erro `'O item não foi encontrado'`.

</details>

### 5. Implemente os testes da função `getInventoryValue`

<details>
<summary>
  Dicas do que vocês podem testar:
</summary>

* Se ao chamar a função passando um array vazio o retorno é `0`.
* Se ao chamar a função com um array de itens, retorna o somatório da quantidade dos itens multiplicado pelo preço. Por exemplo, para o array abaixo o retorno deve ser `525.34`. Lembrem de ter cuidado com a [comparação de números com casas decimais](https://jestjs.io/pt-BR/docs/using-matchers#n%C3%BAmeros).

```
[
  { name: 'maça', unit: 'kg', price: 5.69, quantity: 38 },
  { name: 'ovos', unit: 'dúzia', price: 5.07, quantity: 19 },
  { name: 'leite', unit: 'pacote', price: 5.19, quantity: 41 },
  { name: 'banana', unit: 'kg', price: 1.99, quantity: 0 },
]
```

Ou seja, `(38 * 5.69) + (19 * 5.07) + (41 * 5.19) + (0 * 1.99)`.

</details>
