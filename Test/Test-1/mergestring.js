function merge2String(s1, s2) {
    x = Math.min(s1.length, s2.length);
    y = "";
    for (let i = 0; i < x; i++) {
        y += s1[i] + s2[i];
    }
    if (s1.length > s2.length) {
        y += s1.substring(x);
    }
    else if (s1.length < s2.length) {
        y += s2.substring(x);
    }
    return y;
}

console.log(merge2String("abc", "123"));
console.log(merge2String("abc", "0123"));
console.log(merge2String("abcd", "123"));