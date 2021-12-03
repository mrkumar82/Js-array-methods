const nums = [10, 20, 30, 40, 50];
const negetiveNums = [10, -20, 30, -40, 50];
const nestedArray = [[10,20,30], [40,50,60], [70,80,90]];
const nestedArraydeep = [[[[10,20,30]]], [[[40,50,60]]], [[[70,80,90]]]];
const firstArray = [10,20,30];
const secondArray = [40,50,60];
// map array
const multiplybyTen = nums.map((num) => num * 10)
console.log("multiplybyTen", multiplybyTen)
// map & filter
const PositiveMulTen = negetiveNums.filter((num) => num > 0).map((num) => num * 10)
console.log("PositiveMulTen", PositiveMulTen)

// map object
const people = [
{firstname : "John", lastname:"Doe", age : 30, city:"NY"}, 
{firstname : "Jane", lastname:"Doe", age: 25, city: "CL"}
];

const getFullname = people.map((person) => `${person.firstname} ${person.lastname}`);
console.log("getFullname", getFullname)

// convert node list or set and convert to an array - shallow copy
console.log(Array.from(nums));
// buit in map method 
console.log(Array.from(nums, v => v * 10));

// flat method
console.log("nestedArray", nestedArray.flat())
// convert all nested array to single array
console.log("nestedArraydeep", nestedArraydeep.flat(Infinity))


// concat method
console.log("concat", firstArray.concat(secondArray))

// destructuring 
console.log("destructuring", [...firstArray, ...secondArray])