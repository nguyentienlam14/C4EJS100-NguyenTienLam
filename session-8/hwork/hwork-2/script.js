var s = null;
var timeout = null;

function start (){
    if (s === null){
        s = parseInt(document.getElementById('s_val').value);
    }
    if (s == -1){
        clearTimeout(timeout);
        return false;
    }
}
document.getElementById('s').innerText = s.toString();

timeout = setTimeout(function() {
    s--;
    start();
}, 1000);

function stop(){
    clearTimeout(timeout);
}