const numbers = [11,22,33,44,55];
// Destructuring array to get specific value
const [one, two, three, ...rest] = numbers
//console.log("get specific value:", one, two, three, rest);

// copy array, changing the copied value will not mutate the original array 
const copyNumbers = [...numbers]
//console.log("copy array", copyNumbers)

const names = ["John", "Jane", "Jack", "Jermy", "Julia", "John"]

// indexOf 
console.log("indexOf : ", names.indexOf("Jane")) //returns item index 1
console.log("indexOf : ", names.indexOf("John", 1)) // returns the last item index 5
console.log("indexOf : ", names.indexOf("John Doe")) //returns -1 it is not found

//includes
console.log("includes :", names.includes("John")) //returns true

//lastIndexOf
console.log("last Index :", names.lastIndexOf("John"))// returns the last item index 5

// findIndex
console.log("findIndex : ", names.findIndex((name) => name == "Jane" )) // return item index 2

// Find
console.log("find :", names.find((name) => name === 'Jermy')) //returns Jermy
console.log("find :", names.find((name) => name === 'Jane Doe')) //returns undefined


// changing the copied value will mutate the original object due to reference type
const people = [{name : "John Doe"}, {name : "Jane Doe"}];
const copyPeople = [...people];
//console.log(copyPeople)
const findPerson = people.find((p) => p.name === "John Doe") //returns matching object
const findInxPerson = people.findIndex((p) => p.name === "Jane Doe") //returns matching index
console.log(findPerson)
console.log(findInxPerson)

const nums = [10,-20,30,-40,50];

// Some- check for any one item match
console.log("Some", nums.some((num) => num > 10)) // returns true as it found num > 10

//every - checks every item to match
console.log("every", nums.every((num) => num > 0)) // returns false