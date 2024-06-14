var x = 0; // o = aqui é no sentido de atribuição 

console.log(x == 0) // Vai ser true, pois x é igual a 0 ( == igual em JS )
console.log(x != 0) // Aqui vai ser false pq != fala que é diferente

/* Mesmo que um seja String e o outro seja Num, o js ele converte, vamos aprender o por que mais para frente */
var um = '1'
var numUm = 1
console.log(um == numUm)

/* Neste caso vai ser false pois o === confere se é identico, melhor jeito de testar pois vai ser melhor para ver oque vc realmente quer */ 
console.log(um === numUm)  

/* > (maior que), < (menor que), <= (menor ou igual), >= (maior ou igual) */
var a = 5
var b = 10
var c = 10
var d = 5
console.log(a > b) // false
console.log(a < b) // true
console.log(a >= d) // true
console.log(b <= c) // true 