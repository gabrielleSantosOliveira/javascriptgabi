var vezes = 0;
var peso = 1;
var pesoT = 0;
var media = 0;
var maior = 0; 
var min = 0;

while(peso!=0){ 
peso = parseFloat(prompt ("Escreva o peso do gado: "));

if(peso!=0){
pesoT = pesoT + peso
}
if(peso>maior){
    maior=peso
}
if(peso<min){
    min=peso
}
vezes++
}

media = (pesoT)/(vezes - 1);
window.alert("O maior número é: " +maior);
window.alert ("A média é: " +media);