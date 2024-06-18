/* 

Tipos Primitivos:
- number 
- string
- boolean
- null e undefined 

Tipo de objeto 

Todos os dados que não é primitivo é objeto
E um objeto é um conjunto de propriedades que podem receber qualquer valor tanto um primitivo quanto outro tipo de objeto. Vamos utilizar ele para organizar nossos dados. 

Um tipo de objeto que podemos usar é a function, que é um objeto de primeira classe, pois ela pode ser atribuida á uma variavel. Quando fazemos isso chamamos essa propriedade de metodo. Toda vez que tenho uma propriedade com valor de uma function ele é um metodo. 

*/

var object = { 
    propriedade: 'valor', 
    propriedade2: 10, 
    propriedade3: true
};

console.log(object.propriedade) // para acessar o objeto 

var pessoa = {
    nome: 'Augusto',
    idade: 19,
    peso: 77,
    altura: 1.77
};

console.log(pessoa.idade);
console.log(pessoa.nome);
console.log(pessoa.peso);
console.log(pessoa.altura);

var myVar = function() {
    return 'variavel'
}

console.log(myVar())



