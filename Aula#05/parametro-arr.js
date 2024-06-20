/* 
Podemos passar um objeto ou um array como parametro da nossa função.
 */

var arr = [1, 2, 4];

function myFunction(arg){
    return arg;
}

console.log(myFunction(arr)[0]) // recebeu o array como argumento e pedimos a primeira posição do array retornou o 1. 

// Com objeto agr
function obj(arg){
    return arg 
};

console.log(obj({
    nome: 'Augusto',
    idade: 19
}))
