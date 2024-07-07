"use strict";
// Assignment # 29
let favFurit = ["Dates", "Lychee", "Banana", "Mango"];
let message = "you really like";
/*for (let i = 0; i < favFurit.length; i++) {
    console.log(message,favFurit[i]);
}*/
if (favFurit.includes("Dates")) {
    console.log(message, favFurit[0]);
}
if (favFurit.includes("Lychee")) {
    console.log(message, favFurit[1]);
}
if (favFurit.includes("Banana")) {
    console.log(message, favFurit[2]);
}
if (favFurit.includes("Mango")) {
    console.log(message, favFurit[3]);
}
if (favFurit.includes("Strawbery")) {
    console.log(message, favFurit[4]);
}
