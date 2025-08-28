// 25. Create a function downloadFile that simulates downloading a file in 3 seconds and logs when done.

async function downloadFile(filename: string): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Download completed: ${filename}`);
      resolve();
    }, 3000);
  });
}

(async () => {
  await downloadFile("example.pdf");
})();
