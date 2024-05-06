// Homework

// Part 1: Understanding Data Types in JavaScript
    // Imagine you are developing a student management system for a school. Your task is to create a JavaScript program that declares 
    // variables to store information about students, such as their names, ages, grades, and attendance status.

    // Task 1: Declare variables to represent student information such as name, age, grade, and attendance status.
    // Task 2: Assign sample values to the student information variables.
    // Task 3: Display the student information using console.log() statements.

let _name;
let age;
let grade;
let isAttendance;

_name = "John";
age = 35;
grade = 92;
isAttendance = true;

console.log("Name: ", _name);
console.log("Age: ", age);
console.log("Grade: ", grade);
console.log("Attendance: ", isAttendance)




// Part 2: Exploring JavaScript Operators
    // You are tasked with developing a simple calculator program in JavaScript. Your program should be able to perform basic arithmetic 
    // operations such as addition, subtraction, multiplication, and division.

    // Task 1: Declare variables to store two numeric values for performing arithmetic operations.
    // Task 2: Assign sample numeric values to the variables declared in Task 1.
    // Task 3: Perform arithmetic operations on your numeric values using various operators and display the results.
    // Task 4: Explore assignment operators and update the values of variables.
    // Task 5: Use comparison operators to compare the values of variables.
    // Task 6: Apply logical operators to combine conditions and display the results.

let x;
let y;

x = 8;
y = 12;

let sum = x+y;
let sub = x-y;
let mult = x*y;
let div = x/y;

console.log("Sum:", sum);
console.log("Difference:", sub);
console.log("Product:", mult);
console.log("Quotient:", div);

x = 10;
y = 20;

console.log("Updated num1:", x);
console.log("Updated num2:", y);

console.log("Is num1 equal to num2?", x == y);
console.log("Is num1 greater than num2?", x > y);
console.log("Is num1 not equal to num2?", x != y);

let num1;
let num2;

num1 = 12;
num2 = 18;

let isPositive = num1 > 0 && num2 > 0;
let isEven = num1 % 2 == 0 || num2 % 2 == 0;

console.log("Are both numbers positive?", isPositive);
console.log("Is at least one number even?", isEven);




