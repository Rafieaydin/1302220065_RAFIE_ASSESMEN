
// no 6 contoh array to objext
var list = [
    {"makanan": [
        ["Ayam Goreng Krispi",15000],
        ["Ayam Puk Puk (Bukan di geprek)",13000],
        ["Ayam bakar",20000],
    ]},{"minuman" : [
        ["Es teh",5000],
        ["Es Jeruk",7000],
    ]}
]

list["makanan"] = list[0]["makanan"]
list["minuman"] = list[1]["minuman"]


function countPajak(jumlah,tipe) {
    switch (tipe) {
        case "Makanan":
            return jumlah + (jumlah * 0.05)
            break;
        case "Minuman":
            return jumlah + (jumlah * 0.03)
            break;
        case "total":
            return jumlah + (jumlah * 0.15)
            break;
        default:
            break;
    }
}
console.log("soal no 6");
var totalR = countPajak(countPajak((list["makanan"][2][1])*2,"Makanan") + countPajak(list["minuman"][1][1],"Minuman"),"total");
console.log("Rehan Whangsap memesan 2 ayam bakar dan 1 esteh totalnya : " + totalR)
var totalA = countPajak(countPajak(list["makanan"][1][1],"Makanan") + countPajak((list["minuman"][0][1])*3,"Minuman"),"total");
console.log("Amba roni memesan 1 Ayam puk puk dan 3 esteh : " + totalA)
var totalW = countPajak(countPajak(list["makanan"][0][1],"Makanan") + countPajak(list["makanan"][1][1],"Makanan") + countPajak(list["makanan"][2][1],"Makanan") + countPajak(list["minuman"][0][1],"Minuman")+ countPajak(list["minuman"][1][1],"Minuman"),"total");
console.log("Karena Faiz ngawi sangat lapar dia memesan semuanya satu satu : " + totalW)
