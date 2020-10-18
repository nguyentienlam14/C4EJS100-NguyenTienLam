console.log("Bài 5: Write a program asking users their age, and then decide if they are old enough to view a 14+ content ");

console.log('\n');

let age = prompt ("how old are you? ");
if (age < 10) {
    alert ('you are not old enough to view this content');
}
else if (age > 10){
    alert ('enjoy');
}