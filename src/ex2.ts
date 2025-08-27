// 2. Write a function that returns a Promise resolving with the number 10 after 1 second.

function printNumber() : Promise<number> {
    return new Promise(reslove => {
        setTimeout(()=> reslove(10), 1000)
    })
}

printNumber().then(res => console.log(res))