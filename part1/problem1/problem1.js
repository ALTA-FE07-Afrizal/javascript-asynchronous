function jajanBoba(uang, callback) {
  const hargaBoba = 5000;
  let sisaUang = "";
  setTimeout(() => {
    if (uang >= hargaBoba) {
      sisaUang = uang - hargaBoba;
      console.log(
        `kamu jajan boba dengan harga Rp.${hargaBoba}\nsisa uang kamu Rp.${sisaUang}`
      );
    } else {
      console.log(
        `maaf uang kamu belum cukup untuk membeli Boba\nsisa uang kamu sebesar Rp.${uang}`
      );
    }
  }, 1000);
  callback(sisaUang);
}

function jajanSeblak(uang) {
  const hargaSeblak = 8000;
  let sisaUang = "";
  setTimeout(() => {
    if (uang >= hargaSeblak) {
      sisaUang = uang - hargaSeblak;
      console.log(
        `kamu jajan boba dengan harga Rp.${hargaSeblak}\nsisa uang kamu Rp.${sisaUang}`
      );
    }
  }, 3000);
}

// jajanSeblak(10000);

jajanBoba(20000, jajanSeblak);
