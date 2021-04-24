// for
// When would you use a for loop? usually when you know the number of times
// you want to do something
for (let i = 0; i <= 20; i += 1){
    console.log(i)
}

let students = ["Justin", "Adam", "Ing"]
// while when would you use this when you write code you want to run until a condition is met
while (students.length > 0){
    console.log(students.shift()) // removes students[0] 
    //console.log(students.pop()) // removes students[students.length - 1]
}

// for in
let person = {
    name: "Justin",
    age: 28,
    eye_color: 'hazel' 
}

let personProps = []
for (let attr in person){
    console.log(attr)
    personProps.push(attr)
}

console.log(personProps)
// for of 
// This is used commonly with arrays of data
students = ["Justin", "Adam", "Ing"]
// good for check through an array and doing something
// not good for changing the underlying array, causes you to skip/miss some of  the elements
for (let student of students){
    console.log(student)
}

// you want to look at an array and do something but not mutate (aka change the array)
students.forEach((student) => {
    console.log(student)
})
// for each