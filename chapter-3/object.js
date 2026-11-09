// JS - OBJECTS
const student = {
  firstName: "Mohammed",
  lastName: "Kargbo",
  age: 29,
  walk: true,
  girlfriend: false,
  university: "Limkokwing",
  program: "BSEM",
  occupation: "Web Designer",
  photo: "https://www.pixabay.com/mohamed-pic-002",
  website: "https://mohamed-kargbo.netlify.app/",
};

// Printing the object
console.log(student);

// Accessing a property of an object
console.log(student.photo);

// UPDATING AN ATTRIBUTE IN AN OBJECT
student.occupation = "Website Designer";
console.log(student);

// Adding a new property to the object
student.gender = "Male";
console.log(student);

// Exercise 1

const citizen = {
  fullName: "Alima Turay",
  id: "905006245",
  age: 30,
  gender: "Female",
  address: "22 Sunflower Drive",
  occupation: "Data Analyst",
  nationality: "Sierra Leonean",
};

console.log("**********************************");
console.log("\tCitizen Information");
console.log("**********************************");
console.log(`Name:  ${citizen.fullName}`);
console.log(`ID:  ${citizen.id}`);
console.log(`Age:  ${citizen.age}`);
console.log(`Gender:  ${citizen.gender}`);
console.log(`Address:  ${citizen.address}`);
console.log(`Occupation:  ${citizen.occupation}`);
console.log(`Nationality:  ${citizen.nationality}`);

const house = {
  location: "Lumley",
  numberOfRooms: 4,
  parlour: 2,
  owner: "Angela Yankuba",
  pricePerNight: 100,
  facilities: [
    "Internet",
    "One-Mobile - wifi",
    "Kitchen",
    "TV",
    "Car Park",
    "Dryer",
    "Pool",
    "Beach Access",
    "No smoking",
    "No Pet",
  ],
  appartment:{
    name: "Block D appartment",
    numberOfRooms: 2,
    gamingTV: 1
  }
};

console.log(house)
console.log(house.appartment)
console.log(house.facilities)

