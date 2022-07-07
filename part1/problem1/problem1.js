function jajanBoba(uang, callback) {
  const hargaBoba = 5000;
  let sisaUang = uang - hargaBoba;
  setTimeout(() => {
    if (uang >= hargaBoba) {
      console.log(
        `kamu jajan boba dengan harga Rp.${hargaBoba}\nsisa uang kamu Rp.${sisaUang}`
      );
    } else {
      console.log(
        `maaf uang kamu belum cukup untuk membeli Boba\nsisa uang kamu sebesar Rp.${uang}`
      );
    }
  }, 5000);
  callback(sisaUang);
}

function jajanSeblak(uang) {
  const hargaSeblak = 8000;
  let sisaUang = uang - hargaSeblak;
  setTimeout(() => {
    if (uang >= hargaSeblak) {
      console.log(
        `kamu jajan boba dengan harga Rp.${hargaSeblak}\nsisa uang kamu Rp.${sisaUang}`
      );
    } else {
      console.log(
        `maaf uang kamu belum cukup untuk membeli Seblak\nsisa uang kamu sebesar Rp.${uang}`
      );
    }
  }, 9000);
}

// jajanSeblak(7000);
jajanBoba(20000, jajanSeblak);

