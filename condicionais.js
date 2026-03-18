// IF -> SE ( Se chover....)
// ELSE -> SENÃO ( Se não chover....)
// ELSE IF -> SENÃO SE ( Se não chover, mas fizer frio....)
// SWITCH -> (como se fosse um menu de opções)

/*let nome = prompt("Digite seu nome:");
console.log("Olá, " + nome + "!");*/


/**
 if (temperatua > 30) {
    console.log("Está calor");}
    else if (temperatua >= 15 && temperatua <= 30) {
        console.log("Está agradável");
    }
    else{
        console.log("Está frio")
    }






 */






//Exemplos
// 1. Sistema de verificação de temperatua
/*let temperatua = Number(prompt("Digite a temperatura atual:"));
if (temperatua < 20) {
    console.log("Está frio");}
    else{
        console.log("Está calor")
    }

2. verificar o nivel da bateria

let bateria = Number(prompt("Digite o nível da bateria (%):"));

if (bateria <=30) {
    alert("Bateria fraca");
} else {
    alert("Bateria carregada");
} 

// 3. Sistema de acesso
let tipoUsuario = prompt("Digite o tipo de usuário (admin, cliente):");
if (tipoUsuario === "admin") {
    console.log("Acesso total, Bem vindo!");
} 
else if (tipoUsuario === "cliente") {
    console.log("Acesso limitado, Bem vindo!");
}
else {
    console.log(" tipo de usurario invalido verifique e tente novamente")
} 

// 4. Classificar qualidade de rede 
let velocidade = Number(prompt("Digite a velocidade da sua conexão de internet"));
if (velocidade >= 100) {
    console.log("Conexão rápida");
}   
else if (velocidade >= 50) {
    console.log("interner media");
}   
else {
    console.log("internet lenta");
}*/

/* operadores lógicos
 && -> E (AND)
 || -> OU (OR)
 ! -> NÃO (NOT)
 */
/*
// AnD - E -> retorna verdadeiro se todas as condiçoes forem verdadeiras
let opeadorAnd = (5 > 3) && (2 < 4);
console.log(opeadorAnd);

// OR - OU -> retorna verdadeiro se pelo menos uma das condições for verdadeira
let operadorOu = (5 > 3) || (2 < 4);
console.log(operadorOu);

// NOT - NÃO -> inverte o valor lógico de uma expressão
let operadorNao = !(5 > 3);
console.log(operadorNao);

// 5
let qualidade = Number(prompt("Digite a qualidade (0-100):"));
if (qualidade === 0 ) {
    console.log("Nenhum item selecionado");
}
else if (qualidade < 5) {
    console.log("quantidade baixa de itens");
}
else if (qualidade > 5 && qualidade < 10) {
    console.log("quantidade media de itens");
}
else {
    console.log("quantidade alta de itens");
}
    

const nota = Number(prompt("Digite a sua nota de aluno:"));
if (nota >= 7) {
    if (nota === 10) {
    console.log("Aprovado com premiação");  
    } else {
        console.log("Aprovado");
    }
}

 else {
    console.log("Reprovado");
}


// adaptação de tela de dispositivo
let dispositivo = prompt("Voce esta usando: celular, tablet ou computador?");
if (dispositivo === "celular" || dispositivo === "tablet") {
    console.log("Tela adaptada para dispositivos móveis");
} 
else if (dispositivo === "computador") {
    console.log("Tela adaptada para computador");
}
else {
    console.log("Dispositivo desconhecido, tela padrão aplicada");
}


// 8 switch case
// mudar tema do sistema

let tema = prompt("Escolha um tema: claro, escuro ou azul");
switch (tema) {
    case "claro":
        console.log("Tema claro selecionado");
        break
    case "escuro":
        console.log("Tema escuro selecionado");
        break
    case "azul":
        console.log("Tema azul selecionado");
        break
    default:
        console.log("Tema desconhecido, tema padrão aplicado");
        
}
        */