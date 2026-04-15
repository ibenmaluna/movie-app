"use strict";
console.log("Klik-tæller starter...");

const countDisplay = document.querySelector("#counter");
const clickButton = document.querySelector("#click-button");
const resetButton = document.querySelector("#reset-button");

console.log(countDisplay);
console.log(clickButton);
console.log(resetButton);

let count = 0;

clickButton.addEventListener("click", function () {
  count = count + 1;
  countDisplay.textContent = count;


  if (count > 10) {
    countDisplay.style.color = "lightgreen";
  }

   if (count === 11) {
    alert("Tillykke! Du nåede mit lykketal");
  }
});

resetButton.addEventListener("click", function () {
  count = 0;
  countDisplay.textContent = count;
});


const minusButton = document.querySelector("#minus-btn");

minusButton.addEventListener("click", function () {
  count = count - 1;
  countDisplay.textContent = count;
});

