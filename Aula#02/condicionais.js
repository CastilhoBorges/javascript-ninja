var x = 3 
var y = 7 

if (x === 3) { // Se esse valor retornar true ele entra no bloco do if.
    y = 3 // Nesse caso vai mudar o valor de y de 7 para 3. 
}

console.log(x, y)

if (x === y && x === 3) { // Como a expressão é true ele entrou no if
    x = 5
    y = 2
}

console.log(x, y)

if (x === 5 || y === 1) {
    x = 1 
    y = 1
}

console.log(x, y)
 
if ( x === 2) { // Nesse caso ele não entrou no bloco pois deu false
    x = 55
    y = 2
}

console.log(x, y)

if (x === 2){ // Nesse caso como deu false e não entrou no bloco do if  ele vai entrar no bloco else      
    y = 3                                                               
} else {
    x = 8
    y = 1
}

console.log(x, y)

// Abaixo veremos o else if, que ele protesta mais de 1 condições 

if (x === 2) { // Ele vai cair no bloco que for true 
    y = 2
} else if (y === 3) {
    x = 3
} else if (x === 1) {
    y = 9
} else {
    x = 0
    y = 0
}

console.log(x, y)