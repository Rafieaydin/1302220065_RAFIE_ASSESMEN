var arr = [20, 1, 3, 2, 4, 6, 8, 5, 7, 9, 11, 13, 15, 10,
    12, 14, 16, 18, 20, 17, 19]

output = false
for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        if(arr[i] == arr[j]){
            output = true;
        }
    }
}
console.log("Soal no 4 :")
console.log(output)