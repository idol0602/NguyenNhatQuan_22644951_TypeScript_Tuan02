"use strict";
// 11. Convert Exercise 1 into async/await.
async function sayHelloAsync2() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return "Hello Async";
}
(async () => {
    const message = await sayHelloAsync2();
    console.log(message);
})();
