//Objects

/*
syntax:
    {
        k1: v1, 
        k2: k2
    }

keys can be in "" but dont have to be if that are valid var names, i.e. they dont start with a "number ot have invalid chars"

*/

let obj1 = {
    name: "Justin"
}

let obj2 = {
    "name": "Amit"
}
// There are two ways to get things out of objects "Dot" notation and 
//"square breacket" notation

console.log(obj1.name)
console.log(obj1["name"])

let car = {
    make: "Jeep",
    model: "Wrangler",
    year: 2020,
    miles: 10_000,
    owners: ["amy", "josh"]
}
console.log(car.miles);
console.log(car["miles"]);
console.log(car.owners[1]); //obj can hold more than just primative types 

let person = {
    fName: "Laurice",
    lName: "Howard",
    fullName: function(){
        return `${this.fName} ${this.lName}`
    },
    greet: function(greetWord){
        return `${greetWord}, ${this.fName}`
    }
}
console.log(person.fullName());
console.log(person.fName);
console.log(person.greet("Hello"));

//This demo shows we can add new keys through assignment
let builderObj = {} //An empty odj
console.log(builderObj);
builderObj.name = "Laurice"
builderObj["age"] = 28
builderObj.greet = function(greetWord){
    return `${greetWord}, ${this.name}`
}
console.log(builderObj);
console.log(builderObj.greet("Hello"));


//A Look ahead STACKS and QUEUES
//Stacks are LIFO (last in first out)
//Queues are FIFO (first in first out)

//A Look ahead at "Classes", special type of way to build obj
class Dog {
    constructor(breed, age){
        this.breed = breed
        this.age = age
    }

bark = function(){
    return 'The ' + this.breed + " Barks!"
    }
}

let fido = new Dog("lab", 25)
let dogs = [new Dog("lab", 25), new Dog("corgi", 25)]
console.log(fido.breed);
dogs.forEach(dog => console.log(dog.bark()))
