// OPERATORS

// 1. Mathematical Operators
// Addition Operator
let num1 = 20;
let num2 = 10;
let sum = num1 + num2; // Additional operator usage
let difference = num1 - num2; // Substraction operator usage
let product = num1 * num2; // Multiplicaation operator usage
let quotient = num1 / num2; // Division operator usage
let remainder = num1 % num2; // Modulus operator usage

console.log(sum);
console.log(difference);
console.log(product);
console.log(quotient);
console.log(remainder);

// Comparism Operator
console.log(num1 > num2); //Greatrer than operator usage
console.log(num1 < num2); //Lesser than than operator usage
console.log(num1 >= num2); //Greater or Equal operator usage
console.log(num1 <= num2); //Lesser or Equal  operator usage
console.log(num1 == num2); //Equal to operator or Loose Equal usage
console.log(num1 === num2); //Equal to operator or Strict Equal usage`

console.log("--------------------");
let number = "9";
console.log(number == 9); // True - Loose equality check
console.log(number === 9); // False - Strict equality check

// Logical Operator
let email = "amkam@lenosol.com";
let password = "123456789";

// The Logical AND(&) operator - Only returns true when both conditions are true
console.log(email === "amadu@lenosol.com" && password === "123456789"); //False
console.log(email === "amkam@lenosol.com" && password === 123456789); // False
console.log(email === "amkam@lenosol.com" && password === "123456789"); //True

console.log("***************************");
// The Logical OR(||) - Only returns true when at least one condition is true
console.log(email === "amadu@lenosol.com" || password === "123456789"); //True
console.log(email === "amkam@lenosol.com" || password === 123456789); // True
console.log(email === "amadu@lenosol.com" || password === "12345679"); //False

// The Logical Not(!)
let abuAge = 34
let marieAge = 23
let fodayAge = "34"
console.log(abuAge != marieAge) //True
console.log(abuAge != fodayAge) //False
console.log(abuAge !== fodayAge) //True