// For .. in Loop
/*
legend:
    keyword = 'for'
    var = sometemp word you use to refer to the current item
    iterable = some collection you want to go through ex... Array or Object or String
<keyword> (<var> in <iterable>){
    //Do something
}
*/
let person = {
    name: "Justin", 
    age: 28
}
//A look ahead
//console.log(person.name);
//console.log(person["name"]);

for(let property in person){
    console.log(property);
    console.log(person[property]); //A good use of a for in loop
}

let randomNums = [2, 9, 30, 32, 19, 53]
for(let rand in randomNums){
    console.log(rand);
if (rand % 2 === 0)
    console.log(randomNums[rand]);
}

let fullName = "JustinAhmann"
for (let letterID in fullName){
    console.log(letterID)
    console.log(fullName[letterId])
}
