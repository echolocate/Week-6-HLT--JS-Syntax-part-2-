var temperature;
var condition;
var goToWork;
// ASK USER FOR TEMPERATURE
temperature = prompt("What is the temperature outside?");
// ask user for condition
console.log("Possible Conditions:");
console.log("a. Sunny");
console.log("b. Cloudy");
console.log("c. Raining");
console.log("d. Snowing");
console.log("e. Thunder");

condition = prompt("What is the condition?");

function weather (temperature, condition) {
// if temperature is >= 10 and condition is sunny go to work
if (temperature >= 10) {
  if (condition === "sunny") OR (condition === "a") 
    goToWork = true;
  
} else
// if temperature is >= 10 and condition is cloudy go to work
if (temperature >= 10) {
  if (condition === "cloudy") OR (condition === "b") 
    goToWork = true;
  
} else
// if temperature is >= 10 and condition is raining don't go to work
if (temperature >= 10) {
  if (condition === "raining") OR (condition === "c") 
    goToWork = false;
  
} else
// if temperature is >= 10 and condition is snowing don't go to work
if (temperature >= 10) {
  if (condition === "snowing") OR (condition === "d") 
    goToWork = false;
  
} else
// if temperature is >= 10 and condition is thunder don't go to work
if (temperature >= 10) {
  if (condition === "thunder") OR (condition === "e") 
    goToWork = false;
  
}
  return (goToWork);
}
if (goToWork === true) {
  console.log("Weather ok, get to work !!!");
} else
  console.log("Weather dodgy, stay at home.");