let log = console.log;
const numbers = [11,22,33,44,55];
const nonsort = [22,11,44,33,55];
const names = ["John", "Jane", "Jack", "Jermy", "Julia", "John"]
const people = [
  {id:5, name: 'John'},
  {id:3, name: 'Jane'},
  {id:7, name: 'Jermy'}
]
log("additem", numbers.push(66))
log(numbers)
log("removelastitem", numbers.pop())
log(numbers)
log("removefirstitem", numbers.shift())
log(numbers)
log("addfirstitem", numbers.unshift(11))
log(numbers)

// shift
const [value, ...rest] = numbers
log(value)
// rest 
log(rest) 

// unshift
const newarray = [1, ...numbers]
log(newarray)

// sort
log(nonsort.sort())

log(names.sort())

log(people.sort((a, b) => a.id - b.id))