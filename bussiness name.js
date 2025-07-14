/* 
adjective
crazy
amazing
fire


shop name
engine
foods
garments


another word 
hub
limited
bross
*/



let random = Math.random();
let adjective1 = "crazy";
let adjective2 = "fire";
let adjective3 = "amazing";
let shopName1 = "engines";
let shopName2 = "foods";
let shopName3 = "engine";
let anotherWord1 = "hub";
let anotherWord2 = "limited";
let anotherWord3 = "bross";
if (random < 0.33) {
    console.log(adjective1 + " " + shopName1 + " " + anotherWord1);
}
else if (random < 0.66) {
    console.log(adjective2 + " " + shopName2 + " " + anotherWord2);
}
else {
    console.log(adjective3 + " " + shopName3 + " " + anotherWord3);
}