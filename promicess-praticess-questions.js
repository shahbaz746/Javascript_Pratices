// const checkEven = (num)=>{
//     return new Promise((resolve, reject) => {
//         if (num % 2 === 0) {
//             resolve("Even number");
//             console.log("Promicess is sucessfully resolved")
//         } else {
//             reject("Odd number");
//             console.log("promicess is rejected due to odd num")
//         }
//     })

// }

// checkEven(5)
//   .then(msg => console.log(msg))
//   .catch(err => console.log(err));

const delay = (ms)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise is resolved")
        }, 12000)
    })
}
const delay1= (ms)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise is resolved 1")
        }, 1000)
    })
}
const delay2= (ms)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise is resolved 2")
        }, 2000)
    })
}
delay().then(() => delay1()).then(() => delay2()).then(() => {
  console.log("All steps completed in order");
}).catch(err => console.log(err))