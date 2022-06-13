
// Clear all the values in display
function clearScreen() {
    document.getElementById("result").value = "";
}


// Passed through from HTML page
function display(value) {
    document.getElementById("result").value += value;
}

// Parses string from HTML (triggered by "="), on encountering an operator,
// stores previous characters in firstValue, characters after operator in
// secondValue and displays result.
// TODO: This is not quite right, should clear display after giving result
// instead of allowing user to add numbers and operators afterwards, which 
// gives a bogus result.
// Probably easy to fix but my brain hurts and I ran out of time.
function calculate() {
    var userInput = document.getElementById("result").value;
    for (let i = 0; i < userInput.length; i++) {
        switch (userInput[i]) {
            case '+':
                var firstValue = userInput.slice(0, i);
                var secondValue = userInput.slice((i + 1), userInput.length);
                console.log(`${firstValue} ${userInput[i]} ${secondValue}`);
                var answer = parseInt(firstValue) + parseInt(secondValue);
                display(` = ${answer}`);
                break;

            case '-':
                var firstValue = userInput.slice(0, i);
                var secondValue = userInput.slice((i + 1), userInput.length);
                console.log(`${firstValue} ${userInput[i]} ${secondValue}`);
                var answer = parseInt(firstValue) - parseInt(secondValue);
                display(` = ${answer}`);
                break;

            case '*':
                var firstValue = userInput.slice(0, i);
                var secondValue = userInput.slice((i + 1), userInput.length);
                console.log(`${firstValue} ${userInput[i]} ${secondValue}`);
                var answer = parseInt(firstValue) * parseInt(secondValue);
                display(` = ${answer}`);
                break;

            case '/':
                var firstValue = userInput.slice(0, i);
                var secondValue = userInput.slice((i + 1), userInput.length);
                console.log(`${firstValue} ${userInput[i]} ${secondValue}`);
                var answer = parseInt(firstValue) / parseInt(secondValue);
                display(`= ${answer}`);
                break;

            case '^':
                var firstValue = userInput.slice(0, i);
                var secondValue = userInput.slice((i + 1), userInput.length);
                console.log(`${firstValue} ${userInput[i]} ${secondValue}`);
                var answer = parseInt(firstValue) ** parseInt(secondValue);
                display(`= ${answer}`);
                break;
            // case '^':
            //     var firstValue = userInput.slice(0, i);
            //     var secondValue = userInput.slice((i + 1), userInput.length);
            //     console.log(`${firstValue} ${userInput[i]} ${secondValue}`);
            //     var answer = parseInt(firstValue) ^ parseInt(secondValue);
            //     display(answer);
            // default:
            //     console.log(`${userInput}`);
        }
    }
}

