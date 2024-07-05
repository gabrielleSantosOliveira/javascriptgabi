"use strict"
var nota1 = parseFloat(prompt("Escreva sua nota do primeiro trimestre: "));
var nota2 = parseFloat(prompt("Escreva sua nota do segundo trimestre: "));
var nota3 = parseFloat(prompt("Escreva sua nota do terceiro trimestre: "));
var media = (nota1+nota2+nota3)/3;
window.alert("Sua média é " + media);
if(media >60){
    window.alert("Você está aprovado gênio!")
} else if(media >=40 && media<60){
    window.alert("Você está de recuperação!")
} else{
    window.alert("Você está reprovado!!!!!")
}

var nome = prompt ("Escreva seu nome:") //serve para fazer a pergunta vísivel para o usuário e aparecer a caixa de entrada =escreva e leia
window.alert(nome);  //serve para fazer aparecer os valores que foram escritos na variavel = escreva
var ano = prompt("Escreva seu ano de nascimento"); 
var atual = 2024, resul = atual-ano;    //para colocar var na msm linha precisa de virgula p n dar erro 
window.alert(nome + " sua idade é: " + resul); // concatenar no js é com + 

