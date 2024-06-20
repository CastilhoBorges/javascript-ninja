/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(a) {
    return a ? true : false;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log(isTruthy(''));
console.log(isTruthy(""));
console.log(isTruthy(0));
console.log(isTruthy(null));
console.log(isTruthy(undefined))
console.log(isTruthy(NaN))
console.log(isTruthy(false))
console.log(isTruthy(-0))


/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log(isTruthy(1))
console.log(isTruthy(2))
console.log(isTruthy(3))
console.log(isTruthy(4))
console.log(isTruthy(5))
console.log(isTruthy(6))
console.log(isTruthy(7))
console.log(isTruthy(8))
console.log(isTruthy(9))
console.log(isTruthy(10))

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
var carro = {
    marca: 'Porshe',
    modelo: 'GT 911',
    placa: 'BRA2024',
    ano: 2019,
    cor: 'Branco',
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(cor) {
    carro.cor = cor;
    return carro.cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
    return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
    return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
    return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
    return `Esse carro é um ${carro.obterMarca()} ${carro.obterModelo()}`
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.pessoaEntrando = function(pessoas) { 
    carro.quantidadePessoas += pessoas
    
    if (carro.quantidadePessoas > 5) {
        carro.quantidadePessoas = carro.quantidadePessoas - pessoas
        return `O carro já está lotado!`;
    } else if (carro.quantidadePessoas < 5 && pessoas > (5 - carro.quantidadePessoas)) {
        return `Só cabem mais ${5 - carro.quantidadePessoas} pessoas!`;
    } 

    return `Já temos ${carro.quantidadePessoas} pessoas no carro!`;
}
    

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log(carro.cor); // Branco

// Mude a cor do carro para vermelho.
console.log(carro.mudarCor('vermelho'));

// E agora, qual a cor do carro?
// vermelho

// Mude a cor do carro para verde musgo.
console.log(carro.mudarCor('verde musgo'));

// E agora, qual a cor do carro?
// verde musgo

// Qual a marca e modelo do carro?
console.log(carro.obterMarcaModelo()); // Esse carro é um Porshe GT 911

// Adicione 2 pessoas no carro.
console.log(carro.pessoaEntrando(2)); // Já temos 2 pessoas no carro!

// Adicione mais 4 pessoas no carro.
console.log(carro.pessoaEntrando(4)); // O carro já está lotado!

// Faça o carro encher.
console.log(carro.pessoaEntrando(3));

// Tire 4 pessoas do carro.
console.log(carro.quantidadePessoas -= 4);
console.log(carro)

// Adicione 10 pessoas no carro.
console.log(carro.pessoaEntrando(10))

// Quantas pessoas temos no carro?
console.log(carro) // 1 