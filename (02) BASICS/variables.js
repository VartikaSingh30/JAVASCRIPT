// ======================================
// JavaScript Variables Practice
// File: variables.js
// ======================================

// 1. var (Old way - function scoped)
var name = "Vartika";
console.log("var name:", name);

name = "Singh"; // Reassign allowed
console.log("Updated var name:", name);


// 2. let (Modern way - block scoped)
let age = 21;
console.log("let age:", age);

age = 22; // Reassign allowed
console.log("Updated let age:", age);


// 3. const (Constant - block scoped)
const country = "India";
console.log("const country:", country);

// country = "USA"; // ❌ Error: Assignment to constant variable


// ======================================
// Variable Naming Rules
// ======================================

let firstName = "Vartika";   // camelCase
let _score = 95;             // underscore allowed
let $price = 500;            // dollar allowed

console.log(firstName, _score, $price);


// ======================================
// Invalid Variable Names (Examples)
// ======================================

// let 1name = "Wrong";   ❌ Cannot start with number
// let my-name = "Wrong"; ❌ Hyphen not allowed
// let let = "Wrong";     ❌ Reserved keyword


// ======================================
// Scope Example
// ======================================

{
    let blockScoped = "I exist only inside this block";
    var functionScoped = "I exist outside block";
    console.log(blockScoped);
}

// console.log(blockScoped); ❌ Error
console.log(functionScoped);


// ======================================
// Hoisting Example
// ======================================

console.log(x); // undefined (var hoisted)
var x = 10;

// console.log(y); ❌ Cannot access before initialization
let y = 20;


// ======================================
// Practice Questions
// ======================================

// Q1
let studentName = "Rahul";
let studentAge = 19;
const course = "JavaScript";

console.log("Student:", studentName);
console.log("Age:", studentAge);
console.log("Course:", course);


// Q2 Swap values
let a = 5;
let b = 10;

console.log("Before Swap:", a, b);

let temp = a;
a = b;
b = temp;

console.log("After Swap:", a, b);


// ======================================
// Key Differences
// ======================================

/*
var:
- Function scoped
- Can redeclare
- Can reassign

let:
- Block scoped
- Cannot redeclare
- Can reassign

const:
- Block scoped
- Cannot redeclare
- Cannot reassign
*/