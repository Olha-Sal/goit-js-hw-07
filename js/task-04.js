"use strict";

const counter = {
  value: 0,
  increment() {
    console.log('increment ->', this);
    this.value += 1;
  },
  decrement() {
    console.log('increment ->', this);
    this.value -= 1;
  }
};

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueEl);

decrementBtn.addEventListener('click', function () {
  console.log('Уменьшить значение');

  counter.decrement();
  console.log(counter);
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
  console.log('Увеличить значение');
  
  counter.increment();
  console.log(counter);
  valueEl.textContent = counter.value;
});