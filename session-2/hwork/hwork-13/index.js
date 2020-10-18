console.log("bài 13: (Optional) Use JS Turtle to draw n polygons, n entered by users");

console.log('\n');

let pol_num = prompt('How many polygon?');
for (let i = 0; i < pol_num; i++) {
    let edges = i + 2;
    let corner = (1 - 2/(edges))*180;
    for (let j = 0; j < edges; j++) {
        fd(50)
        rt(180-corner); 
    }
}