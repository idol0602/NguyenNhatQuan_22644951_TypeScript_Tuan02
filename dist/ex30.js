"use strict";
async function fakeApi(url, shouldFail = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldFail) {
                reject(`Failed to fetch ${url}`);
            }
            else {
                resolve(`Success: ${url}`);
            }
        }, Math.random() * 2000);
    });
}
async function callMultipleApis() {
    const apis = [
        fakeApi("https://api.example.com/data1"),
        fakeApi("https://api.example.com/data2", true),
        fakeApi("https://api.example.com/data3"),
    ];
    const results = await Promise.allSettled(apis);
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`API ${index + 1} Success →`, result.value);
        }
        else {
            console.log(`API ${index + 1} Error →`, result.reason);
        }
    });
}
callMultipleApis();
