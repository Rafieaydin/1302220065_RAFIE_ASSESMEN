var arr = [5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5];

var min = 1;
var max = 0;
var avg = 0;
var total = 0;

for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]){
        min = arr[i];
    }
    if (max < arr[i]){
        max = arr[i];
    }
    total += arr[i];
}

avg = (total / arr.length);

console.log("soal no 1");
console.log("max :" + max)
console.log("min :" + min)
console.log("avg: " + Math.round(avg))






