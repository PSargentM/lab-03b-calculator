//governs the AddMachine
const addInputOne = document.getElementById('add-input-one');
const addInputTwo = document.getElementById('add-input-two');
const addButton = document.getElementById('add-button');
const addSum = document.getElementById('sum');

addButton.addEventListener('click', () => {
    const addendOne = Number(addInputOne.value);
    const addendTwo = Number(addInputTwo.value);
    console.log(addendOne + addendTwo);
    addSum.textContent = addendOne + addendTwo;
});

//governs the SubtractMachine
const subInputOne = document.getElementById('sub-input-one');
const subInputTwo = document.getElementById('sub-input-two');
const subButton = document.getElementById('sub-button');
const difference = document.getElementById('difference');

subButton.addEventListener('click', () => {
    const minuend = Number(subInputOne.value);
    const subtrahend = Number(subInputTwo.value);
    console.log(minuend - subtrahend);
    difference.textContent = minuend - subtrahend;
});

//governs the MultiplyMachine
const multInputOne = document.getElementById('mult-input-one');
const multInputTwo = document.getElementById('mult-input-two');
const multButton = document.getElementById('mult-button');
const product = document.getElementById('product')

multButton.addEventListener('click', () => {
    const multiplicand = Number(multInputOne.value);
    const multiplier = Number(multInputTwo.value);
    console.log(multiplicand * multiplier);
    product.textContent = multiplicand * multiplier;
});

//governs the DivideMachine
const divInputOne = document.getElementById('div-input-one');
const divInputTwo = document.getElementById('div-input-two');
const divButton = document.getElementById('div-button');
const quotient = document.getElementById('quotient')

divButton.addEventListener('click', () => {
    const dividend = Number(divInputOne.value);
    const divisor = Number(divInputTwo.value);
    console.log(dividend * divisor);
    quotient.textContent = dividend / divisor;
});