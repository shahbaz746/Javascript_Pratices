let prom1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let a = Math.random()
        if(a<0.5){
            reject("Promise is rejected")
        }
        else {
            setTimeout(() => {
            console.log("promise is resolved")
            resolve("Shahbaz")
        }, 3000)
    }
    })
})
let prom2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        let a = Math.random()
        if(a<0.5){
            reject("Promise is rejected 2")
        }
        else {
            setTimeout(() => {
            console.log("promise is resolved 2")
            resolve("Shahbaz 2")
        }, 3000)
    }
    })
})



// let p3 = Promise.all([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })
// let p3 = Promise.allSettled([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })
// let p3 = Promise.race([prom1, prom2])
// p3.then((a)=>{
//     console.log(a)
// }).catch((err)=>{
//     console.log(err)
// })
let p3 = Promise.any([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch((err)=>{
    console.log(err)
})