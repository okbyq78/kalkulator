'use strict';

const numberButtons = document.querySelectorAll('.number');
const symbolButtons = document.querySelectorAll('.symbol');
const dotButton = document.querySelector('.dot');
const equalsButton = document.querySelector('.equals');

const resultDiv = document.querySelector('.result');
const lastResultDiv = document.querySelector('.lastResult');

let lastSymbol;

const checkResult = () => {
  if (resultDiv.textContent === '') {
    resultDiv.textContent = '0';
  }
};

let lastResult = undefined;

//przyciski cyfry
numberButtons.forEach((button) => {
  let btnTxt = button.textContent;

  button.addEventListener('click', () => {
    if (resultDiv.textContent == '0') {
      resultDiv.textContent = btnTxt;
    } else {
      resultDiv.textContent += btnTxt;
    }

    checkResult();
  });
});

//przyciski symbole
symbolButtons.forEach((button) => {
  let btnTxt = button.textContent;

  button.addEventListener('click', () => {
    if (lastResult === undefined) {
      lastResult = parseFloat(resultDiv.textContent);
      lastResultDiv.textContent = lastResult;
    } else {
      if (lastSymbol === '+') {
        lastResult = lastResult + parseFloat(resultDiv.textContent);
      } else if (lastSymbol === '-') {
        lastResult = lastResult - parseFloat(resultDiv.textContent);
      } else if (lastSymbol === '*') {
        lastResult = lastResult * parseFloat(resultDiv.textContent);
      } else {
        lastResult = lastResult / parseFloat(resultDiv.textContent);
      }

      lastResultDiv.textContent = lastResult;
    }

    resultDiv.textContent = '0';
    lastSymbol = btnTxt;
  });
});

//przycisk przecinek
dotButton.addEventListener('click', () => {
  if (resultDiv.textContent !== '0') {
    resultDiv.textContent += '.';
  }
});

//przycisk '='
equalsButton.addEventListener('click', () => {
  if (lastResult === undefined) {
    lastResult = parseFloat(resultDiv.textContent);
    lastResultDiv.textContent = lastResult;
  } else {
    if (lastSymbol === '+') {
      lastResult = lastResult + parseFloat(resultDiv.textContent);
    } else if (lastSymbol === '-') {
      lastResult = lastResult - parseFloat(resultDiv.textContent);
    } else if (lastSymbol === '*') {
      lastResult = lastResult * parseFloat(resultDiv.textContent);
    } else {
      lastResult = lastResult / parseFloat(resultDiv.textContent);
    }
  }

  resultDiv.textContent = lastResult;
  lastResult = 0;
  lastResultDiv.textContent = '0';
});
