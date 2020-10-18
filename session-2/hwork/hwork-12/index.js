console.log("Bài 12: Use JS Turtle to draw a polygon, the number of polygon’s edges entered by users");

console.log('\n');

let n = prompt('Enter number of edges')
let x = (1 - 2/n)*180
for (let i = 0; i < n; i++) {
    fd(50)
    rt(180 - n) 
}