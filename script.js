'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 12,
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelievery: function ({
    starterIndex = 1,
    mainIndex = 2,
    time = '20:00',
    address,
  }) {
    console.log(`order Received! ${this.starterMenu[starterIndex]} and 
    ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`);
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1},${ing2},${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient, otherIngredient);
  },
};
// spread: because on right side of assignment operator
const arr = [1, 2, ...[3, 4, 5]];

// rest : because of left side of assignment operator
const [a, b, c, ...others] = [1, 2, 3, 4, 5, 6, 7];
console.log(a, b, c, others);

const [pizza, , Risotto, ...otherMenu] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, Risotto, otherMenu);

// objects:

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// functions:

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(4, 2, 6);
add(5, 8, 9, 3);

restaurant.orderPizza('mushroom', 'olives', 'spinach', 'onion');
