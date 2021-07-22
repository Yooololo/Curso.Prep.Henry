// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let arraynuevo = Object.entries(objeto);
console.log(arraynuevo);
return arraynuevo;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let objletra = {};
  let abecedario = 'abcdefghijklmnopqrstuvwxyz';
  for (let l = 0; l < abecedario.length; l++) {
  var letrita = abecedario[l];
  var sumaletra = 0;
   for (var i = 0; i < string.length; i++) {
      if (string.charAt(i) == letrita) {
        sumaletra++;
      }
      if (sumaletra === 0) {
      }
      else {objletra[letrita] = sumaletra;
      }
   }
  }
  console.log(objletra);
  return objletra;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let largos = s.length;
  let posmayus = 0;
  let contamayus = 0;
  let palabraarray = [];
  for (let i = 0; i < s.length; i++) {
    if ((s[i]) == (s[i].toUpperCase())) {
       contamayus += 1;
     }
  }
  let posminus = contamayus;

  for (let i = 0; i < s.length; i++) {
    if ((s[i]) == (s[i].toUpperCase())) {
      palabraarray[posmayus] = s[i];
      posmayus ++;
      }
    else {
      palabraarray[posminus] = s[i];
      posminus ++;
    }
      }
      let palabra = palabraarray.join('');
      console.log(palabra);
      return palabra;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let frasearray = str.split(/[ ]/);
  let frasenueva = [];
  let frasefinal = '';
  console.log(frasearray);
for (let k = 0; k < (frasearray.length); k++) {
 frasenueva[k] = '';
}
  for (let i = 0; i < (frasearray.length) ; i++) {
    for (let j = frasearray[i].length; j >= 0; j--) {
      let contador = 0;
      let largo = (frasearray[i].length);
      if (typeof(frasearray[i][j]) != 'undefined') {
      frasefinal += (frasearray[i][j]);
      contador ++;
      }
      else if (typeof(frasearray[i][j]) != undefined) {
      frasefinal += " ";
      }
      }
    }
frasefinal = frasefinal.substring(1);
      console.log(frasefinal);
      return frasefinal;
}


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let orishinal = numero;
  let alreves = 0;
  let largo = 1;
  for (let i = 1; (Math.round(numero / (10 ** i))) > 0; i++) {
    largo++;
  }
  for (let k = 1; k <= largo; k++) {
    alreves = Math.round(alreves * 10 + (numero % 10));
    numero = (Math.round(numero - (numero % 10)) / 10);
  }
  // console.log("Ingresado: " + orishinal + " <-> " + "Invertido: " + alreves);
  if (alreves === orishinal) {
    console.log('Es capicua');
    return('Es capicua');
  }
  else {
    console.log('No es capicua');
    return('No es capicua');
  }
  }


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let str = cadena;
  str = str.replace('a','');
  str = str.replace('b','');
  str = str.replace('c','');
  console.log(str);
  return str;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  return arr.sort(function(a, b) {
    return a.length - b.length;
  });
}
  

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let a1l = arreglo1.length;
  let a2l = arreglo2.length;
  let interarray = [];
  let nint = 0;
  
  for (let i = 0; i < a1l; i++) {
     let valorcopiara1 = arreglo1[i];
     for (let j = 0; j < a2l; j++) {
       let valorcopiara2 = arreglo2[j];
       if (valorcopiara1 === valorcopiara2) {
         interarray[nint] = valorcopiara1;
         nint++;
       }
     }
  }
  
  console.log(interarray);
  return interarray;
  }



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

