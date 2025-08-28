// 17. Use for await...of to iterate over an array of Promises.

async function squareAfterDelay(x: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(x * x), 1000);
  });
}

async function iteratePromises(): Promise<void> {
  const tasks = [squareAfterDelay(2), squareAfterDelay(3), squareAfterDelay(4)];

  for await (const value of tasks) {
    console.log("Result:", value);
  }
}

iteratePromises();
