// array iterators
const numbers = [11 ,22,33,44,55];

// Not to use for iteration
for(let index = 0; index < numbers.length; index++){
  //console.log(numbers[index])
}

// good to use
for(let index in numbers){
  // console.log(numbers[index])
}

// good to use
for(let value of numbers){
  // if(value > 22){
  //   break; //break can be used in for of 
  // }
  // console.log(value)
}

numbers.forEach((value, index, numbers) => {
  // break cant be used in forEach
  // console.log(value, index, numbers)
})

function getdata(data){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("success", data)
      resolve("Seccess", data)
    }, 1000)
  })
}

(async function(){
  // foreach is not compatable with async await
const num = [1, 2,3,4,5]
num.forEach(async(value, key) => {
  await getdata(value)
})
})()

// (async function(){
  // Async await is working as expected in for of
//   const data = [1, 2,3,4,5]
//   for(let value of data){
//     await getdata(value)
//   }
// })()
