console.log("A. Initialize an array named movies containing the titles of some of your favorite movies");
let movie = ['rom' , 'hotel del luna' , 'one piece' , 'venom'];
console.log(movie);

console.log("B. Add new item named newMovie into the end of the movies array you initialized, newMovie entered by users");
let newMovie = prompt('enter the new movie ');
movie.push(newMovie);
console.log(movie);

console.log("C. Read the item at position i in the movies array, i entered by users");
let i = prompt('tên phim? ');
for(let i = 0; i < 4; i++) {
    console.log(movie[i]);
}

console.log("D.1: Update the first item of the movies array into movieTitle, movieTitle entered by users");
let movieTitle = prompt('nhập phim');
let i = 0;
movie[i] = movieTitle;
console.log(movie);

console.log("D.2: Update a item at position i of the movies into movieTitle, i and movieTitle entered by users");
let movieTitle = prompt('nhập phim');
let i = prompt ("số thứ tự phim");
for (let i = 0; i < 4; i++) {
    console.log(movie[i]);
} 
movie[i] = movieTitle;
console.log(movie);

console.log("E.1: Delete 1 item at position i from movies array movies, i entered by users");
let i = prompt('nhập số cần xóa: ');
movie.splice(i , 0);
console.log(movie);

console.log('E.2: Delete n item at position i from movies array, i and n entered by users')
let i = prompt('nhập n số cần xóa: ');
movie.splice(i, n);

console.log('F.1: Read or log all of items in movies array into console  ');
for (let x = 0; x < movie.length; x++){
    console.log(movie[x]);
}

console.log('F.2: Read or log only first half items in movies array into console');
for(let x = 0; x < movie.length/2; x++) {
    console.log(movie[x]);
}

console.log('F.3: Read or log all of items in movies array into console with the item position,');
for (let x = 0; x < movie; x++) {
    console.log(`${j+1}. ${movies[j]}`);
}

console.log('G. Change all items of movies array into lowercase');
for (let x = 0; x < movie.length; x++) {
    menu[x] = menu[x].toLowerCase;
}