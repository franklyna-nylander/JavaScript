// Nested If Statement
// Student Grade Distinction Checker
let grade = 92;

if (grade >= 50) {
  console.log("Congratulations, you passed");

  if (grade >= 90) {
    console.log("You passed with distinction");
  } else {
    console.log("You did not pass with distinction");
  }
} else {
  console.log("Sorry, you failed. Please retake the exam.");
}

// Excercise 1
console.log("--------------------------------------");
console.log("\tMama Fatou's Cake Shop");
console.log("--------------------------------------"); 
let totalCakePrice = 3000;

if (totalCakePrice >= 10000) {
  console.log(
    "You won a 10% discount.\nThank you for doing business with us.",
  );

  if (totalCakePrice >= 20000) {
    console.log("You won free delivery service.");
  } else {
    console.log("Sorry, you are not eligible for free delivery.");
  }

} else {
  console.log("Thank you for doing business with us.\n");
}

// Exercise 2
console.log("--------------------------------------");
console.log("\t\tJS App");
console.log("--------------------------------------");

let email = "admin@lenosol.com"
let password = 12345


if(email === "admin@lenosol.com" && password === 12345 ){
    console.log()


}else{
    console.log("Welcome to your user account")
}