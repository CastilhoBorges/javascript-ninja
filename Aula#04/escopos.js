/*
Sempre que criamos uma variavel dentro de uma function ela so pode ser usada localmente.
Ja fora estara no escopo global.
*/

var myVar = 2 
function myFunction() {
    return myVar; // Vai retornar o valor pois a myVar foi declarada do escopo global
};

function otherFunction() {
    var otherVar = true;
    return otherVar;
};

console.log(otherVar) // Vai falar que não esta definida pois so definimos ela dentro da function

/* Argumentos de funções tambem ficam no escopo local */