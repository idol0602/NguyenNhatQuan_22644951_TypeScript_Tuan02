// 4. Use .then() and .catch() to handle a Promise that returns a random number.

function getRandomNumber(): Promise<number> {
  return new Promise((resolve, reject) => {
    const num = Math.random();

    if (num >= 0) {
      resolve(num);
    } else {
      reject(new Error("Failed to generate a number"));
    }
  });
}

getRandomNumber()
  .then((num: number) => {
    console.log("Random number:", num);
  })
  .catch((err: Error) => {
    console.error("Error:", err.message);
  });
