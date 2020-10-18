console.log("Bài 10: Write a script to calculate the BMI (Body Mass Index) of a person, the formula is as follows");

console.log('\n');

let mass = prompt('Your weight in kg?')
let height = prompt('Yow height in cm?')
let BMI = mass/(height*height)
alert(`Your BMI is ${BMI}`)
if (BMI < 16) alert('You are severely underweight')
else if (BMI >= 16 && BMI < 18.5) alert('You are under weight')
else if (BMI >= 18.5 && BMI < 25) alert('You are normal')
else if (BMI >= 25 && BMI < 30) alert('You are overweight')
else alert('You are obese')
