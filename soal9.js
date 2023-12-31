// soal 9

function duplicates(en) {
    duplicate = []
    for (let i = 0; i < en.length; i++) {
        for (let j = i+1; j < en.length; j++) {
            if(en[i] == en[j]){
                duplicate.push(en[j]);
            }
        }
    }
    if (duplicate.length > 0){
        return duplicate.join(" dan ") + " Nackal" ;
    }else{
        return "Semuanya anak baik";
    }
}
console.log("soal no 9");
console.log(duplicates(["Bagas","Dimas","Bagas"]))
