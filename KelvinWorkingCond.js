let temperature;
let condition;
let goToWork;
// ask user for temperature
temperature = prompt("What is the temperature outside?");
// list options then ask user for condition
console.log("Possible Conditions:");
console.log("a. Sunny");
console.log("b. Cloudy");
console.log("c. Raining");
console.log("d. Snowing");
console.log("e. Thunder");

// validate user input, if not valid ask again
while (condition !== "a" && condition !== "b" && condition !== "c" && condition !== "d" && condition !== "e") {
    condition = prompt("What is the condition outside?");
}

// if temperature is >= 10 and condition is sunny go to work
if (temperature >= 10) {
  if (condition === "a"){ 
    //goToWork = true;
    console.log("Weather ok, get to work !!!");
  }
} else
// if temperature is >= 10 and condition is cloudy go to work
if (temperature >= 10) {
  if (condition === "b"){
    goToWork = true;
  }
} else
// if temperature is >= 10 and condition is raining don't go to work
if (temperature >= 10) {
  if (condition === "c"){
    goToWork = false;
  }
} else
// if temperature is >= 10 and condition is snowing don't go to work
if (temperature >= 10) {
  if (condition === "d"){
    goToWork = false;
  }
} else
// if temperature is >= 10 and condition is thunder don't go to work
if (temperature >= 10) {
  if (condition === "e"){
    goToWork = false;
  }
}

// if (goToWork === true) {
//   console.log("Weather ok, get to work !!!");
// } else
//   console.log("Weather dodgy, stay at home.");