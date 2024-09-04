//Calculadora

let readline = require('readline-sync');

let n1 = parseFloat(readline.question("informe o primeiro número: "));

let n2 = parseFloat(readline.question("informe o segundo número:  "));

let op = readline.question("informe a operação desejada \n + para soma \n - para subtração \n * para multiplicação  \n / para divisão\n");

let resultado; 

if(op == "+"){
   resultado =  n1+n2
}
else if(op == "-"){
   resultado =  n1-n2
}
else if(op == "a"){
    resultado =  n1*n2
 }
 else if(op == "/"){
    if(n2 != 0){
    resultado =  n1/n2}
    else{
        console.log("Operação impossivel");
    }
 }
 else{
    console.log("Operação inválida");
 }

 console.log(`resultado : ${resultado}`);
