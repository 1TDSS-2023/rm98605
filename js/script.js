"use strict";
// console.log("Olá Mundo");

// var nr1 = "10";
// var nr2 = "5";


//Realizando operações com String

//ParseInt convertendo string para inteiro
// console.log(parseInt(nr1)+parseInt(nr2));

//var nome1 = "Dubas";
// let nome2 = "Serbato";
// const nome3 = "Julia";

// if(nome1 == ""){
//     let nome1 = "Julia"
// }

// console.log(nome1)

// const btn = document.getElementById("meu-btn");

//TRANSFORMANDO O  BOTÃO EM UM BOTÃO RGB

// btn.addEventListener("click",  function(){
//     //console.log(this.textContent)
    
//     let r=0, g=0, b=0;

//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);
    
//     this.setAttribute("style", `background-color: rgb(${r},${g},${b})`)
// })

//let frutas = ["banana", "maça", "laranja", "morango", "uva", "amora", "cereja", "abacaxi"];

//console.log(frutas);
//console.log(frutas[3]);

//console.log(frutas.length);

//Insirindo dado no final do array
//console.log(frutas.push("pêssego"));

//Insirindo dado no inicio do array
//console.log(frutas.unshift("kiwi"));

//remove o ultimo dado do array
//console.log(frutas.pop());

//remove o primeiro dado do array
//console.log(frutas.shift());

//localizando um item no array com o método indexOf

// let indice = frutas.indexOf("maça");
// console.log(`Indice do item buscado: ${indice}`);
// console.log(`Indice do elemento buscado: ${frutas[indice]}`)



//Removendo um item do array com o método splice(indice do item, quantidade de vezes que o indice será removido)
//Ultilize o método indexOf(nomeItem) para descobrir o indice do item.

// let indice = frutas.indexOf("amora");
// console.log(`Elemento no indice antes da remoção: ${frutas[indice]}`);
// frutas.splice(indice, 1)
// console.log(frutas)
// console.log(`Elemento no indice após a remoção: ${frutas[indice]}`);

//imprime uma tabela para o array
// console.table(frutas)


// frutas.forEach((fruta, index)=>{
//     console.log("Posição: "+ index + " - Fruta: " + fruta)
// })

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];

// console.log(nr1);
// console.log(nr2);
// console.log(nr1.concat(nr2));

//concatenando arrays em um novo array
// let nr3 = [...nr1,...nr2];

// console.log("Novo array: " + nr3);

// nr3.forEach((num)=>{
//     // num.forEach((n)=>{
//         console.log("num: " + num)
//     // })
// })

// const imgElements = [...document.getElementsByTagName("img")];
// const imgElementsArray = [...imgElements]

// imgElements.forEach((img)=>{
//     img.setAttribute("width", "10%");
// });

const elements = [...document.querySelectorAll(".teste")];
console.log(elements);

elements.forEach((el)=>{
    if(el.tagName.toLowerCase() == "img"){
        console.log(el);
    }
})










