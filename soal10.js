function hitungKembalian(totalPembayaran, totalBelanja) {
    var kembalian = totalPembayaran - totalBelanja;
    
    if (kembalian < 0) {
        console.log("Maaf, uang pembayaran tidak mencukupi.");
        return;
    }

    var pecahanUang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    var hasilKembalian = {};

    for (var i = 0; i < pecahanUang.length; i++) {
        var jumlahPecahan = Math.floor(kembalian / pecahanUang[i]);

        if (jumlahPecahan > 0) {
            hasilKembalian[pecahanUang[i]] = jumlahPecahan;
            kembalian = kembalian % pecahanUang[i];
        }
    }

    console.log("Kembalian:");
    for (var pecahan in hasilKembalian) {
        console.log(`${hasilKembalian[pecahan]} lembar ${pecahan}`);
    }
}

// Contoh penggunaan
hitungKembalian(10000, 7500);
