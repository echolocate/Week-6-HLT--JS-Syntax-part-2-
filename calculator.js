// (Code required for "prompt" command to run in node.js in VS Code terminal)
// (need to "npm install prompt-sync" first)
// (Comment out if running in HTML page, browser console or REPLIT (probably..))
"use strict";
const prompt = require("prompt-sync")({ sigint: true });

do {
    // start with a fresh screen
    console.clear();
    console.log("Simple Arithmetic Calculator");
    console.log("========+ - * / ^===========");
    console.log("");

    // reset return flag. True denotes user hasn't entered numbers.
    let notNumFlag = false;

    // input two numbers, ask again if Not a Number
    do {
        if (notNumFlag === true) {
            console.log("Must enter numbers!! Try again...")
        }
        var firstValue = prompt("Enter a first number: ");
        var secondValue = prompt("Enter second number: ");
        notNumFlag = true;
    }
    while ((isNaN(firstValue)) || (isNaN(secondValue)));

    // ask user for operation, validation handled by switch default 
    var operation = prompt("Enter an operation: ");

    // call function based on operation, print result inline
    switch (operation) {
        case "+":
            console.log(`${firstValue} ${operation} ${secondValue} = ${addition(firstValue, secondValue)}`);
            break;
        case "-":
            console.log(`${firstValue} ${operation} ${secondValue} = ${subtraction(firstValue, secondValue)}`);
            break;
        case "/":
            console.log(`${firstValue} ${operation} ${secondValue} = ${division(firstValue, secondValue)}`);
            break;
        case "*":
            console.log(`${firstValue} ${operation} ${secondValue} = ${multiplication(firstValue, secondValue)}`);
            break;
        case "^":
            console.log(`${firstValue} ${operation} ${secondValue} = ${power(firstValue, secondValue)}`);
            break;
        default:
            console.log("Invalid operator");
    }

    // Evaluate for each operation, return appropriate answer
    // Eventually fold into an Object and these be the methods.
    function addition(firstValue, secondValue) {
        return Number(firstValue) + Number(secondValue);
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
        return firstValue ** secondValue;
    }

    // Return to start if user enters 'y', otherwise exits.
    var runAgain = prompt("Do you want to check again (y/n)?");
} while (runAgain == "y");

