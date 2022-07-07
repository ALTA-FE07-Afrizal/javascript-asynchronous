const shallPassed = 30;
let steps = 0;
let turn = 1;

function generateRandomSteps() {
  // don`t touch it
  return Math.ceil(Math.random() * 10);
}

function generateRendomSeconds() {
  // don`t touch it
  //in milliseconds
  return Math.ceil(Math.random() * 10) * 1000;
}

function snakeAndLaddersGame(stepNow, seconds, callback) {
  setTimeout(() => {
    console.log(
      `step ini membutuhkan ${seconds / 1000} detik untuk menyelesaikanya\n`
    );
    console.log(
      `step ini mendapatkan ${stepNow}\nsehingga langkah nyaa bertambah dari ${steps} menjadi ${(steps +=
        stepNow)}\n`
    );
    turn++;
    callback(steps);
  }, seconds);
}

function finisGame() {
  if (turn >= 5) {
    if (steps >= shallPassed) {
      console.log(
        `Congrations, you have passsed this game!And your total steps is ${steps}`
      );
    } else {
      console.log(
        `Goodbye! you didn't passed this game because step only ${steps}, because minimum step to pass this game is ${shallPassed}`
      );
    }
  }
}

snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds(), finisGame);
snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds(), finisGame);
snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds(), finisGame);
snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds(), finisGame);
snakeAndLaddersGame(generateRandomSteps(), generateRendomSeconds(), finisGame);
