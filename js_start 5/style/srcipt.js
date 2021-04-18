"use strict";

let num =20;

function showFirstMessage (text){
console.log(text);
 let num = 10;

}

showFirstMessage("Hello World!");
console.log(num);

function calc(a , b){
    return(a + b);
}

console.log(calc(4,5));
console.log(calc(6,9));
console.log(calc(10,20));

function ret(){
    let num =50;
    return num;
}

const anoterNum = ret();
console.log(anoterNum);

const logger = function(){
    console.log("Hello!");
};

logger();

const callc = (a,b) => a+b;