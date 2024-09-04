let readline = require('readline-sync');

let num = parseInt(readline.question("informe o número: "));

if(num%num == 0 && num%num == 1){
    console.log(`O valor ${num} é primo`);
}
else{
    console.log("Esse número não é primo");
}