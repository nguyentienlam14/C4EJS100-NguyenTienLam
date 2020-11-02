console.log('init');

let movie = {
    title: 'the dark night rises', 
    year: 2012,
    rate: 8.4,
};
console.log(movie ); 

console.log('\n');

console.log('read \n ' );

console.log('read.1');
console.log(movie.title);
console.log(movie.rate);
console.log(movie.year);

console.log('\n');

console.log('read.2');

let arr = ['girlfriend', 'game', 'sport'];
console.log(arr);
arr.push('vapepod');
console.log(arr);
for(let i = 0; i < 3; i++) {
    console.log(arr[i]);
    arr[i] = arr[i].toUpperCase;
}



