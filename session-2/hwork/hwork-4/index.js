console.log("Bài 4: Write a program to calculate the factorial of n: (1 * 2 * 3 *... *n), n enter by user");

console.log("\n");

let n = prompt ('enter a number')
if (n < 2)
alert(`The factorial of ${n} is 1`);
else {
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res*=i;
    }
    alert(`The factorial of ${n} is ${res}`);
}