// no 2
var word = ["Angsa","KataK","kasur empuk","Aku suka kamu", "ibu ratna antar ubi"];

console.log("soal no 2");
for (let i = 0; i < word.length; i++) {
    var mid = word[i].split('').reverse().join('');
    console.log( (mid == word[i]) ? "eureeka!" : "suka blyat");
}
