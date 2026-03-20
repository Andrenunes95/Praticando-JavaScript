// FUNÇÕES NATIVAS DO JS
// ajudam a manter um código limpo e organizado
// evita muita repetição de código
// usamos principalmente quando trabalhamos com listas (array)
/*
// MAP -> Percorre uma lista e cria uma lista com base na condição.

let numeros = [1, 2, 3, 4];

// "num" é uma variável auxiliar para me ajudar a pegar cada número desta lista

let numerosDobrados = numeros.map(function(num) {
    return num* 2;
});

console.log(numerosDobrados); // [2, 4, 6, 8]

// mesma função mas agora com ARROW FUNCTION    

let numerosDobradosArrow = numeros.map(num => num * 2);
console.log(numerosDobradosArrow);

// quando precisamos usar o RETURN ? 
// quando a função precisa ter mais de uma linha.

numeros.map(num => {
    let resultado = num * 2;
    return resultado;
});


// FILTER -> Filtra os elementos de uma lista com base em uma condição.

let numeros = [5, 10, 15, 20]

let maioresQueDez = numeros.filter(num => num > 10);
console.log(maioresQueDez); // [15, 20]


// REDUCE -> reduz os valores de um Array (lista) para um único valor.

// Acumulador chama-se: "total"
// variavel auxiliar chama-se: "num"
// esse 0 é o valor inicial do acumulador(total)

let numeros = [1, 2, 3, 4];

let soma = numeros.reduce((total, num ) => total + num, 0);
console.log(soma);


// FIND -> Retorna o primeiro elemento que atenda a condição.

let produtos = [
    {id: 1, nome: "Teclado", preco: 50},
    {id:  2, nome: "Mouse", preco: 30 }
]
let item = produtos.find(produto => produto.id == 2);
console.log(item);


// SPLIT -> Divide um string em partes transformando numa lista

let frase = "JS é muito bom!!"

// criando um array de palavras usando split

let palavras = frase.split(" ");
console.log(palavras);


// TRIM -> Remove os espaços no inicio e final de uma string

let nome = "  João  ";
let nomeLimpo = nome.trim();

console.log(nome);
console.log(nomeLimpo);


// INCLUDES -> Verifica se existe um valor dentro de uma lista ou sring

let frutas = ["Maçã", "Banana"];

let frutasIncludes = frutas.includes("Banana");
console.log(frutasIncludes); // true (verdadeiro)


// toLowerCase -> transforma o texto em minúsculo
// toUpperCase -> transforma o texto em maiúsculo

let nome = "ANDRÉ";
let cargo = "programador";

console.log(nome.toLocaleLowerCase()); //andré 
console.log(cargo.toLocaleUpperCase()); // PROGRAMADOR


//FOREACH -> Percorre todos os elementos do Array

let nomes = ["Pedro", "João", "Guilherme"];

nomes.forEach(nome => console.log("Seu nome é: ", nome));


// SOME ->  Verifica se pelo menos um item atende a condição

let numeros = [1, 3, 5, 8];

let temPar = numeros.some(num => num % 2 === 0);
console.log(temPar); // true (verdadeiro) 


// EVERY -> Verifica se todos os elementos atendem a uma condição

let numeros = [1, 3, 5, 8];

let todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares); // false


// SORT ->  Ordena os elementos do array

let letras = ["a", "c", "d", "b", "f", "e"]
letras.sort(); // para letras
console.log(letras);

let numeros = [3, 5, 2, 4];
numeros.sort((a, b) => a -b); // para números
console.log(numeros); // [´2, 3, 4, 5]


// REVERSE -> Inverte a ordem de um array(lista)

let numeros = [1, 2, 3];

numeros.reverse();
console.log(numeros); // [3, 2, 1]



// JOIN -> junta os elementos de um array em uma string
let palavras = ["JS", "é", "muito", "bom"];

let frase = palavras.join(" ");
console.log(frase); // "JS é muito bom"



// PUSH -> Adiciona elementos no final do array(lista)
// POP -> Remove elementos no final do array(lista)

let lista = ["A", "B"];

lista.push("C"); // adiciona
lista.pop();    // remove
console.log(lista);


// SHIFT -> Remove do inicio do array(lista)
// UNSHIFT -> adiciona no inicio do array(lista)

let lista = ["B", "C"];

lista.unshift("A"); // adiciona
lista.shift();      // remove
console.log(lista);
*/

// SLICE -> Cria uma cópia de uma parte da lista

/*
array.slice(inicial, final)

inicial -> onde começa
final -> onde para (não inclui a posição(índice ou index))


let numeros = [1, 2, 3, 4]
let parte = numeros.slice(1,3); // 1 e 3 são as posições do array

console.log(parte); // [2, 3] não pega a posição final (3)
*/

// SPLICE -> Remove ou adiciona elementos em qualquer posição

/*
array.splice(index, count, item1,....,itemX)

index -> indice(posicão dpo elemento no array)
count -> número de itens a serem removidos (pode ser 0)
item1,item2...-> itens a serem adicionados


// removendo elementos, sem adicionar

let numeros = [1, 2, 3, 4]

numeros.splice(1,1);

console.log(numeros); // [1, 3, 4]

// removendo e adicionando mais dois elementos

let frutas = ["banana", "laranja", "maçã", "manga"];

frutas.splice(0, 1, "limão", "kiwi");
console.log(frutas);

// adicionando dois elementos sem remover nenhum

let frutasNovas = ["banana", "laranja", "maçã", "manga"];
frutasNovas.splice(2, 0, "limão", "Kiwi");
console.log(frutasNovas);


// REPLACE -> Substitui uma parte da string

let texto = "Olá mundo!"
let novoTexto = texto.replace("mundo", "cliente");
console.log(novoTexto);


// SPOILER.........
let textoP = document.getElementById('texto');

let saudacao = prompt("Digite a Saudação: ");

if(saudacao == "bom dia") {
    textoP.textContent = saudacao;
} else {
    textoP.textContent = "SEXTOU!"
}
*/





/* EXERCÍCIOS FUNÇÕES

// NIVEL BÁSICO

// QUESTÃO 01

const nomes = ["Ana", "Carlos", "André", "Victória", "Angela"];
console.log (nomes);



// QUESTÃO 02

const cores = ["Preto", "Branco", "Roxo", "Vermelho"];
console.log (cores)



// QUESTÃO 03

let valores = [1, 2, 3, 4, 5];

valores.splice(1,3);
console.log(valores);



// QUESTÃO 04 

let frutas = ["uva", "banana", "pêra", "manga"];
console.log(frutas.length);

*/

// NÍVEL INTERMEDIÁRIO

// QUESTÃO 01

let numeros = [1, 2, 4, 9, 8, 5, 6]
