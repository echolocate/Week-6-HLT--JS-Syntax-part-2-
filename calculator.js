// (Code required for "prompt" command to run in node.js in VS Code terminal)
// (need to "npm install prompt-sync" first)
// (Comment out if running in HTML page, browser console or REPLIT (probably..))
"use strict";
const prompt = require("prompt-sync")({ sigint: true });

var firstValue = prompt("Enter a number: ");
var secondValue = prompt("Enter second number: ");

switch (operation) {
    case "+":
        addition(firstValue, secondValue);
        break;
    case "-":
        subtraction(firstValue, secondValue);
        break;
    case "/":
        division(firstValue, secondValue);
        break;
    case "*":
        multiplication(firstValue, secondValue);
        break;
    case "^":
        power(firstValue, secondValue);
        break;
    default:
        console.log("Invalid operator");
}

function selectOperation() {
    var operation = prompt("Enter an operator: ");
    console.log("Possible operators are: + - / * or ^");
}

function addition(firstValue, secondValue) {
    return firstValue + secondValue;
}

function subtraction(firstValue, secondValue) {
    return firstValue - secondValue;
}

function division(firstValue, secondValue) {
    return firstValue / secondValue;
}

function multiplication(firstValue, secondValue) {
    return firstValue * secondValue;
}

function power(firstValue, secondValue) {
    return firstValue ^ secondValue;
}

