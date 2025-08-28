// 22. Call the API multiple times and log the results.

async function getTodoById(id: number): Promise<any> {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

async function getMultipleTodos(): Promise<void> {
  try {
    const ids = [1, 2, 3, 4, 5];
    const promises = ids.map((id) => getTodoById(id));
    const todos = await Promise.all(promises);

    todos.forEach((todo) => {
      console.log("Todo:", todo);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
  }
}

getMultipleTodos();
