var arr = [5,4,2.5,5,3.6,1.1,3.6,4,4.2,1.5]

max = 0;
min = 1;
sum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max){max = arr[i];}
    if (arr[i] < min){min = arr[i];}
    sum += arr[i];
}
avg = sum / arr.length;

console.log(max, min, avg)