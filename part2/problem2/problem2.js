console.log("generating random color...");
console.log("loading starts..");

const getRandomColors = new Promise((reject, resolve) => {
  const listColors = ["green", "yellow", "blue", "orange", "red"];

  setTimeout(() => {
    const randomNumber = Math.floor(Math.random() * 8);
    if (randomNumber > 4) {
      reject("Failed to get random color, please try again");
    }
    resolve("The color we get is a " + listColors[randomNumber]);
    getRandomColors
      .then((value) => console.log(value))
      .catch((err) => console.log(err))
      .finally(() => console.log("Loading end..."));
  }, 3000);
});
