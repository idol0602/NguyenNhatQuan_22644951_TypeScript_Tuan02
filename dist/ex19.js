"use strict";
// 19. Create an async function fetchUsers(ids: number[]) that calls fetchUser for each ID.
async function fetchUserById(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `User_${id}` });
        }, 1000);
    });
}
async function fetchUsers(ids) {
    const promises = ids.map((id) => fetchUserById(id));
    return Promise.all(promises);
}
(async () => {
    const users = await fetchUsers([1, 2, 3]);
    console.log(users);
})();
