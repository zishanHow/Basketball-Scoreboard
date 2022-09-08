
let resultHome = document.getElementById("result-home");
let resultGuest = document.getElementById("result-guest");

// ***  home  ***
let count = 0;

function oneF() {
    count += 1;
    resultHome.textContent = count;
}
function twoF() {
    count += 2;
    resultHome.textContent = count;
}
function threeF() {
    count += 3;
    resultHome.textContent = count;
}


// ***  guest  ***
let gCount = 0;

function gOneF() {
    gCount += 1;
    resultGuest.textContent = gCount;
}
function gTwoF() {
    gCount += 2;
    resultGuest.textContent = gCount;
}
function gThreeF() {
    gCount += 3;
    resultGuest.textContent = gCount;
}

// *** new game function ***

function newGame() {
    count = 0
    gCount = 0
    let removeGame = 0;
    resultHome.textContent = removeGame;
    resultGuest.textContent = removeGame;
}