/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let arr = ['Js', 4, 5, undefined, 10]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myArr(arr) {
    return arr 
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myArr(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function newFunc(arr, numero) {
    numero = arr[2];
    return numero;
} 

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let newVar = ['lolo', 6, 9, 7, undefined];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(newFunc(newVar));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nameBook){    
    let allBooks = {
        'book 1': {
            pagesNumbers: 159,
            author: 'João',
            companyPublisher: 'NBA'
        },
        'book 2': {
            pagesNumbers: 309,
            author: 'Carlos',
            companyPublisher: 'Betano'
        },
        'book 3': {
            pagesNumbers: 239,
            author: 'Robert',
            companyPublisher: 'Fé'
        }
    };

    return !nameBook ? allBooks : allBooks[nameBook]

}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
console.log(`O livro book 2 tem ${book('book 2').pagesNumbers} páginas!`)

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
let bookName3 = 'book 3'
console.log(`O autor do livro ${bookName3} é ${book(bookName3).author}.`)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
let bookName1 = 'book 1'
console.log(`O livro ${bookName1} foi publicado pela editora ${book(bookName1).companyPublisher}.`)