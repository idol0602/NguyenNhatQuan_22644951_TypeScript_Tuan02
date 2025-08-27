"use strict";
// 6. Use Promise.all() to run 3 simulated Promises in parallel and print the result.
const Task = function (time, mess) {
    return new Promise(reslove => {
        setTimeout(() => reslove(mess), time);
    });
};
const Task1 = Task(1000, "Task 1 done");
const Task2 = Task(2000, "Task 2 done");
const Task3 = Task(3000, "Task 3 done");
Promise.all([Task1, Task2, Task3]).then((res) => console.log(res));
