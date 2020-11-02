console.log("BT thêm: Người dùng nhập n số nguyên ngẫu nhiên từ bàn phím.");

let n = prompt('Enter the number of elements ');
let nums = [];
for (let i = 0; i < n; i++){
    nums.push(prompt(`Enter ${i} element`))
}

console.log("1. Sắp xếp dãy vừa nhập theo chiều tăng dần ");
{
    nums.sort((x,y) => x-y);
    alert(nums);
}
console.log('2. Lọc dãy trên thành 2 dãy: dãy chẵn và dãy lẻ');
{   let chan = []
    let le = [];
    for (let i=0; i<arr.length; i++) 
    {
        if (arr[i]%2 == 0) 
        {
            chan.push(arr[i]);
        }
        else le.push(arr[i]);
    }
alert('số chẵn có trong mảng: ' + `${chan}` + '\n' + 'số lẻ có trong mảng:' + `${le}`);
}
console.log('3.Loại bỏ các số trùng nhau ở 2 dãy.');
{   
    let tle = [];
    for (let tl=0; tl<le.length; tl++) {
    if (!tle.includes(le[tl])) {
        tle.push(le[tl]);
    }
    }
    let tchan = [];
    for (let tc = 0; tc < chan.length; tc++) {
    if (!tchan.includes(chan[tc])) {
        tchan.push(chan[tc]);
    }
}
alert('dãy chẵn đã lọc trong mảng: ' + `${tchan}` + '\n' + 'dãy lẻ đã lọc trong mảng:' + `${tle}`);
}