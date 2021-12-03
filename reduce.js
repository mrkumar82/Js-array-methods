let log = console.log;
const nums = [10, 20, 30, 40, 50];

let temp =0;
for(let i =0; i<nums.length; i++){
  temp += nums[i]
}
console.log("for", temp)

let sum =0;
for(let value of nums){
  sum += value
}
console.log("for of", sum)


// reduce
console.log(nums.reduce((accum, value) => accum+value, 0))

//reduce average
console.log(nums.reduce((accum, value, _, array) => {
return accum+ (value / array.length)
}, 0))


const names = ["John", "Jane", "Jack", "Jermy", "Julia", "John"]

// join
console.log(names.reduce((accum, value, index, array) => {
    return  accum + (index > 0 ? ", ": "") + value 
}, ))
// join
console.log(names.join(','))

// reverse
log("reverse1", nums.reverse())
let rev;
for(let num of nums){
    rev = [...nums]
}
log("reverse2", rev)
// rever array
console.log(nums.reduce((accum, value) => {
    return [...accum,
    value]
}, []))


for(let num of nums.entries()){
  log(num)
}
for(let num of nums.keys()){
  log(num)
}
for(let num of nums.values()){
  log(num)
}

log("test", Object.values(nums).reduce((acc, value) => acc + value ,0))