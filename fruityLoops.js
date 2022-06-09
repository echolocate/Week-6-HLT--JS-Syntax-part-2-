// set up the fruit elements in fruits array,
// can add more fruits to the array if you want
var fruits = ["Apple", "Orange", "Banana", "Pear",
    "Peach", "Strawberry", "Cherry", "Acai"];

// outer loop, picks out each fruit element in array
for (let fruit in fruits) {
    // initialise count at the start of next element
    let vowels = 0;
    let consonants = 0;

    // inner loop, isolate each letter in fruit element,
    // convert to lower case then check against vowels 
    // and consonants add 1 to either count if a match
    for (let i = 0; i < fruits[fruit].length; i++) {
        let lowerCaseFruitLetter = fruits[fruit][i].toLowerCase();
        switch (lowerCaseFruitLetter) {
            case "a":
            case "e":
            case "i":
            case "o":
            case "u":
                vowels++;
                break;
            default:
                consonants++;
                //console.log(fruits[fruit][i]);
                //console.log(`number of consonants ${consonants}`);
                break;
        }
    } console.log(`${fruits[fruit]}, vowels: ${vowels}, consonants ${consonants}`);
}

