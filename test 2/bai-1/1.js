console.log('bài 1: ');

function findOppositeNumber(n, inputNumber) {
    let x = n/2
    if(inputNumber < x) {
        console.log (x += inputNumber);
    }
    else {
        console.log (inputNumber -= x); 
    }
    return;
}

console.log(findOppositeNumber(10, 2));
console.log(findOppositeNumber(10, 6));




