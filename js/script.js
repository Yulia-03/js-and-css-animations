"use strict";

//Henter DOM elementer og tildeler dem passende variabler 
const getLionBtn = document.getElementById("lion");
const getDogBtn = document.getElementById("dog");
const getElelephantBtn = document.getElementById("elephant");
const getMonkeyBtn = document.getElementById("monkey"); 

//Opraver et lyd objekt og tildeler det en source (sti) som refererer til den specifikke lyd fil i mappen ''sound''
const soundLion = new Audio ();
soundLion.src = "../sound/lion.wav"; 
const soundDog = new Audio ();
soundDog.src = "../sound/dog.wav"; 
const soundElephant = new Audio ();
soundElephant.src = "../sound/elephant.wav"; 
const soundMonkey = new Audio ();
soundMonkey.src = "../sound/monkey.wav"; 

if(getLionBtn){
    getLionBtn.addEventListener("click", () => {
        soundLion.play(); 
});
}

if(getDogBtn){
    getDogBtn.addEventListener("click", () => {
        soundDog.play(); 
});
}

if(getElelephantBtn){
    getElelephantBtn.addEventListener("click", () => {
        soundElephant.play(); 
});
}

if(getMonkeyBtn){
    getMonkeyBtn.addEventListener("click", () => {
        soundMonkey.play(); 
});
} 

//Hentrer DOM elementer og tildeler dem passende variabler til transformations knapperne
const getSkewBtn = document.getElementById("skew");
const getRotate = document.getElementById("rotate");
const getFlipBtn = document.getElementById("flip");
const getScaleBtn = document.getElementById("scale");

if(getSkewBtn) {
    const getImage = document.querySelector("#animal img");
    getSkewBtn.addEventListener("click", () => {
        getImage.classList.add("anim-skew")
    });
} 

if(getRotate) {
    const getImage = document.querySelector("#animal img");
    getRotate.addEventListener("click", () => {
        getImage.classList.add("anim-rotate")
    });
}

if(getFlipBtn) {
    const getImage = document.querySelector("#animal img");
    getFlipBtn.addEventListener("click", () => {
        getImage.classList.add("anim-flip")
    });
}
    
if(getScaleBtn) {
    const getImage = document.querySelector("#animal img");
    getScaleBtn.addEventListener("click", () => {
        getImage.classList.add("anim-scale")
    });
}
