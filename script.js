
// Hosted :-var,let,const all variable hosted hoy;
console.log(a);
var a = 20;
/**
 * var a undifind return kore karon hosted hoy
 */
sayHi();
function sayHi(){
    console.log("iam funk");
}
/**
 * Funk fully hosted hoy
 */
// console.log(l);
// let l = "iam let";
/**
 * hosted but insitial korer age access kora jai na, reference error show kore and TDZ
 */



console.log("hi js");
// alert("vedio start hobe 35.7 thake")

/**
 * const user = {
 * name:"ar",
 * age:25
 * };
 * localStorage.setitem("user",JSON.stringify(user));
 * outPut:- const storedUser = JSON.parse(localStorage.getItem("user"));
 * console.log(storedUser.name);
 */

// send data into local stroge;
const user = {
    name:"ar",
    age:20
}
localStorage.setItem("user:",JSON.stringify(user));
// getItem localStroge;
const storedUser = JSON.parse(localStorage.getItem("user:"));
console.log(storedUser.name);

// send data session storage code start now;
const firends = {
    name:"HU",
    age:20,
    hobbie:"Codding"
}
sessionStorage.setItem("frieds:",JSON.stringify(firends));
const storedUser2 = JSON.parse(sessionStorage.getItem("frieds:"));
console.log(storedUser2.age);
console.log(storedUser2.name);
console.log(storedUser2.hobbie);

// Safe error facing code start here;
const mobile = {
    brand:"Samsung",
    price:25000,
    color:"Black",
    condition:"Brand New"
}
// setItem lg stroge;
localStorage.setItem("Mobile:",JSON.stringify(mobile));
// getItem lg stroge;
const data = localStorage.getItem("Mobile:");
if(data){
    const parsIntFomate = JSON.parse(data);
    console.log(parsIntFomate.brand);
    console.log(parsIntFomate.price);
    console.log(parsIntFomate.color);
}else{
    console.log("No data avaible");
}

// Cokie code start here;
document.cookie = "name = Asik expires = " + new Date(2026,2,1).toUTCString()
console.log(document.cookie);
document.cookie = "LastName = Rimon expire = " + new Date(2026,2,0).toUTCString()
console.log(document.cookie);