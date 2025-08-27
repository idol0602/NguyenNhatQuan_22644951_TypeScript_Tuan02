// 10. Use .finally() to log "Done" when a Promise finishes (success or failure).

function randomTask(): Promise<string> {
  return new Promise((resolve, reject) => {
    const num = Math.random();
    setTimeout(() => {
      if (num > 0.5) {
        resolve("Success!");
      } else {
        reject(new Error("Failure!"));
      }
    }, 1000);
  });
}

randomTask()
  .then((result: string) => {
    console.log("Result:", result);
  })
  .catch((err: Error) => {
    console.error("Error:", err.message);
  })
  .finally(() => {
    console.log("Done"); 
  });
