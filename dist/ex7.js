"use strict";
// 7. Use Promise.race() to return whichever Promise resolves first.
function simulateTask2(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done in ${time} ms`);
        }, time);
    });
}
Promise.race([
    simulateTask2(1000),
    simulateTask2(2000),
    simulateTask2(1500)
])
    .then((result) => {
    console.log("First finished:", result);
})
    .catch((err) => {
    console.error("Error:", err.message);
});
