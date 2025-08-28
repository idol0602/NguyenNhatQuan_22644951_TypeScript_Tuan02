// 28. Write an async function batchProcess() that processes 5 async tasks at once (use Promise.all).

async function asyncTask(id: number): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Task ${id} completed`);
    }, 1000 * id);
  });
}

async function batchProcess(): Promise<void> {
  const tasks = [1, 2, 3, 4, 5].map((id) => asyncTask(id));
  const results = await Promise.all(tasks);
  results.forEach((res) => console.log(res));
}

batchProcess();
