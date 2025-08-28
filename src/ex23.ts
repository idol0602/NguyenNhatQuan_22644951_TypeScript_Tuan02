// 23. Write an async function that fetches a list of todos and filters out those that are not completed.

async function getCompletedTodos(): Promise<any[]> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const todos: any[] = await response.json();
    return todos.filter((todo) => todo.completed);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error:", error.message);
    } else {
      console.error("Unknown error:", error);
    }
    return [];
  }
}

(async () => {
  const completed = await getCompletedTodos();
  console.log("Completed Todos:", completed);
})();
