// no 10 
function hitungKembalian(totalPembayaran, totalBelanja) {
    let kembalian = totalPembayaran - totalBelanja;
    const pecahanUang = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    let hasilKembalian = {};
    for (let pecahan of pecahanUang) {
      let jumlah = Math.floor(kembalian / pecahan);
      if (jumlah !== 0) {
        hasilKembalian[pecahan] = jumlah;
        kembalian -= jumlah * pecahan;
      }
    }
    
    return hasilKembalian;
  }
  console.log("soal no 10");
  console.log(hitungKembalian(10000, 7500));
  console.log(hitungKembalian(5000, 1100));
  console.log(hitungKembalian(10000, 7500));
  console.log(hitungKembalian(178000, 90500));