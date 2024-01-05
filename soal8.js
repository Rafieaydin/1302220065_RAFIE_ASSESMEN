const menu = {
    elektronik : [
        {nama: "TV",harga:1000},
        {nama: "headphone",harga:200},
        {nama: "kamera",harga:600}
    ],
    fasion : [
        {nama:"baju", harga:50},
    ],
    musik : [
        {nama :"gitar", harga:300}
    ],
    olahraga : [
        {nama: "sepatu", harga:80}
    ]
}


var dataPakAde = {
    Rina : {minat:"elektronik,musik",beli:"TV,headphone"},
    Budi : {minat:"fasion,musik", beli:"baju,gitar"},
    Hartono : {minat:"olahraga,elektronik",beli:"sepatu,kamera"}
}

function findminat(nama){
    var Listminat = [];
    if (dataPakAde[nama] != undefined){
        var minat = dataPakAde[nama].minat
        var arrminat = minat.split(",");
        for (let j = 0; j < arrminat.length; j++) {
            if (menu[arrminat[j]] != undefined){
                  var menus = menu[arrminat[j]]
                  for (let o = 0; o < menus.length; o++) {
                     Listminat.push(menus[o])
                  }
                    
            }
        }
    }
   return Listminat;
}

var nama = "Rina"
console.log(findminat(nama));