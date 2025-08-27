// 9. Write a Promise that reads an array after 1 second and filters even numbers.

const FilterEvenNumber = function(arr : number[]) : Promise<number[]> {
    return new Promise<number[]> (reslove => {
        setTimeout(() => {
            reslove(arr.filter(item => item % 2 === 0))
        },1000)
    })
}

FilterEvenNumber([1,2,3,4]).then(res => console.log(res))