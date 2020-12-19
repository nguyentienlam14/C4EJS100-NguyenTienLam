let num;
let dem=0;
let A = document.getElementById("yourNumber");
A.addEventListener('keyup',()=>{
    return A.value;
})
let btn=document.getElementById("btn");
btn.addEventListener('click',()=>{
    num=Math.floor(Math.random() * 11 ); 
    dem++;
    if(A.value == num){
        alert("Very well, you guessed correctly");
    }
    else alert(`Wrong. The results are correct ${num}`);
    if(dem == 3){
        alert(`Game over`);
    }
})