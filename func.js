
function soma() {
    var x = 2; // Aqui nosso x vale 2
    x = x + 1;
    console.log(x); // Aqui o x vai valer 3 porque na linha acima adicionamos 1 a ele
}

soma()

function scp(){
    var x; 
    console.log(x); // O x aqui é indefinido pois criamos no escopo diferente
}

scp()

function somar(a, b) {
    return a + b
} 

console.log(somar(10, 20)) // 30, pois na função definimos que os parametros vão se somar 

