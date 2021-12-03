//const names = ["John", "Jane", "Jack", "Jermy", "Julia", "John"]

const nums = [10,-20,30,-40,50];

// filters - positive numbers
const positiveNums = nums.filter((num) => num > 0 )
console.log("positiveNums", positiveNums)

// filters - Negetive numbers
const negetiveNums = nums.filter((num) => num < 0 )
console.log("negetiveNums", negetiveNums)

// filters - chanining
const positivebelow50 = nums.filter((num) => num > 0 ).filter((num) => num < 50)
console.log("positivebelow50", positivebelow50)

const people = [{name : "John Doe"}, {name : "Jane Doe"}];
const peopleName = people.filter(({name}) => name.startsWith('Ja'))
console.log("peopleName", peopleName)

// slice
const sliceNum = nums.slice(1, 4)
console.log("sliceNum", sliceNum)

const sliceLastNum = nums.slice(-1)
console.log("sliceLastNum", sliceLastNum)

