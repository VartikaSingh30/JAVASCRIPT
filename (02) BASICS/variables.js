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