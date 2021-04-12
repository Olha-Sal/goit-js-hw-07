"use strict";

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listForAddingItems = document.querySelector(`#ingredients`);

const addListItems = (ingredients) => {
  const listIngredients = ingredients.map(ingredient => {
    const listIngred = document.createElement('li');
    listIngred.textContent = ingredient;
    return listIngred;
  });
  listForAddingItems.append(...listIngredients);
};

addListItems(ingredients);