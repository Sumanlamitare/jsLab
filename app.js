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

let animal = "cow";
if (animal === "cow") {
  console.log("moooooo");
} else {
  console.log("Hey! You're not a cow");
}
