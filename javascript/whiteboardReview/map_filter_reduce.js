let icecreamTypes = [
    {
        name: "Cookies and Cream",
        rating: 0,
        ing: ["sugar", "cream", "cookies", "vanilla"]
    }, {
        name: "Butter pecan",
        rating: 0,
        ing: ["sugar", "cream", "pecan", "vanilla"]
    }, {
        name: "Rocky Road",
        rating: 0,
        ing: ["sugar", "cream", "cocoa", "vanilla", "pecan", "marshmallows"]
    }, {
        name: "Cookie dough",
        rating: 0,
        ing: ["sugar", "cream", "cookie dough", "chocolate", "vanilla"]
    }
]

// map
// good for when we need a new array back built up by a callback function return 
let rest = icecreamTypes.map(type => {
    console.log(type)
    return type.name
})

console.log(rest)
// filter
let filteredRest = icecreamTypes.filter(type => type.ing.includes("pecan"))
console.log(filteredRest)

// reduce takes an array and create one thing from it.
let allIng = icecreamTypes.reduce((acc, cur) => {
    // filter the current ing list, give me a list of unique ing
    let toAdd = cur.ing.filter(
        ing => !(acc.includes(ing)
        ));
    // make a new list made from the 2 lists 
    return [...acc, ...toAdd]

}, [])
console.log(allIng)
// foreach

function reduceIng(acc, cur) {
    let toAdd = cur.ing.filter(ing => !(acc.includes(ing)));
    return [...acc, ...toAdd]
}
