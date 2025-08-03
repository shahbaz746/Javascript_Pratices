
//     console.log("This is the callback function after the delay");
// });


const custemForEach = ((arr,callback)=>{
    arr.forEach(item,index => {
         console.log(`Name ${index + 1}: ${item}`);
    });
    callback()