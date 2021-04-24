// Say you have a list og numbers and you want 2 arrays
//one with evens 

//x % 2 == 0 -> even numbers
let demoArr = []
for(let i = 0; i > 100; i++){
    demoArr.push(i)
}

let checkEven = (num) => {
    return num % 2 === 0
}

console.log(demoArr.filter(elem => elem % 2 == 0)) //filter takes a call back 

console.log(demoArr.filter(checkEven));
//this is a function that will be used by the filter method

console.log(demoArr.filter((elem) => {
    return elem % 2 ==0
})) //filter takes a call back 

let splitArr = []
for(let z = 1; z <=100; z++){
    if(z % 2 ==0){
        splitArr.push(z)
    } else {
        splitArr.unshift(z)
    }
}
console.log(splitArr)

//Function Review
let sqr = (x) => {
    return x*x
} //{} - block body, you have to explicitly "return" what you want to give back 

let conciseSqr = x => x*x // {}- concise body, implicit return
