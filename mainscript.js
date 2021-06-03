
"use strict"

let body = document.body;
let lion = document.getElementById("lion");
let slytherin = document.getElementById("snake");
let raven = document.getElementById("raven");
let title1 = document.getElementById("title1");
let title2 = document.getElementById("title2");
let title3 = document.getElementById("title3");

function otherWise() {
    if(window.matchMedia("screen and (min-width: 300px) and (max-width: 800px)")) {
        lion.addEventListener('click',function() {
            body.style.background = "yellow";
            title1.style.visibility = "visible";
            title1.innerHTML = "gryffindor";
            title1.style.color = "black";
            slytherin.style.visibility = "hidden";
            raven.style.visibility = "hidden";
            title2.style.visibility = "hidden";
            title3.style.visibility = "hidden";
        })
        raven.addEventListener('click', function() {
            body.style.background = "blue";
            title3.style.visibility = "visible";
            title3.style.color = "white";
            title3.innerHTML = "ravenclaw";
            slytherin.style.visibility = "hidden";
            lion.style.visibility = "hidden";
            title1.style.visibility = "hidden";
        })
        slytherin.addEventListener('click', function() {
            body.style.background = "green";
            title2.style.visibility = "visible";
            title2.style.color = "white";
            title2.innerHTML = "slytherin";
            raven.style.visibility = "hidden";
            lion.style.visibility = "hidden";
            title1.style.visibility = "hidden";
            title3.style.visibility = "hidden";
        })
    }
}

lion.addEventListener('mousemove', function() {
    body.style.background = "yellow";
    title1.style.visibility = "visible";
    title1.innerHTML = "gryffindor";
    title1.style.color = "black";
    slytherin.style.visibility = "hidden";
    raven.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
})

lion.addEventListener('mouseout', function() {
    body.style.background = "#06181f";
    slytherin.style.visibility = "visible";
    raven.style.visibility = "visible";
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
})

raven.addEventListener("mousemove",function() {
    body.style.background = "blue";
    title3.style.visibility = "visible";
    title3.style.color = "white";
    title3.innerHTML = "ravenclaw";
    slytherin.style.visibility = "hidden";
    lion.style.visibility = "hidden";
    title1.style.visibility = "hidden";
})

raven.addEventListener('mouseout',function() {
    body.style.background = "#06181f";
    slytherin.style.visibility = "visible";
    lion.style.visibility = "visible";
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
})

slytherin.addEventListener('mousemove', function() {
    body.style.background = "green";
    title2.style.visibility = "visible";
    title2.style.color = "white";
    title2.innerHTML = "slytherin";
    raven.style.visibility = "hidden";
    lion.style.visibility = "hidden";
    title1.style.visibility = "hidden";
    title3.style.visibility = "hidden";
})

slytherin.addEventListener('mouseout', function() {
    body.style.background = "#06181f";
    title3.style.visibility = "hidden";
    raven.style.visibility = "visible";
    lion.style.visibility = "visible";
    title1.style.visibility = "hidden";
    title2.style.visibility = "hidden";
    title3.style.visibility = "hidden";
})

otherWise();