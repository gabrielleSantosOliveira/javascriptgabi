"use strict"
//ATIVIDADE 01
 var nome = prompt ("Nome: ");
 var dia = prompt ("Dia: ");
 var mes = prompt ("Mês: ");

 if(nome=="celso portiolli" && mes=="9" && dia=="11"){
    window.alert("O Celso Portiolli não tem nada a ver com o 11 de Setembro")
 } else if(nome=="gabrielle" && mes=="7" && dia=="4"){
    window.alert("Faça a prova com atenção")
 } else{
    window.alert("Tem algo errado aí Gabrielle")
 }

//ATIVIDADE 02

 var nota1 = parseFloat(prompt("Escreva sua nota do primeiro trimestre: "));
 var nota2 = parseFloat(prompt("Escreva sua nota do segundo trimestre: "));
 var nota3 = parseFloat(prompt("Escreva sua nota do terceiro trimestre: "));
 var media = (nota1+nota2+nota3)/3;
 window.alert("Sua média é " + media);

 if(media>=60){
     window.alert("Você está aprovado gênio!")
 } else if(media >=40 && media<60){
     window.alert("Você está de recuperação!")
 } else{
     window.alert("Você está reprovado!!!!!")
 }


//ATIVIDADE 03
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



//ATIVIDADE 04
var num1 = prompt("Primeiro número: ");
var num2 = prompt("Segundo número: ");
var resul = (num1**num2);
window.alert("O " +num1+ " elevado a " +num2+ " é igual a : " +resul+".");




