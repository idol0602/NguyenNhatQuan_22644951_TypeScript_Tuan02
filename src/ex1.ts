// 1. Create a Promise that returns the string "Hello Async" after 2 seconds.

function sayHelloAsync(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello Async");
    }, 2000);
  });
}

sayHelloAsync().then((message: string) => console.log(message));