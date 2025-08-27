// 5. Create a function simulateTask(time) that returns a Promise resolving with "Task done" after time ms.

function simulateTask(time : number): Promise<string> {
    return new Promise(reslove => {
        setTimeout(()=> reslove("Task done"),time)
    })
}

simulateTask(3000).then(res => console.log(res))