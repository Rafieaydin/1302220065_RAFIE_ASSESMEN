// no 8
var list2 = 
    {"elektronik": [
        ["TV",1000],
        ["headphone",200],
        ["kamera",60],
    ],"fasion" : [
        ["baju",50],
    ],"musik":[
        ["gitar",300]
    ],"olahraga":[
        ["sepatu", 80]
    ]}

function minat(minat) {
    output = [];
    for (let i = 0; i < minat.length; i++) {
        if(list2[minat[i]] != undefined){
            for (let j = 0; j < list2[minat[i]].length; j++) {
                output.push(list2[minat[i]][j][0]); 
            }
        }
    }
    return output
}
console.log("soal no 8");
console.log( "rekomendasi Rina dengan minat elektronik fasion adalah " + minat(["elektronik","fasion"]).join(' '))
