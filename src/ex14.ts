// 14. Write an async function that takes a number, waits 1 second, and returns the number × 3.

async function tripleAfter1s(num: number): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num * 3);
    }, 1000);
  });
}

(async () => {
  const result = await tripleAfter1s(5);
  console.log(result);
})();
