
"use strict";

const body = document.body;
let lion = document.getElementById("lion");
let snake = document.getElementById("snake");
let raven = document.getElementById("raven");
let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
let title3 = document.getElementById("title3");

function returnBg() {
    body.style.background = "#06181f";
}

lion.addEventListener('mousemove', () => {
    body.style.background = "red";
    title1.style.visibility = "visible";
    title1.style.color = "yellow";
})

lion.addEventListener('mouseout', () => {
    title1.style.visibility = "hidden";
    returnBg();
})

snake.addEventListener('mousemove', () => {
    body.style.background = "green";
    title2.style.visibility = "visible";
    title2.style.color = "white";
})

snake.addEventListener('mouseout', () => {
    returnBg();
    title2.style.visibility = "hidden";
})

raven.addEventListener("mousemove", () => {
    body.style.background = "blue";
    title3.style.visibility = "visible";
    title3.style.color = "white";
})

raven.addEventListener('mouseout', () => {
    returnBg();
    title3.style.visibility = "hidden";
})
