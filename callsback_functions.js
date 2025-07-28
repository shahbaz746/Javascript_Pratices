console.log("i am shahbaz");
console.log("i am shahbaz 2");


setTimeout(() => {
   console.log("i am shahbaz 0"); 
}, 3000);


const callback = (arg)=>{
    console.log(arg)
}
function loadScript = (src, callback) => {
    document.createElement("script");
    sc.src = src;
    sc.onlode = callback("Shahbaz")
    document.head.append.(sc);

}
loadScript()