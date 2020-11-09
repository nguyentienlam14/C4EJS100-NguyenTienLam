var i = 0;

    function plus() {
        if (i < 10) {
            i++;
        } 
        else if (i = 10) {
            i = 0;
        }
        document.getElementById("number").innerHTML = i;
    }

    function minus() {
        if (i > 0) {
            --i;
        } 
        else if (i = 0) {
            i = 10;
        }
        document.getElementById("number").innerHTML = i;
    } 

    let countthenumber = document.getElementById("number");
    console.log(countthenumber);