/* 

Valores Falsy:
-undefined
-null
-NaN
-0 e -0 porem se o 0 estiver na string ele retorna true, ou seja uma string com valor é true 
- '' ou "" (string vazia) 

Valores Truthy
-Todos que não são falsy 

Para saber se é falsy ou truthy podemos usar o !! pois so um ele inverte o valor e com dois ele inverte denovo 

*/

var teste; 

if ('') {
    teste = true 
} else {
    teste = false
}

console.log(teste) // false 

if (0) {
    teste = true
} else {
    teste = false 
}

console.log(teste) // false 

if ('0') {
    teste = true
} else {
    teste = false 
}

console.log(teste) // true 

console.log(!!0) // false 
console.log(!!"") // false 
console.log(!!3) // true 

