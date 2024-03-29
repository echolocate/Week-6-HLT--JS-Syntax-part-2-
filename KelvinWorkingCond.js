// Tests performed:
// force goToWork true
// temp 12 cond a,b ---pass
// temp 22 cond c   ---pass
//
// force goToWork false
// temp 12 cond c,d,e     ---pass   
// temp 5 cond a,b,c,d,e  ---pass
// temp 40 cond a,b,c,d,e ---pass

// (Code required for "prompt" command to run in node.js in VS Code terminal)
// (need to "npm install prompt-sync" first)
// (Comment out if running in HTML page, browser console or REPLIT (probably..))
"use strict";
const prompt = require("prompt-sync")({ sigint: true });

var temperature;
var condition;
var goToWork;
var runAgain;

// top of the loop, returns here if user wants to run again
do {
  // start with a fresh screen
  console.clear();

  // function takes in a temperature and a condition
  // validates the input, returns both values
  function userInput() {
    // ask user for temperature
    temperature = prompt("What is the temperature outside? ");
    // list options then ask user for condition
    console.log("Possible Conditions:");
    console.log("a. Sunny");
    console.log("b. Cloudy");
    console.log("c. Raining");
    console.log("d. Snowing");
    console.log("e. Thunder");
    // validate user input, if not valid ask again
    do {
      condition = prompt("What is the weather condition? ");
    }
    while ((condition !== "a") && (condition !== "b") && (condition !== "c")
    && (condition !== "d") && (condition !== "e"));
    return (temperature, condition);
  }

  // Function evaluates combinations based on temperature and condition
  // Returns boolean goToWork value
  function whetherToWork(temperature, condition) {
    // console.log(temperature, condition); --- debug, used to check values passed in
    if (((temperature >= 10) && (temperature <= 20)) && ((condition === "a") || (condition === "b"))) {
      goToWork = true;
      //console.log(`${goToWork} if statement 1`); --- used to debug
    }
    else if (((temperature >= 21) && (temperature <= 30)) && ((condition === "a") || (condition === "b") || (condition === "c"))) {
      goToWork = true;
      //console.log(`${goToWork} if statement 3 else if`); --- used to debug
    }
    else {
      goToWork = false;
      //console.log(`${goToWork} if statement 3 else`); --- used to debug
    }
    return goToWork;
  }

  // call userInput function to get temperature and condition
  userInput();
  // call whetherToWork function to evaluate temperature and condition
  whetherToWork(temperature, condition);
  //console.log(`${goToWork} returned from function`); -- debugging, check return value
  // output to user, based on function evaluation
  if (goToWork == false) {
    console.log(`Temperature is ${temperature}C, can't work in these conditions, take the day off.`);
  } else
    console.log(`Get back to work, it is ${temperature}C and the weather is dandy !!`);

  // ask user if they want to run again
  // TODO: add validation
  runAgain = prompt("Do you want to check again (y/n)?");
} while (runAgain == "y");