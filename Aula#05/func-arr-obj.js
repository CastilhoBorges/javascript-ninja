/*
O retorno de funções podem ser tambem arrays e objetos
*/

function arr() {
    return [1, 2, 3]
}

console.log(arr()[0])
console.log(arr()[1])
console.log(arr()[2])

function obj() {
    return {
        nome: 'Augusto',
        idade: 19,            
    }
}

console.log(obj().nome)