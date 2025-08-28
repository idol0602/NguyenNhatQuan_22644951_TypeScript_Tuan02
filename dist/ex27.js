"use strict";
// 27. Write a function fetchWithRetry(url, retries) that retries up to retries times if the API call fails.
async function fetchWithRetry(url, retries) {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return await response.json();
        }
        catch (error) {
            console.error(`Attempt ${attempt} failed`);
            if (attempt === retries) {
                throw new Error(`Failed after ${retries} attempts`);
            }
        }
    }
}
(async () => {
    try {
        const data = await fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
        console.log("Data:", data);
    }
    catch (err) {
        if (err instanceof Error) {
            console.error("Error:", err.message);
        }
        else {
            console.error("Unknown error:", err);
        }
    }
})();
