
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

// send data session storage code start now;
const firends = {
    name:"HU",
    age:20,
    hobbie:"Codding"
}
sessionStorage.setItem("frieds:",JSON.stringify(firends));