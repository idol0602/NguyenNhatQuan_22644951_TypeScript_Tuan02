// 11. Convert Exercise 1 into async/await.

// Hàm trả về Promise<string>
function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function sayHelloAsync(): Promise<string> {
  await delay(2000); // chờ 2 giây
  return "Hello Async";
}

// Dùng async/await
(async () => {
  const message = await sayHelloAsync();
  console.log(message); // "Hello Async"
})();
