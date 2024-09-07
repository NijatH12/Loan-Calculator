"use strict";
let amountText = document.querySelector(".amountText");
let amountInput = document.querySelector(".amountInput");
let durationText = document.querySelector(".durationText");
let durationInput = document.querySelector(".durationInput");
let percentageText = document.querySelector(".percentageText");
let percentageInput = document.querySelector(".percentageInput");
let resultText = document.querySelector(".resultText");

amountText.textContent = amountInput.value;
amountInput.addEventListener("input", (event) => {
  amountText.textContent = event.target.value;
  resultText.innerHTML = parseInt(
    (Number(amountText.textContent) +
      (Number(amountText.textContent) * Number(percentageText.textContent)) /
        100) /
      Number(durationText.textContent)
  );
});

durationText.textContent = durationInput.value;
durationInput.addEventListener("input", (event) => {
  durationText.textContent = event.target.value;
  resultText.innerHTML = parseInt(
    (Number(amountText.textContent) +
      (Number(amountText.textContent) * Number(percentageText.textContent)) /
        100) /
      Number(durationText.textContent)
  );
});

percentageText.textContent = percentageInput.value;
percentageInput.addEventListener("input", (event) => {
  percentageText.textContent = event.target.value;
  resultText.innerHTML = parseInt(
    (Number(amountText.textContent) +
      (Number(amountText.textContent) * Number(percentageText.textContent)) /
        100) /
      Number(durationText.textContent)
  );
});
