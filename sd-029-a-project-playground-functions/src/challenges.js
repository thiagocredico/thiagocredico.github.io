// Desafio 1 - Crie a função compareTrue

const compareTrue = (param1, param2) => param1 === true && param2 === true;

// Desafio 2 - Crie a função splitSentence

function splitSentence(sentence) {
  let splitArray = sentence.split(" ");
  return splitArray;
}

// Desafio 3 - Crie a função concatName

function concatName(array) {
  return `${array[array.length-1]}, ${array[0]}`;
}

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins,ties){
  return (wins * 3) + (ties);
}

// Desafio 5 - Crie a função highestCount

function highestCount(array){
  let highNumber = Math.max.apply(null, array);
  let count = 0;
  for (index=0;index<=array.length;index++){
    if (array[index] === highNumber){
      count++;
    }
  }
  return count;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height){
  return (base * height) / 2
}

function calcRectangleArea(base, height){
  return (base * height) 
}

function calcAllAreas(base, height, form){
  let string = ''
  if (form === 'triângulo'){
    string = `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  }
  else if(form === 'retângulo'){
    string = `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  }
  else{
    string = `Não foi possível fazer o cálculo, insira uma forma geométrica válida`;
  }
  return string
}
// Desafio 7 - Crie a função catAndMouse

function catAndMouse (mouse, cat1, cat2){
  let string = '';
  if ((cat1-mouse) === (mouse-cat2)){
    string = `os gatos trombam e o rato foge`;
    } else if ((mouse-cat1) > (mouse-cat2)) {
      string = `cat1`;
    }
    else{
      string = `cat2`;
    }
  return string
}

// Desafio 8 - Crie a função fizzBuzz

function fizzBuzz (arrayNumeros){
  let arrayString = [];
  for (index=0;index<arrayNumeros.length;index++){
    if(arrayNumeros[index]%3 === 0){
      if(arrayNumeros[index]%5 === 0){
        arrayString.push('fizzBuzz');
      }
      else{
        arrayString.push('fizz');
      }
    } else if(arrayNumeros[index]%5 === 0){
        arrayString.push('buzz');
      }
    else if (arrayNumeros[index]%3 !== 0 && arrayNumeros[index]%5 !== 0){
      arrayString.push('bug!');
    }  
  }
  return (arrayString)
}

// Desafio 9 - Crie a função encode e a função decode

function encode (decodedPhrase){
  let encodedPhrase = '';
  for (index=0;index<decodedPhrase.length;index++){
    if(decodedPhrase[index] === 'a'){
      encodedPhrase=encodedPhrase+'1';
    } else if (decodedPhrase[index] === 'e'){
      encodedPhrase=encodedPhrase+'2';
    } else if (decodedPhrase[index] === 'i'){
      encodedPhrase=encodedPhrase+'3';
    } else if (decodedPhrase[index] === 'o'){
      encodedPhrase=encodedPhrase+'4';
    } else if (decodedPhrase[index] === 'u'){
      encodedPhrase=encodedPhrase+'5';
    } else {
      encodedPhrase=encodedPhrase+decodedPhrase[index];
    }
  }
  return (encodedPhrase)
}          

function decode (encodedPhrase){
  let decodedPhrase = '';
  for (index=0;index<encodedPhrase.length;index++){
    if(encodedPhrase[index] === '1'){
      decodedPhrase=decodedPhrase+'a';
    } else if (encodedPhrase[index] === '2'){
      decodedPhrase=decodedPhrase+'e';
    } else if (encodedPhrase[index] === '3'){
      decodedPhrase=decodedPhrase+'i';
    } else if (encodedPhrase[index] === '4'){
      decodedPhrase=decodedPhrase+'o';
    } else if (encodedPhrase[index] === '5'){
      decodedPhrase=decodedPhrase+'u';
    } else {
      decodedPhrase=decodedPhrase+encodedPhrase[index];
    }
  }
  return (decodedPhrase)
}          

// Desafio 10 - Crie a função techList

function techList (array, string){
  // ordenar a array
   array.sort();
   let newArray = [];
    for (index=0;index<array.length;index++){
      let object = {
      tech: array[index],
      name: string,
    }
     newArray.push(object);
    }
  return newArray
}

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
