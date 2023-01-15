// Desafio 11 - Crie a função generatePhoneNumber

function generatePhoneNumber(numbers) {
  let string = `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
  if (numbers.length !== 11) {
    string = 'Array com tamanho incorreto.';
  } else {
    for (let index2 = 0; index2 <= 9; index2 += 1) { //laço para somar numeros repetidos de 0 até 9
      let countRepeatedNumber = 0;
      for (let index = 0; index < numbers.length; index += 1) { //laço para procurar numeros na array
        if (numbers[index] === index2) {
          countRepeatedNumber += 1;
        }
        if (numbers[index] > 9 || numbers[index] < 0 || countRepeatedNumber > 2) {
          string = 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  return string;
}

// Desafio 12 -  Crie a função triangleCheck


function triangleCheck (lineA, lineB, lineC){
let isItTriangle = false;
if ((lineA < ( lineB + lineC )) && (lineC < (lineA + lineB)) && (lineB < (lineA + lineC))){
  isItTriangle = true;
}
return isItTriangle;
}

// Desafio 13 - Crie a função hydrate

function hydrate (string){
  let arrayCupsOfWater = string.match(/[0-9]+/g);
  let cupsOfWater = 0;
  for (let index=0; index<=arrayCupsOfWater[index]+1; index += 1){
    cupsOfWater = cupsOfWater + parseInt(arrayCupsOfWater[index]);
  }
  if (cupsOfWater < 2){
  return `${cupsOfWater} copo de água`; 
  } else {
    return `${cupsOfWater} copos de água`; 
  }
}

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
