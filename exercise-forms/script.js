const validation = new JustValidate('#form');

  validation
    .addField('#name', [
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Nome precisa ser maior do que 3',
      },
      {
        rule: 'required',
        errorMessage: 'Campo obrigatorio',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Nome precisa ser menor do que 30',
      },
    ])
    .addField('#cpf', [
      {
        rule: 'required',
        errorMessage: 'Campo obrigatorio',
      },
      {
        rule: 'minLength',
        value: 11,
        errorMessage: 'Seu cpf está faltando digitos',
      },
      {
        rule: 'maxLength',
        value: 11,
        errorMessage: 'Seu cpf está com muitos digitos',
      },
    ])
    .addField('#birthDate', [
      {
        rule: 'required',
        errorMessage: 'Campo obrigatorio',
      },
    ])
    .addField('.radio', [
      {
        validator: () => {
          const radio = document.querySelectorAll('.radio');
          let checked = false;
          for(let index = 0; index < radio.length; index+= 1){
            if (radio[index].checked === true) {
              checked = true;
            }
          }
          return checked;
        },
        errorMessage: 'Campo obrigatorio',
      },
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Campo obrigatorio',
      },
      {
        rule: 'email',
        errorMessage: 'Email não é valido',
      },
    ])
    .addField('#password', [
      {
        rule: 'strongPassword',
        errorMessage: 'Ei, vê só: tua senha tá fraca',
      }
    ]);