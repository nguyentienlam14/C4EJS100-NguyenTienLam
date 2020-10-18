console.log("Bài 7: Write a program asking user to enter two numbers, x and n, then check if x is in lower half or higher half of n");

console.log('\n');

let n = prompt ('n = ');
let x = prompt ('x = ');
let rel = x*2 < n ? "lower" : "higher";
alert(`${x} is in ${rel} half of ${n}`);