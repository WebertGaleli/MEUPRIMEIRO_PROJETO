var a = 2;
var b = 3;
var c = "Olá Mundo";

// Problemas matemáticos */

var soma = a+b;
var sub = a-b;
var mult = a*b;
var div = a/b;

// if - else if - else */

if (a%2 == 1){
    alert("Número ímpar");
}
else if (c%2 == 0){
    alert ("Número par")
}
else {
    alert("Valor inválido");
}

alert(soma);
alert(sub);
alert(mult);
alert(div);

// while ( enquanto ) */

var i = 0;

while (i < 3) {
    alert(i);

    i = i+1;
}

// for (para) */

for (var j = 0; j < 3; j++){
    alert (j);
}

var numero = 6;
var decimal = 4.5;
var texto = "Olá Mundo";
var lista = ["laranja" , "maça" , "banana"];
for (i in lista){
    alert(lista[i]);
}

console.log("Olá mundo");

