// FUNÇOES NATIVAS DO JS
// ajudam a manter um codigo limpo e organizado
// evita muita repetição de codigo
// usamos principalmente quando trabalhamos com lista (arrays)


// // MAP-> Percorre uma lista e cria uma nova lista com base na condição
// let numeros = [1,,2,3,4];


// // num é uma variavel auxiliar para pegar cada um desses numeros da lista
// let numeros_dobrados = numeros.map(function(num) {
//     return num * 2
// })
// console.log(numeros_dobrados); 


// // mesma função, mas agora com arrom function
// let numeros_dobradosArrow = numeros.map(num => num * 2);
// console.log(numeros_dobradosArrow);

// /*
// Quando precisamos usar return? quando a função
// precisa ter mais de uma linha
// numeros.map(num => {
//     let Resultado = num * 2;
//     return Resultado;
// })
// */


/*
// filter -> Filtra os elementos de uma lista com base em uma condição
let numeros = [5,10,15,20]
let mmaioresQueDez = numeros.filter(num => num > 10);
console.log(mmaioresQueDez) */

/*
// REDUCE -> Reduz os valores de um array para unico valor
let numeros = [1,2,3,4];


// acumulador se chama total
// variavel auxiliar se chama num
let soma = numeros.reduce((total,num)=> total + num, 0) // esse 0 é o valor inicial do acumulador (total)
console.log(soma);
*/

/*
// FIND -> Retorna o primeiro elemento que atenda a condição.
let produtos = [
    { id: 1, nome: "Teclado", preco: 50},
    { id: 2, nome: "Mouse", preco: 30},
]
let item = produtos.find( produtos => produtos.id ===2 )
console.log(item)
*/

//split
/*
let frase = "JS É MUITO BOM!!!!"

let palavras = frase.split(" ")
console.log(palavras)
*/

// trim remove espaços no inicio e final de uma string
/*let nome = "  Neves  ";
let nomeLimpo = nome.trim();

console.log(nome);
console.log(nomeLimpo);*/


// INCLUDES ->   verifica se existe um valor dento de uma lista ou string
/* 
let frutas = ["maça", "banana"];

let frutasIncludes = frutas.includes("banana")
console.log(frutasIncludes)*/
/*
let nome = "neves"
let cargo = "Dev"

console.log(nome.toLocaleLowerCase());
console.log(cargo.toLocaleLowerCase());*/

//FORACH - percorre todos os elemntos do array
/*
let nome = ["Pedro", "Guilherme", "João"];

nome.forEach(nome=>console.log("seu nome é: ", nome))*/


//some verifica se pelo menos um item atende a condição
/*
let numeros = [1,3,5,8];
//se eu dividir um numero por 2 eo resto for 0, então é par
let temPar = numeros.some(num => num % 2 === 0);
console.log(temPar)*/
/*
every verifica se todos os elementos atendem a uma condição
let numeros = [1,3,5,8]
let todosPares = numeros.every(num => num % 2 === 0)
console.log(todosPares
)*/


/*/sport ordena os elementos de uma array
let numeros = [3,5,2,4]
numeros.sort((a,b) => a-b);
console.log (numeros);*/


/*/Reverse -> inverte a ordem de um array
let numeros = [1,2,3]
numeros.reverse()
console.log(numeros);*/


//JOIN -> junta os elementos de um array em uma string
/*
let palavras = ["JS", "é", "muito", "bom"]

let frase = palavras.join(" ");
console.log(frase);*/

//PUSH -> Adiciona elementos no final do array
// POP -> Remove elementos no final do array
/*
let lista =["A", "B"]
lista.push("C");
lista.pop()
console.log(lista)*/

//SHIFT remove do inicio do array
//unshift -> adiciona no inicio do array
/*
let lista = ["B", "C"]

lista.unshift("A");
console.log(lista)*/

//Slice cria um copia de uma parte da lista
/*
array.slice (inicial,final)
inicial onde começa
final onde termina
*/
/*
let numeros = [1,2,3,4]
let parte = numeros.slice(1,3);

console.log(parte);*/

// removendo elementos sem add
/*
let numeros = [1, 2, 3, 4]

numeros.splice(1, 1)
console.log(numeros)

//removenddo e add mais elementos

let frutas = ["banana", "laranja", "Maça", "manga"]
frutas.splice(0, 1, "kiwi", "Limão")
console.log(frutas)

// adiciona dois elementos sem remover nenhum 
let frutasNovas = ["banana", "laranja", "Maça", "manga"]

frutasNovas.splice(2, 0, "kiwi", "Limão")
console.log(frutasNovas) */

//REPLACE -> Substitui uma parte da string
/*
let texto = "Ola mundo!"
console.log(texto)
let novoTexto = texto.replace("mundo", "cliente");
console.log(novoTexto);*/


//SPOILER....
/*
let textoP = document.getElementById('texto');

let saudacao = prompt("Digite a saudação: ")

if(saudacao == "Bom dia") {
    textoP.textContent = saudacao
}
else{
    textoP.textContent = "SEXTOUUUU"
} */


    //EXERCICIOS

let nomes = ["Beatriz", "Carlos", "Douglas", "Eduarda", "Fagner"]

nomes.forEach((nome, index) => {
    console.log(`${index} - ${nome}`);
});


// exercicio 2
let cores = ["Azul", "Vermelho", "Verde", "Amarelo"];

for (let i = 0; i < cores.length; i++) {
    console.log(`A cor ${cores[i]} está na posição ${i}`);
}


// exercicio 3
 let valores = [1, 2, 3, 4, 5]

console.log("Primeiro:", valores[0]);
console.log("Último:", valores[valores.length - 1]);

// exercicio 4
let frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];

console.log("Quantidade de frutas:", frutas.length);




// exercicio 2 do intermediario
let valoresPar = [1, 2, 3, 4, 5]

console.log("Segundo:", valoresPar[1]);
console.log("Quarto:", valores[valoresPar.length - 2]);



// outros exercicios
const produtos = [
    { id: 1, nome: "Notebook", preco: 3500 },
    { id: 2, nome: "Mouse", preco: 150 },
    { id: 3, nome: "Teclado", preco: 200 },
    { id: 4, nome: "Monitor", preco: 1200 }
];
const produtosCaros = produtos.filter(produto => produto.preco > 500);

const mouse = produtos.find(produto => produto.nome === "Mouse");

const nomesProdutos = produtos.map(produto => produto.nome);


const totalPreco = produtos.reduce((total, produto) => total + produto.preco, 0);

console.log(produtosCaros);
console.log(mouse);
console.log(nomesProdutos);
console.log(totalPreco);