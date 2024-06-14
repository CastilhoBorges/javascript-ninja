/* ==========================
        Variaveis
=============================== */

var a;
console.log(a) // undefined ( Como não atribuimos nenhum valor )

var a = 0; 
console.log(a) // 0 ( Atribuição de valor para a variavel )

a = 5; 
console.log(a) // 5 ( Reatribuição de 0 para a 1 )

a = 1.2
console.log(a) // 1.2 ( Reatribuimos de 5 para 1.2, tirando ele de int para float )

/* ==========================
        Tipo de Dados
=============================== */

var str = "Hello Word"  
console.log(typeof str) // Uma string é uma cadeia de caracteres que em Js pode ser representado tanto com '' ou ""

var verdade = true     
console.log(typeof verdade) // Um valor booleano, ou seja ou é true or false

var x = null 
console.log(typeof x) // Null Significa que a variavel não tem valor nenhum definido

var y = undefined
console.log(typeof y) // undefined Ausencia de valor ( Mais para frente veremos melhor a diferença entre null e undefined )

/* Um objeto ele tem propriedades e metodos, as propriedades são coisas que tem o objeto ( Exemplo de uma pessoa ela tem caracteristicas como no exemplo a seguir ) */                              
var pessoa = {
    altura: 1.80,
    peso: 80,
    cor: 'branca'
};
pessoa.altura = 1.82; // Podemos mudar a propriedade dela dessa forma 
pessoa.peso = 77;
console.log(pessoa);

/* Um array é uma lista de valores */
var numeros = [1, 2, 3, 4, 5]
console.log(numeros)
console.log(numeros[0]) // Para acessar a posição da array usamos o indice que queremos

