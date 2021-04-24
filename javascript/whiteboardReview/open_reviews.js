// First Question: Coverting dates
// 12-8-1992 => yyyy-mm-dd
// What we found online to try to get working (https://stackoverflow.com/questions/23593052/format-javascript-date-as-yyyy-mm-dd)

let oldFormat1 = "12-8-1992"
let oldFormat2 = "Dec 8, 1992"
let newFormat = new Date(oldFormat2).toISOString().slice(0, 10);
console.log(newFormat)


console.log("a" < "b")

let letters = ["z", "c", "D", "a"]
letters.sort()
console.log(letters)

let nums = ["80", 2, "2", 3, 9]
nums.sort((a, b) => {
    return Number(b) - Number(a) 
})
console.log(nums)



// How without sort or changing the orignal array do we build up a sorted array
let unsortedNums = [2, 18, 13, 8, 92, 33, 15, 82]

let sortedArr = [unsortedNums[0]]
for (let i = 1; i < unsortedNums.length; i++){
    let counter = 0;
    while (counter < sortedArr.length){
        if (!(sortedArr[counter] > unsortedNums[i])){
            sortedArr.splice(counter, 0, unsortedNums[i])
            break
        }
        counter++
    }
}

sortedArr.reverse()
console.log(sortedArr)

let testArr = [5, 2, 8, undefined, 1, 5, 8, undefined, 9]
for (let elm of testArr){
    if (elm === undefined) {
        //break // break will end the loop, not all the nested loops
        //continue // continue will start the next cycle of the loop and not keep
        // running the code inside the loop body
    }
    console.log(elm)
}