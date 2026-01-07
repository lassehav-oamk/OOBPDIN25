// Exercise 1
let firstName = "John";
let lastName = "Doe";

//let name = firstName + ' ' + lastName;
let name = `${firstName} ${lastName}`
console.log(name);

// Exercise 2
let helloStr = "Hello World";
console.log('Length of string: ' + helloStr.length)

// Exercise 3
let myName = "Lasse";
let anotherString = "My name is " + myName;
console.log(anotherString);

// Exercise 4
let ex4Start = "Javascript is fun";
let extractResult = ex4Start.substring(11, 13);
console.log(extractResult)

console.log(ex4Start[11] + ex4Start[12]);

// Exercise 5
let convertStr = "MiXeD CaSe";
console.log(convertStr.toLowerCase())
console.log(convertStr.toUpperCase())

// Exercise 6
let replaceStr = "I love JavaScript!";
let replacedStr = replaceStr.replace('JavaScript', 'coding');
console.log(replacedStr);
console.log(replaceStr);

