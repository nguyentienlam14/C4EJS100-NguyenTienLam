console.log("Bài 9: Write a program to print out");

console.log('\n');

console.log('A. 6 L’s and H’s, half L’s, half H’s (L means low, H means high)');
{
    console.log('3');
    console.log('3');
}

console.log('\n');

console.log("B. n L’s and H’s in total, n entered by user");
{
    let n = prompt("enter the total number of L's and h's");
    console.log(Math.ceil(n/2));
    console.log(Math.floor(n/2));
}

console.log('\n');

console.log('C. 8 1’s and 0’s in total, consecutively');
{
    for ( let i = 0; i < 4; i++)
    console.log(0);
    console.log(1);
}

console.log('\n');

console.log('D. n 1’s and 0’s in total, consecutively, n entered by user');
{
    n = prompt("Enter the total number of 1's and 0's")
    for (let i = 0; i < n; i++)
    {
        if (i % 2 == 0) console.log(0)
        else console.log(1)
    }
}