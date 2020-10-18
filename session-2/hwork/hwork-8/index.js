console.log("Bài 8 : Write a script to check if a number is even (divisible by 2) or odd number");

console.log('\n');

let x = prompt('x = ');
let val = x % 2 == 0 ? "even" : "odd";
alert(`${x} is and ${val} number`);