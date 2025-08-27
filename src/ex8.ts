// 8. Create a Promise chain: square the number 2, then double it, then add 5.

const chain = function (number: number): Promise<number> {
  return new Promise<number>((resolve) => resolve(number))
    .then((res: number) => res * res)   
    .then((res: number) => res * 2)     
    .then((res: number) => res + 5);    
};

chain(2).then(result => console.log(result)); 
