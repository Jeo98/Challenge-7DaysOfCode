let numeroUn = 1

let stringUn = '1'

let numeroTreinta = 30

let stringTreinta = '30'

let numeroDiez = 10

let stringDiez = '10'

/*
if ( numeroUn == stringUn) {

    console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
  
  } else {
  
    console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
  
  }


if (numeroTreinta === stringTreinta) {

    
    console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
  
  } else {
  
    console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
  
  }
  
   
  
  if (numeroDiez ==  stringDiez) {
  
    console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
  
  } else {
  
    console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
  
  }*/


//segundo dia, segundo desafio


const nombre=prompt("¿Cuál es tu nombre?");
const edad=prompt("¿Cuántos años tienes?");
const lenguaje=prompt("¿Qué lenguaje de programación estás estudiando?");

alert(`Hola ${nombre}!, tienes ${edad} y estas estudiando el lenguaje - ${lenguaje}`);

const opcional=prompt("¿Te gusta estudiar [lenguaje]? Responde con el número 1 para SÍ o 2 para NO");
if(opcional==1)
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
else
    alert(prompt("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?"))