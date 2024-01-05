var sebut = ["Bagas","Dimas","Bagas","Bagas","Indra","Gilang","Gilang","Bagas"]
var anakNakal = []
var string = ""
for (let j = 0; j < sebut.length; j++) {
    var counter = 1
    for (let i = 1+1; i < sebut.length; i++) {
        if(sebut[j] == sebut[i]){
            counter++
        }
    }
    
    if (counter > 2 && anakNakal.some(e => e.nama == sebut[j]) == false){
        anakNakal.push({nama:sebut[j], jumlah:counter})
    }  
}

anakNakal.sort((a,b)=>b.jumlah-a.jumlah)

for (let k = 0; k < anakNakal.length; k++) {
    if (string === "" && anakNakal[k+1] != undefined) {
        string += anakNakal[k].nama + " dan ";
    } else {
        string += anakNakal[k].nama + " ";
    }

    if (anakNakal[k + 1] === undefined) {
        string += "Nakal";
    }
}

console.log(string)