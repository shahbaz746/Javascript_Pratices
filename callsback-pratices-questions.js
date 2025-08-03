function getUserName(name,callback){
console.log(`hello,${name}`)
callback();
}
getUserName("Shahbaz",function(){
    console.log("This is callback function")
});

function processArry (arr,callback)=>{
    arr.forEach(element => {
        console.log(element)
    });
    callback(arr);
};
const number = [1,2,3,4,5];
processArry(number,function(item){
    console.log("This is callback function with array", item);
});

const processArry = (arr, callback) => {
  arr.forEach(element => {
    console.log(element);
  });
  callback(arr);
};

const number = [1, 2, 3, 4, 5];

processArry(number, function(item) {
  console.log("This is callback function with array", item);
});

const delayMessege = ((message,delay,callback)=>{
    setTimeout(()=>{
        console.log(message);
        callback();
    },delay);

})
delayMessege("Hello, this is a delayed message", 2000, function() {
    console.log("This is the callback function after the delay");
});


const custemForEach = (arr,callback)=>{
    arr.forEach((item,index) => {
         console.log(`Name ${index + 1}: ${item}`);
    });
    callback()

}
const Sname =  ["Shahbaz", "Ali", "Ahmed", "Sara", "Fatima"];
custemForEach(Sname,function(){

console.log("Call back is called")
})