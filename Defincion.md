1. En un archivo de texto separado que debes crear, escribe explicaciones de los siguientes conceptos como si se lo estuvieras explicando a un niño de 12 años. Hacer esto te ayudará a descubrir rápidamente cualquier agujero en tu comprensión.

* Funciones Callback:
    Las funciones callback son funciones que se utilizan como argumento de otra funcion. Se utilizan para ahorrar codigo y programar de forma declarativa (invocando funciones para que hagan lo que queremos en vez de escribir cada vez lo que queremos) que seria imperativo). Es decir, 
    para ejemplificar saludaralumno('lolo',saludar) es una funcion que recibe 2 argumentos, primero una string y despues una funcion segun:

function saludaralumno(pers,cb) {
  return cb(pers);
}

function saludar(str) {
    console.log('Hola ' + str);
}

var lolo = saludaralumno('lolo', saludar);

    del resultado de esto sale : Hola lolo.

donde cb(pers) "===" saludar(str);*