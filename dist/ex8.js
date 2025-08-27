"use strict";
// 8. Create a Promise chain: square the number 2, then double it, then add 5.
const chain = function (number) {
    return new Promise((resolve) => resolve(number))
        .then((res) => res * res)
        .then((res) => res * 2)
        .then((res) => res + 5);
};
chain(2).then(result => console.log(result));
