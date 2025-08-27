// 11. Convert Exercise 1 into async/await.

async function sayHelloAsync2(): Promise<string> {
  await new Promise<void>((resolve) => setTimeout(resolve, 2000));
  return "Hello Async";
}

(async () => {
  const message = await sayHelloAsync2();
  console.log(message);
})();
