console.log('Write a script asking users their username, if the entered username is too long (&gt;15 characters), tell them that and ask them to re-enter a new username, if the username is short enough (&lt;=15 characters), tell them it is good.');
let n = prompt ('what is your name: ');
do {
    n = prompt('your username is to long');
}
while (n.length > 15);
alert('good username');