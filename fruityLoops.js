// See fruityLoops-stretch.js for a more elegant solution.
// =======================================================
// Set up the fruit elements in fruits array,
// can add more fruits to the array if you need to.
var fruits = ["Apple", "Orange", "Banana", "Pear",
    "Peach", "Strawberry", "Cherry", "Acai"];

console.log("Fruits to get letters for:");
console.log(`${fruits}`);
console.log("");
// outer loop, picks out each fruit element in array
for (let fruit in fruits) {
    // initialise count at the start of next element
    let vowels = 0;
    let consonants = 0;
    let indefArt;
    let vplural;
    let cplural;

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
                if (i === 0) {
                    indefArt = "An";
                }
                break;
            default:
                consonants++;
                if (i === 0) {
                    indefArt = "A";
                }
                break;
        }
    }
    // determines if vowels or consonants are plural for output.
    // (messy, must be a better way using only one plural variable)
    if (vowels === 1) {
        vplural = "";
    }
    else {
        vplural = "s";
    }
    if (consonants === 1) {
        cplural = "";
    }
    else {
        cplural = "s";
    }

    console.log
        (`${indefArt} ${fruits[fruit]} has ${vowels} vowel${vplural} and ${consonants} consonant${cplural}.`);
}

