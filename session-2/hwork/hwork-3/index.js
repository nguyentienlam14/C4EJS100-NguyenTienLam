console.log("Bài 3: ");

console.log("\n");

console.log("A. 7 numbers, starting from 0 (no user input)");
{
    let x = 0;
    for(let x=0; x<7; x++)
    console.log(x);
}

console.log("\n");

console.log("B. n numbers, starting from 0, n entered by user");
{
    let n = prompt('enter a number');
    for (let x = 0; x < n; x++)
    console.log(x);
}

console.log("\n");

console.log("C. A sequence of numbers, starting from 3, ending before n, n entered by user");
{
    let n = prompt ('enter n');
    if (n < 3){
        alert('fail');
    }
    for (let x = 3; x < n; x++)
    console.log(x);
}

console.log("\n");

console.log("D. A sequence of numbers, starting from c, ending before n, c and n entered by user");
{
    let n = prompt ('enter n');
    let c = prompt ('enter c');
    for( let i = c; i < n; i++)
    console.log(i);
}

console.log("\n");

console.log("E. A sequence of numbers, starting from c, ending before n, stepping by 3, c and n entered by user");
{
    n = prompt ('enter n');
    c = prompt ('enter c');
    for (let i = c; i < n; i+=3)
    console.log(i);
}

console.log("\n");

console.log("F. A sequence of numbers, starting from c, ending before n, stepping by s. c, n and s entered by user");
{
    c = prompt ('enter c');
    n = prompt ('enter n');
    let f = prompt ('enter f');
    for ( let i = c; i < n; i += f)
    console.log(i);
}
