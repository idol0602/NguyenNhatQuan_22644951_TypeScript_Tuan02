"use strict";
// 16. Call multiple async functions in parallel using Promise.all().
async function addAfterDelay(n) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(n + 5);
        }, 1000);
    });
}
async function processParallel() {
    const [one, two, three] = await Promise.all([
        addAfterDelay(2),
        addAfterDelay(4),
        addAfterDelay(6),
    ]);
    console.log("one =", one);
    console.log("two =", two);
    console.log("three =", three);
    console.log("Total =", one + two + three);
}
processParallel();
