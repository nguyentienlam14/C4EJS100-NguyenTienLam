console.log('bài 2: ');
var s1 = 'abc';
var s2 = '123';
var array1 = s1.split('');
var array2 = s2.split('');
var c = array1.length + array2.length; 
var mangsaukhitron = "";
var dem1 = 0;
var dem2 = 0;
for(var i = 0;i<c; i+=1){
    if(i%2==0){
        if(dem1==array1.length-1 && dem2<array2.length-1){
            mangsaukhitron +=array1[dem1];
            for(var i = dem2;i<array2.length;i++){
                mangsaukhitron+=array2[i];
            }
            break;
        }
        mangsaukhitron +=array1[dem1];
        dem1+=1;
        continue;
    }
    if(i%2==1) {
        if(dem2==array2.length-1 && dem1<array1.length-1){
            for(var i = dem1;i<array1.length;i++){
                mangsaukhitron+=array1[i];
            }
            break;
        }
        mangsaukhitron +=array2[dem2];
        dem2+=1;
        continue;
    }
}
console.log (mangsaukhitron);


