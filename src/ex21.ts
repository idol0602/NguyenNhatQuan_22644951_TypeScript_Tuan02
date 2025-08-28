// 21. Use fetch to get data from a public API (e.g.,
// https://jsonplaceholder.typicode.com/todos/1).

async function getTodo(): Promise<void> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Todo:", data);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

getTodo();
