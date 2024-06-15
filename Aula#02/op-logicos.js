var x = 3; 
var y = 8;

console.log(x === 3); // true pois o x é 3 
console.log(y === 5); // false pois o y é 8 

console.log(x === 3 && y === 8); // true pois as duas expresões são verdadeiras, caso apenas uma fosse false, essa expressão toda seria false

console.log(x === 3 || y === 3); // true pois o operador (||) que tambem é conhecido como ou, ele precisa que apenas 1 das expressões seja true 

console.log(!x === 3); // false pois o ! é o operador de negação, ele sempre inverte o resultado booleano