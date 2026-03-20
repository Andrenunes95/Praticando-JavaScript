 
 // IF             -> SE (se chover....)
 // ELSE           -> SENÃO (senão....)
 // ELSE IF        -> SENÃO SE
 // SWITCH         -> SWITCH ( como se fosse um menu de opções)

// let nome = prompt("Digite seu nome: ");
//console.log(nome);

 // Exemplos:
 // 1. Sistemas de verificação de temperatura
//  let temperatura = Number(prompt("Digite a temperatura atual: "));

//  if (temperatura < 20) {
    // console.log("Está frio!");
//  } else {
    // console.log("Está calor!");
//  }

 // 2. Verificar o nível da bateria

// let bateria = Number(prompt("Digite o nível da bateria (%): "));

// if(bateria <= 30) {
    // alert ("Bateria fraca!!");
// } else {
    // alert ("Bateria carregada!");
// }

// 3. Sistema de acesso.

// let tipoUsuario = prompt("Digite o tipo do usuário (Admin, cliente): ");
// if (tipoUsuario == "admin") {
    // console.log("Acesso total ao sistema.");
// } else if(tipoUsuario == "cliente") {
    // console.log("Acesso limitado.");
// } else {
    // console.log("Tipo inválido");
// }

// 4. Classificar a qualidade de conexão de internet
// let velocidade = Number(prompt("Digite a velocidade da internet: "));

// if(velocidade >= 100) {
    // console.log("Internet rápida");
// } else if(velocidade >= 50) {
    // console.log("Internet média");
// } else {
    // console.log("Internet lenta");
// }

// OPERADORES LÓGICOS

/*
  AND -> &&  -> OPERADOR E 
  OR  -> ||  -> OPERADOR OU
  NOT -> !   -> NÃO (NEGAÇÃO)
*/ 

// AND - E -> retorna verdadeiro se todas as condições forem verdadeiras.

// let operadorAnd = (5 > 3) && (2 < 4)
// console.log(operadorAnd);

// OR - OU -> retorna verdadeiro se pelo menos uma das opções forem verdadeiras.

/*let OperadorOu = (5 < 3) || (2 < 4)
console.log(OperadorOu);
*/

// NOT - NÃO

/*let OperadorNao = !(5 > 3)
console.log(OperadorNao);
*/

// Usando o sinal de exclamação para negar e validar diferença
/*let diferente = !(5 != 3)
console.log(diferente);
*/

/* 5. Analisar volume de itens
let quantidade = 9;

if (quantidade === 0) {
    console.log("Nenhum item selecionado");
} 
else if(quantidade < 5) {
    console.log("Poucos itens");
}
else if(quantidade >= 5 && quantidade < 10) {
    console.log("Quantidade média de itens");
}
else {
    console.log("Muitos itens");
}
*/

/* 6. CONDICIONAL ANINHADA
// uma condicional dentro de outra

const nota = 8;

if(nota >= 7) {
    if(nota === 10) {
        console.log("Aprovado com premiação.");
    }
    else {
        console.log("aprovado!");
    }
}
else {
    console.log("Reprovado!");
}
*/

/* 7. Adapitação de tela e dispositivo
let dispositivo = prompt("Você está usando: celular, tablet ou computador?: ")

if(dispositivo == "celular" || dispositivo == "tablet" ) {
    console.log("Modo mobile ativado.");
}
else if (dispositivo == "computador") {
    console.log("Modo desktop ativado.");
}
else {
    console.log("Dispositivo desconhecido.");
}
*/

// 8. SWITCH / CASE
// Mudar tema do sistema

/*let tema = prompt("Digite um tema: claro, escuro, azul");

switch(tema) {
    case "claro":
        console.log("Tema claro ativado.");
        break
    case "escuro":
        console.log("Tema escuro ativado.");
        break
    case "azul":
        console.log("Tema azul ativado.");
        break
    default:
        console.log("Tema inválido.");
}
*/


/* EXERCÍCIOS NÍVEL BÁSICO:

// 1. Verificar maioridade:

let idade = prompt("Digite sua idade: ");
if (idade < 18) {
    console.log("Menor de idade");
}
else {
    console.log("Maior de idade");
}


// 2. Verificar se um número é positivo ou negativo:

let numero = prompt("Insira um número: ");
if (numero <= 0) {
    console.log("Número Negativo");
}
else{
    console.log("Número posivito")
}

// CONSIDEREI ESSA RESPOSTA COLOCANDO O SINAL DE SUBTRAÇÃO NA FRENTE DO NÚMERO. EX.: -12

/*
// 3. Aprovação em uma prova:

let nota = prompt("Insira a nota do aluno: ");
if (nota >= 60) {
    console.log("Aprovado.");
}
else {
    console.log("Reprovado");
}


// 4. Verificar se um número é positivo, negativo ou  zero:

let Número = prompt("Insira um número: ");
if (Número > 0) {
    alert("Número Positivo");
}
else if (Número < 0) {
    alert ("Número Negativo");
}
else {
    alert("Valor neutro")
}

// CONSIDEREI ESSA RESPOSTA COLOCANDO O SINAL DE SUBTRAÇÃO NA FRENTE DO NÚMERO. EX.: -12


// 5. Classificação de idade:

let Idade = prompt("Insira a sua idade: ");

if (Idade <= 12) {
    alert ("Criança");
}
else if (Idade <= 17) {
    alert ("Adolescente");
}
else if (Idade <=100) {
    alert ("Adulto");
}
else {
    alert ("Idade invalida. Insira um número positivo.")
}


// 6. Verificar se um número é par ou impar:

let NumeroDividido = prompt("Insira um número: ")
if (NumeroDividido % 2 == 0) {
    alert ("PAR")
}
else {
    alert ("IMPAR")
}
*/ 