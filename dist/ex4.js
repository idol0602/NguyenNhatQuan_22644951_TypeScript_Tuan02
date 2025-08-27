"use strict";
// 4. Use .then() and .catch() to handle a Promise that returns a random number.
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const num = Math.random();
        if (num >= 0) {
            resolve(num);
        }
        else {
            reject(new Error("Failed to generate a number"));
        }
    });
}
getRandomNumber()
    .then((num) => {
    console.log("Random number:", num);
})
    .catch((err) => {
    console.error("Error:", err.message);
});
