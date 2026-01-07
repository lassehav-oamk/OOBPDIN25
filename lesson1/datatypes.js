let x = 5;
let y;
let z = false;

console.log(typeof x); // "number"
console.log(typeof y); // "undefined"
console.log(typeof z); // "boolean"

let testValue;
if(testValue) {
    console.log("This is true");
} else {
    console.log("This is false");
}

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
let max = 9007199254740991;
let beyondMax = max + 1;
let beyondMax2 = max + 2;
console.log(beyondMax);
console.log(beyondMax2);
console.log(beyondMax === beyondMax2); // true

// HEX 
let hexValue = 0xFF; // 255 in decimal
console.log(hexValue);

// Binary
let binaryValue = 0b11; // 3 in decimal
console.log(binaryValue);

// Octal
let octalValue = 0o10;
console.log(octalValue);

// BigInt
let bigIntValue = 9007199254740991n; // note the 'n' at the end
console.log(typeof bigIntValue); // "bigint"
console.log(bigIntValue + 2n); // 9007199254740993n
console.log(bigIntValue + 4n); // 9007199254740995n

// String
let str1 = "Hello world";
let results = str1.split(" ");
console.log(results); // ["Hello", "world"]
console.log(str1.length); // 11

console.log(str1[1]); // "e"

let str2 = 'Single "quote str';
console.log(str2);
// template literals
let str3 = `Value of x is ${x}`;
console.log(str3);

// Mixing datatypes
let mixed = "10" * "2"
console.log(mixed); // 20

if("10" == 10) {
    console.log("They are equal");
}

if("10" === 10) {
    console.log("They are strictly equal");
} else {
    console.log("They are NOT strictly equal");
}

console.log(44 + " is my shoe size")
