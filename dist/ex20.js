"use strict";
// 20. Add a timeout: if the API call takes more than 2 seconds, throw an error.
async function fetchUserWithTimeout(id) {
    const apiCall = new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User_${id}` });
        }, 3000);
    });
    const timeout = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("API call timed out after 2 seconds"));
        }, 2000);
    });
    return Promise.race([apiCall, timeout]);
}
(async () => {
    try {
        const user = await fetchUserWithTimeout(1);
        console.log(user);
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
