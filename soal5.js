// no 5
var strs = "Naip Lovyu";
var maxString = 6;
var totalCombination = 1;
for (let i = 0; i < 6; i++) {
    totalCombination *= strs.length;
}
console.log("soal no 5");
console.log(totalCombination);