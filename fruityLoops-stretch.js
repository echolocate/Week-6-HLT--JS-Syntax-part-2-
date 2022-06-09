// To anyone reading this, sorry about the verbose comments,
// they are purely for my benefit, since I copied most of this code
// from various sources and needed to understand how it all works.
//
// The last attempt (fruityLoops.js) I thought there must be a better way...
// Why not convert the letters of the fruits array into one long string? 
// It would be easier then to scan through and compare against 
// another string containing all letters of the alphabet 
// (UPPER and lowercase), increasing the count on that letter 
// if there is a match and continue until the end of the alphabet
// string (using string.length method).
// I got A LOT of help from the Internet, most, if not all of this code
// is copy/pasted. There is no way I could have coded this from scratch, 
// but I learned a lot. I just hacked together a few algoritms
// to get it all to work together. I love this solution!

var fruits = ["Apple", "Orange", "Banana", "Pear", "Peach", "Strawberry", "Cherry", "Acai"];
let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let fruitString = arrayToString(fruits);
//fruitString ="AppleOrangeBananaPearPeachStrawberryCherryAcai" after conversion

console.log(`${fruits} comprises of: `)

// convert array to string 
// (loop through array, concatenate string with current element in array)
function arrayToString(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string += array[i];
    }
    return string;
}
// initialise count, compare each letter in fruitString
// against 'a' (alphabet[1]), increment count if a match.
// When at the end of fruitString, return count value to
// where the function was called, output "a" (alphabet[1])
// followed by count value. Increment index of alphabet[], 
// now comparing letters of fruitString against 'b' (alphabet[2]), 
// output "b" (alphabet[2]) when at the end of fruitString again. 
// Repeat until end of alphabet string.
// Adding the uppercase letters to the alphabet string catches
// the capitalised first letters in fruitString without the need
// for conversion. Could easily add any character to alphabet[]
// to catch, for example hyphens, full-stops, pound signs etc.
function countLetter(letter, string) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
            count++;
        }
    }
    return count;
}
// countLetter returns quantity per letter for current character in alphabet[i]
// (eg "d" for alphabet[4]), then calls countLetter function to compare all 
// characters in fruitString against next letter in alphabet[i+1].
// Repeat for all characters in alphabet string.
// Output discards letters that don't appear in fruits array 
// (process.stdout.write supresses newline, use instead of console.log if you want the list 
// to go on one line instead of one letter quantity per line). 
for (let i = 0; i < alphabet.length; i++) {
    if (countLetter(alphabet[i], fruitString) >= 1) {
        console.log(`${countLetter(alphabet[i], fruitString)} letter ${alphabet[i]},  `);
        // process.stdout.write(`${countLetter(alphabet[i], fruitString)} letter ${alphabet[i]},  `);
    }
    else { (process.stdout.write("")) }
}




