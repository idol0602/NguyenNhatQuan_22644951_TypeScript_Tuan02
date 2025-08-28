"use strict";
// 29. Write an async function queueProcess() that processes tasks sequentially in a queue.
async function mockTask(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} done`);
        }, 1000);
    });
}
async function queueProcess() {
    const tasks = [1, 2, 3, 4, 5];
    for (const id of tasks) {
        const result = await mockTask(id);
        console.log(result);
    }
}
queueProcess();
