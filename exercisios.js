// 1 do basico
/*let idade = Number(prompt("Digite a sua idade:"));
if (idade >= 18) {
    console.log("Você é maior de idade");
}      
else {
    console.log("Você é menor de idade");
} 

//2 do basico
/*let numero = Number(prompt("Digite um número:"));
if (numero >0){
    console.log("O número é positivo");
}
else 
{
    console.log("O número é negativo");
}
    */
   /*
// 3 do basico
let nota = Number(prompt("Digite a nota do aluno (0 a 100):"));
if (nota >=60)
{
    console.log("O aluno foi aprovado");
}
else
{
    console.log("O aluno foi reprovado");
} */

/* 4 do basico 

let numero = Number(prompt("Digite um número:"));
if (numero >0) {
    console.log("O número é positivo");
}
else if (numero < 0) {
    console.log("O número é negativo");
}
else {
    console.log("O número é zero");
} 

/* 5 do basico 
let idade = Number(prompt("Digite a sua idade:"));
if (idade >= 0 && idade <= 12) {
    console.log("Você é criança");
}      
else if (idade >= 13 && idade <= 17) {
    console.log("Você é adolescente");
}
else {
    console.log("Você é +18");
} */

/* 6 do basico 
let parOuImpar = Number(prompt("Digite um número:"));
if (parOuImpar % 2 === 0) {
    console.log("O número é par");
}
else {
    console.log("O número é ímpar");
} */

// 1 do intermediário
/*
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let soma = numero1 + numero2;
let subtracao = numero1 - numero2;
let multiplicacao = numero1 * numero2;
let divisao = numero1 / numero2;
let operação = prompt("Digite a operação desejada:  +, -, * ou /");
if (operação === "+") {
    console.log("A soma é: " + soma);
}
if (operação === "-") {
    console.log("A subtração é: " + subtracao);
}
if (operação === "*") {
    console.log("A multiplicação é: " + multiplicacao);
}
if (operação === "/") {
    console.log("A divisão é: " + divisao);
}
*/

// 2 do intermediário
/*
let numero1 = Number(prompt("Digite o primeiro número:"));
let numero2 = Number(prompt("Digite o segundo número:"));
let numero3 = Number(prompt("Digite o terceiro número:"));
if (numero1 > numero2 && numero1 > numero3) {
    console.log("O maior número é: " + numero1);
}
else if (numero2 > numero1 && numero2 > numero3) {
    console.log("O maior número é: " + numero2);
}
else {
    console.log("O maior número é: " + numero3);
}
*/

// 3 do intermediário
/*
let valoDacompras = Number(prompt("Digite o valor total das compras:"));
if (valoDacompras > 100) {
    console.log("Desconto de 10% aplicado. Valor final: " + (valoDacompras - (valoDacompras * 0.10)) + "R$");
} 
else {
    console.log("Sem desconto. Valor final: " + valoDacompras + "R$")
}
*/
// 4 do intermediário
/*
let Usuario = prompt("Digite o seu usuario:");
let senha = prompt("Digite a sua senha:");
if (Usuario === "admin" && senha === "1234") {
    console.log("Acesso concedido");
}
else if (Usuario === "admin" || senha === "1234") {
    console.log("Acesso negado, (usuário ou senha incorretos)");
}
else {
    console.log("Acesso negado");
}
    */

// 1 do avançado
/*
let valorCompra = Number(prompt("Digite o valor total da compra:"));
if (valorCompra >= 100){
    console.log("Valor de acordo com o frete gratis!")
}
else if (valorCompra >= 50 && valorCompra < 100) {
    console.log("Esse valor possui um frete de 10 reais!")
}
else {
    console.log("Esse valor possui um frete de 20 reais!")
}
    */

// 2 do avançado
/*
let idade = Number(prompt("Digite a sua idade:"));
let possuiConvite = prompt("Você possui convite? (sim ou não)");
if (idade >= 18 && possuiConvite === "sim") {
    console.log("Pode entrar!");
}

else if (idade >= 18 && possuiConvite === "não") {
    console.log("Mesmo não tendo convite, você pode entrar!");

}
else {
    console.log("BARRADO VOCÊ NÃO PODE ENTRAR POIS NÃO TEM IDADE E MUITO MENOS CONVITE!");
}
*/

// 3 do avançado
/*
let nota = Number(prompt("Digite a sua nota:"));
if (nota >= 90 && nota <= 100) {
    console.log("Nota A");
}
else if (nota >= 80 && nota < 90) {
    console.log("Nota B");
}
else if (nota >= 70 && nota < 80) {
    console.log("Nota C");
}

else if (nota >= 60 && nota < 70) {
    console.log("Nota D");
}
    else {
    console.log("Nota F");
}
*/
let estoque = Number(prompt("Digite a quantidade em estoque:"));
if (estoque > 10) {
    console.log("Estoque disponivel");
}
else if (estoque > 1 && estoque <= 10) {
    console.log("Estoque baixo");
}
else {
    console.log("Estoque esgotado");
}