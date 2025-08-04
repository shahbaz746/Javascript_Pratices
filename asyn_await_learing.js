// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data fetched successfully");
//         }, 3000);
//     })     
// }
async function getData() {
  let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  let data = await x.json();
      console.log(data)
      return 455
}

async function main(){



console.log("data module")
console.log("lead data")
let data = await getData();
console.log(data);


console.log("process data")
}
main();