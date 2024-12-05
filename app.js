/*

1.How do we assign a value to a variable?
    - With a assignment Operator(=).

2.How do we change the value of a variable?
- If the variable is defined with var and let, assignment operator can be used to change the value. 

3.How do we assign an existing variable to a new variable?
- Set the new variable equal to the existing variable. 
4.Remind me, what are declare, assign, and define?
- Declare - Making a variable
- Assign - Giving value to the variable you declare
- Define - This term is used when you declare and assign value to the variable in the same line.
5.What is pseudocoding and why should you do it?
- From my understanding pseudocoding is creating a bluepring of a code. It helps you map out what you should do to make the code functional. 

6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?

- I would personally like to plan and think 70% of the time and code once you get the idea of what you should do. 
*/

console.log("B: Strings");
console.log("--------------------- \n");

let firstVariable;
firstVariable = "Hello World";
firstVariable = 5;
let secondVariable = firstVariable;
secondVariable = "HELLO";
console.log(firstVariable);

//The value of the first variable will be 5 because it was reassigned after it was defined the first time.

let yourName = "Suman Lamitare";
console.log(`Hello, my name is ${yourName}`);

console.log("C: Booleans");
console.log("--------------------- \n");

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");

//only using && or || for the next two

console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false);

console.log(e === "Kevin");
console.log(a + b === c);
console.log(a * a === d);
console.log(48 == "48");

console.log("D: The farm");
console.log("--------------------- \n");

let animal = "chicken";
if (animal === "cow") {
  console.log("moooooo");
} else {
  console.log("Hey! You're not a cow.");
}

console.log("E: Driver's ED");
console.log("--------------------- \n");

let age = 13;
if (age >= 16) {
  console.log("Here are the keys!");
} else {
  console.log("Sorry, you're too young.");
}

console.log("II.Loops");
console.log("--------------------- \n");
console.log("A: The Basics");
console.log("--------------------- \n");
console.log("\n");

console.log("Loop for 0-10");
console.log("--------------------- \n");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

console.log("\n");

console.log("10 -400");
console.log("--------------------- \n");
for (let i = 10; i <= 400; i++) {
  console.log(i);
}
console.log("\n");

console.log("12 - 4000 every third number");
console.log("--------------------- \n");
for (let i = 12; i <= 4000; i += 3) {
  console.log(i);
}
console.log("\n");

console.log("B. Get Even");
console.log("--------------------- \n");

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(`${i} <--- is an even number`);
  } else {
    console.log(i);
  }
}
console.log("\n");

console.log("C. Give me five");
console.log("--------------------- \n");
for (let i = 0; i <= 100; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(`I found a ${i}. Three is crowd. High Five!`);
  } else if (i % 5 === 0) {
    console.log(`I found a ${i}. High Five!`);
  } else if (i % 3 === 0) {
    console.log(`I found a ${i}. Theree is a crowd`);
  }
}

console.log("\n");
console.log("D. Savings Account");
console.log("--------------------- \n");
console.log("1-10");
console.log("\n");
{
  let bank_account = 0;
  for (let i = 1; i <= 10; i++) {
    bank_account += i;
  }
  console.log("$", bank_account);
}

console.log("Bonus");
let bank_account = 0;
for (let i = 1; i <= 100; i++) {
  bank_account += i * 2;
}

//bank_account = bank_account * 2;

console.log("$", bank_account);

/**
 * 1. What are things in the array Called?
 * - Elements
 * 2. Do arrays gurantee those things will be in order?
 * Yes, They will be in the exact order you put them in.
 * 3. What real-life thing could you model with an array?
 * Shopping list
 */

console.log("\n");
console.log("III. Arrays");
console.log("--------------------- \n");

console.log("\n");
console.log("B. Easy Does it");
console.log("--------------------- \n");
let quotes = [
  "The only way to do great work is to love what you do. -Steve Jobs",
  "In the middle of every difficulty lies opportunity. - Albert Einstein",
  "Life is what happens when you're busy making other plans. - John Lennon",
];
console.log(quotes);

console.log("\n");
console.log("C.Accessing elements");
console.log("--------------------- \n");
const randomThings = [1, 10, "Hello", true];
console.log("Random[0] =", randomThings[0]);
randomThings[2] = "World";
console.log(randomThings);

console.log("\n");
console.log("D.Changing Values");
console.log("--------------------- \n");
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];

console.log(
  `To access the 3rd element of this array you can write ourClass[2] which would give the value of ${ourClass[2]}`
);
ourClass[4] = "OctoCat";
ourClass.push("Cloud City");
console.log(ourClass);

console.log("\n");
console.log("E.Mix it up");
console.log("--------------------- \n");
const myArray = [5, 10, 500, 20];
myArray.push("Aegon");
myArray.push("Drogon");
//console.log(myArray);

myArray.shift();
//console.log(myArray);

myArray.unshift("Bob Marley");
//console.log(myArray);
myArray.pop();
//console.log(myArray);
myArray.reverse();
//console.log(myArray);

console.log("\n");
console.log("F.Biggie Smalls");
console.log("--------------------- \n");

let number = 108;
if (number < 100) {
  console.log("Little Number");
} else {
  console.log("Big number");
}

console.log("\n");
console.log("G. Monkey in the Middle");
console.log("--------------------- \n");
let theNumber = 11;

if (theNumber < 5) {
  console.log("Little Number");
} else if (theNumber > 10) {
  console.log("Big Number");
} else {
  console.log("Monkey");
}

console.log("\n");
console.log("H. Whats in your closet?");
console.log("--------------------- \n");
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "Per Scholas hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

console.log("Krystin is rocking that " + kristynsCloset[2] + " today");

kristynsCloset.splice(6, 0, "Raybans");
console.log(kristynsCloset);

kristynsCloset[5] = "Stained Knit hat";
console.log(kristynsCloset);

console.log(
  "Thom is looking fierce in a " +
    thomsCloset[0][0] +
    ", " +
    thomsCloset[1][1] +
    " and " +
    thomsCloset[2][2]
);
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset);

console.log("\n");
console.log("IV.Functions");
console.log("--------------------- \n");

console.log("\n");
console.log("A. printGreeting");
console.log("--------------------- \n");

function printGreeting(name) {
  console.log(`Hello there, ${name}!`);
}
printGreeting("Slimer");

console.log("\n");
console.log("B. Print Cool");
console.log("--------------------- \n");
function printCool(name) {
  console.log(`${name} is cool`);
}
printCool("Captain America");

console.log("\n");
console.log("C. calculate cube");
console.log("--------------------- \n");

function calculateCube(a) {
  console.log(Math.pow(a, 3));
}
calculateCube(5);

console.log("\n");
console.log("D. is Vowel");
console.log("--------------------- \n");

function isVowel(character) {
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(character.toLowerCase())) {
    console.log(true);
  } else {
    console.log(false);
  }
}

isVowel("A");
isVowel("e");
isVowel("U");
isVowel("p");
isVowel("I");
isVowel("a");

console.log("\n");
console.log("E. Get two Lengths");
console.log("--------------------- \n");

function getTwoLengths(string1, string2) {
  return [string1.length, string2.length];
}

console.log(getTwoLengths("Harry", "Dragons"));
console.log(getTwoLengths("Mbappe", "Ronaldo"));

console.log("\n");
console.log("F. Multiple Lengths");
console.log("--------------------- \n");

function getMultipleLengths(arr) {
  let length = [];
  for (let i = 0; i < +arr.length; i++) {
    length.push(arr[i].length);
  }
  return length;
}

console.log(
  getMultipleLengths(["hello", "what", "is", "up", "dude", "goodbye"])
);

console.log("\n");
console.log("G. Max of three");
console.log("--------------------- \n");

function maxOfThree(num1, num2, num3) {
  if (num1 >= num2 && num1 >= num3) {
    console.log(num1);
  } else if (num2 >= num1 && num2 >= num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
}

maxOfThree(5, 5, 7);
maxOfThree(500, 50, 7);

console.log("\n");
console.log("H. Longest Words");
console.log("--------------------- \n");
function printLongestWord(words) {
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(
  printLongestWord([
    "BoJack",
    "Princess",
    "Diane",
    "a",
    "Max",
    "Peanutbutter",
    "big",
    "Todd",
  ])
);

console.log("\n");
console.log("V. Objects");
console.log("--------------------- \n");

console.log("\n");
console.log("A. Make a user objects");
console.log("--------------------- \n");

let user = {
  name: "Mclovin",
  email: "Mclovin@gmail.com",
  age: 21,
  purchased: [],
};
console.log(user);

console.log("\n");
console.log("B. Update the user");
console.log("--------------------- \n");

user.email = "Mclovin1@gmail.com";
user.age++;

console.log(user);

console.log("\n");
console.log("C. Adding key and values");
console.log("--------------------- \n");

user.location = "Ohio";
console.log(user);

console.log("\n");
console.log("D. Shopaholic");
console.log("--------------------- \n");

user.purchased.push("Carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");

console.log(user.purchased[2]);

console.log("\n");
console.log("E. Objects within Objects");
console.log("--------------------- \n");
user.friend = { name: "Seth", age: 18, location: "LA", purchased: [] };

console.log(user.friend.name);
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A Latte");

console.log(user.friend.purchased[1]);

console.log("\n");
console.log("F. Loops");
console.log("--------------------- \n");

for (i in user.purchased) {
  console.log(user.purchased[i]);
}
console.log("\nFriends purchased array \n");

for (i in user.friend.purchased) {
  console.log(user.friend.purchased[i]);
}

console.log("\n");
console.log("F. Objects within Objects");
console.log("--------------------- \n");

function updateUser() {
  user.age++;
  user.name = user.name.toUpperCase();
}

// updateUser();
// console.log(user);

console.log("\nOld and Loud\n");
function oldAndLoud(person) {
  person.age++;
  person.name = person.name.toUpperCase();
}

oldAndLoud(user);

console.log(user);

console.log("\n");
console.log("Cat Combinator");
console.log("--------------------- \n");

let cat1 = { name: "juliet", age: 19, breed: "Mog" };

console.log(cat1.age);
console.log(cat1.breed);

let cat2 = { name: "romeo", age: 45, breed: "Siamese" };

console.log("\n");
console.log("combine Cats");
console.log("--------------------- \n");

function combineCats(cat1, cat2) {
  let kitten = {};

  kitten.name = cat1.name + cat2.name;
  kitten.age = 1;
  kitten.breed = cat1.breed + "-" + cat2.breed;

  return kitten;
}

console.log(combineCats(cat1, cat2));

console.log("\n");
console.log(" Cat brain Bender");
console.log("--------------------- \n");

console.log(
  combineCats(
    combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)),
    combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))
  )
);
