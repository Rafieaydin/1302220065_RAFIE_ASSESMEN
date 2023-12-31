
// no 4
var en = [20,1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10, 12, 14, 16, 18,  20, 17, 19];
var duplicate = false;

for (let i = 0; i < en.length; i++) {
    for (let j = i+1; j < en.length; j++) {
        if(en[i] == en[j]){
            duplicate = true
        }
    }
}
console.log("soal no 4");
console.log(duplicate);
