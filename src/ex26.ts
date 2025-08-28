// 26. Use async/await with setTimeout to simulate a 5-second wait.

async function waitFiveSeconds(): Promise<void> {
  await new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });
  console.log("Waited 5 seconds!");
}

(async () => {
  await waitFiveSeconds();
})();
