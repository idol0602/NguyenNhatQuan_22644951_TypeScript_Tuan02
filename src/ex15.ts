// 15. Call multiple async functions sequentially using await.

async function multiplyAfterDelay(x: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x * 2);
    }, 1000);
  });
}

async function processSequential(): Promise<void> {
  const first = await multiplyAfterDelay(5);
  console.log("First =", first);

  const second = await multiplyAfterDelay(10);
  console.log("Second =", second);

  const third = await multiplyAfterDelay(15);
  console.log("Third =", third);

  console.log("Sum =", first + second + third);
}

processSequential();
