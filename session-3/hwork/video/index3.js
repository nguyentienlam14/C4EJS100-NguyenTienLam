console.log('Write a script to show user a quiz with 4 choices, for example:');
alert("What day is the teacher's day in Vietnam" + '\n' + '1. 20/11' + '\n' + '2. 20/10' + '\n' + '3. 2/9' + '\n' + '4. 27/77');
while (true)
{
    let ans = Number(prompt ('Enter your answer:'));
    if (ans = 11)
    {
        alert('Bravo, you are correct');
        break;
    }
    else
    {
        alert('Good luck next time');
    }
}
