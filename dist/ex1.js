"use strict";
// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.
function sayHelloAsync() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello Async");
        }, 2000);
    });
}
sayHelloAsync().then((message) => console.log(message));
