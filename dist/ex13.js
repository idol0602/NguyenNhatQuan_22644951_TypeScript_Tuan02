"use strict";
// 13. Handle errors using try/catch with async/await.
function simulateTask3(ms, fail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (fail) {
                reject(new Error(`Task failed after ${ms} ms`));
            }
            else {
                resolve(`Task completed in ${ms} ms`);
            }
        }, ms);
    });
}
async function runTask3() {
    try {
        const result = await simulateTask3(2000, true);
        console.log(result);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error("Error:", error.message);
        }
        else {
            console.error("Unknown error:", error);
        }
    }
}
runTask3();
