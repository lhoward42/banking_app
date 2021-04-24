let students = ['Amy', 'Adam', 'Blake', 'Cierce', 'Drew']
for (let student of student){
    console.log(student)
}
let alphabet = 'abcdefeghijklmnopqrstuvwxyz'
for (let letter of alphabet){
    console.log(letter);
}

let person = {
    name: "Justin",
    age: 28
}
for(let entry of Object.entries(person)){
    //console.log(property)
console.log(entry) //A good use of a for in loop
}

for(let[k, v] of Object.entries(person)){
    //console.log(property)
    console.log(`${k}: ${v}`) // A good use a for in loop
}