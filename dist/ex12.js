"use strict";
// 12. Write an async function that calls simulateTask(2000) and logs the result.
function simulateTask1(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task completed in ${ms} ms`);
        }, ms);
    });
}
async function runTask() {
    const result = await simulateTask1(2000);
    console.log(result);
}
runTask();
