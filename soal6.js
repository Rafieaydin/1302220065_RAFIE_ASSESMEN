var Menu = {
    makanan : [
        {nama : "Ayam", harga : 15000},
        {nama : "Ayam Puk Puk (Bukan digeprek)", harga : 13000},
        {nama : "Ayam Bakar", harga : 20000}
    ],
    minuman : [
        {nama : "Es Teh", harga : 5000},
        {nama : "Es Jeruk", harga : 7000},
    ]
}

const pesananRehan = [
    { jenis: "makanan", nama: "Ayam Bakar", jumlah: 2 },
    { jenis: "minuman", nama: "Es Teh", jumlah: 1 }
];

const pesananAmbaRoni = [
    { jenis: "makanan", nama: "Ayam Puk Puk (Bukan digeprek)", jumlah: 1 },
    { jenis: "minuman", nama: "Es Teh", jumlah: 3 }
];

const pesananFaizNgawi = [
    { jenis: "makanan", nama: "Ayam", jumlah: 1 },
    { jenis: "makanan", nama: "Ayam Puk Puk (Bukan digeprek)", jumlah: 1 },
    { jenis: "makanan", nama: "Ayam Bakar", jumlah: 1 },
    { jenis: "minuman", nama: "Es Teh", jumlah: 1 },
    { jenis: "minuman", nama: "Es Jeruk", jumlah: 1 }
];


function hitungPajak(pesanan){
    total = 0 ;
    pesanan.forEach(e => {
        var cari = Menu[e.jenis].find(j => j.nama == e.nama)
        let subTotal = cari.harga * e.jumlah;

        if (e.jenis == "makanan") {
            subTotal += subTotal * 0.05;
        } else if (e.jenis == "minuman") {
            subTotal += subTotal * 0.03; 
        }

        total += subTotal;
        total += total * 0.15;
    });
    return Math.round(total);
}

console.log(hitungPajak(pesananRehan));
console.log(hitungPajak(pesananAmbaRoni));
console.log(hitungPajak(pesananFaizNgawi));