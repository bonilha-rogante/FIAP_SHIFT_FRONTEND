// TIPOS DE VARIÁVEIS

var exemplo = "Olá, Dev-var!";
console.log(exemplo);

let exemplo1 = "Olá, Dev-let!";
console.log(exemplo1)

const exemplo2 = "Olá, Dev-const";
console.log(exemplo2)

let exemplo3="10";
console.log(exemplo3)

// VAR
function exemplo4(){
    if(true){
        var f=100;
        console.log("Dentro do bloco if: ", f)
    }
    console.log("Dentro do bloco função: ". f)
}

exemplo4()

// LET
function exemplo5(){
    if(true){
        let z=200;
        console.log("Dentro do if: ", z)
    }
    // console.log("Fora do if: ", z)
}

// CONST

const nome = 'Fiap'
// nome = 'Cidade'
console.log(nome)


let exemplo6=10
console.log(typeof exemplo6)

let exemplo7='10'
console.log(typeof exemplo7)

let exemplo8 = true
console.log(typeof exemplo8)

let objeto = {}
console.log(typeof objeto)

let array=[]
console.log(typeof array)

// Valor undefined
let exemplo9;
console.log(exemplo9)

// Valor vazio
let exemplo10 = null
console.log(exemplo10)

// OPERADORES ARITMÉTICOS
const a=20;
const b=10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// OPERADORES LÓGICOS
console.log(a < b);
console.log(a < b && b < 5);
console.log(a < b || b > a);
console.log(a > b);
console.log(a >= b);
console.log(a <= b);

// OPERADORES DE COMPARAÇÃO
console.log(a == b);
console.log(a != b);
console.log(a === b);


// ESTRUTURA CONDICIONAL

// if
if(true) {
    console.log("Verdadeiro")
}

// if else
let nome1="Fiap";

if(nome1 == 'Fiap'){
    console.log("Nome correto")
}else {
    console.log("Nome incorreto!")
}

// Ternário
let  valor2 = 100;
let resultado = valor2 == 1000 ? "Certo":"Errado"
console.log(resultado)

// SWITCH
let time = "";

switch(time){
    case "Corinthians":
        console.log("Melhor Time")
        break;
    case "São Paulo":
        console.log("Não considero o melhor time")
    case "Palmeiras":
        console.log("Não possui mundial")
        break;
    default:
        console.log("Nenhuma das opções")
}

// Estrutura de Repetição
// FOR
for(let i=0; i<=10;i++){
    console.log(i)
}

// WHILE
let c = 0

while(c <= 10){
    console.log(c)
    c++
}

// DO WHILE
let z = 0;

do{
    console.log("do while", z)
    z++
} while(z<=10)

//jogo advinhação

let palpite;
const sorteio = Math.floor(Math.random() * 10) + 1;
do {
    palpite = parseInt(prompt("Escolha um número entre 1 e 10"));
} while(palpite !== sorteio);

alert(`Parabéns! Você acertou o número: ${palpite}`)