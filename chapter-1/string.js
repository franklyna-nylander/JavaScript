let university = "Limkokwing";
console.log(university);

let fullName = "Amadu Kamara";
let role = "Lecturer";
let faculty = "DICT";

console.log(fullName);
console.log(role);
console.log(faculty);

// 1. String Cocatenation
console.log("****** PERSON INFORMATION ******");
console.log("University: " + university);
console.log("Person Name: " + fullName);
console.log("Role: " + role);
console.log("Faculty: " + faculty);

let sentence =
  "My name is " +
  fullName +
  ". I am a " +
  role +
  " at " +
  university +
  " University and I am in " +
  faculty +
  " Department.";

console.log(sentence);

// String Length
let personName = "Amadu Kamara";
console.log(personName.length());

// Getting a character from a string by its index
console.log(personName[3]);
console.log(personName[7]);
console.log(personName[10]);
console.log(personName[11]);
console.log(personName[1]);

// EXERCISE
let str1 = "Marian Kargbo"
let str2 = "Kemoh Wisdom Conteh"
let str3 = "Franklyna Fatmata Nylander"
let str4 = "Hawanatu Mariama Conteh"
let str5 = "Despitch Brian Allieu"

let abvr1 = str1[0] + str1[7];
let abvr2 = str2[0] + str2[6] + str2[13];
let abvr3 = str3[0] + str3[10] + str3[18];
let abvr4 = str4[0] + str4[9] + str4[17];
let abvr5 = str5[0] + str5[9] + str5[15];

console.log(abvr1)
console.log(abvr2)
console.log(abvr3)
console.log(abvr4)
console.log(abvr5)

// String Methods

let strVal = "Samuel Amkam"
console.log(strVal.toUpperCase())
console.log(strVal.toLowerCase())

// String Formatting
console.log("\t Amadu Kamara") // \t is used to Tab
console.log("\n Amak WebAvenger") // \n is used to break to a new line

// Template Literals / String Literal
let num1 = 20
let num2 = 13
let num3 = 24
let average = (num1 + num2 + num3) / 3
console.log(average)
console.assert.log(`The average of ${num1} +  ${num2} +  ${num3} =  ${average}`);

// Checking if a value exists in a string
let email = "amkam@lenosol.com"
console.log(email.includes("amkam")) //false

// Method Chaninig
console.log(email.toLowerCase().includes("amkam")); //true
