// Filter Elements in Array

const number = [1, 2, 3, 4, 5];
let even = number.filter(function (value) {
  return value % 2 == 0;
});
let odd = number.filter(function (value) {
  return value % 2 == 1;
});
console.log("Even Numbers are : ", even);
console.log("odd Numbers are : ", odd);

// Filter Elements in Array Objects

const cart_item = [
  { id: 1, itemName: "iphone", cost: "30000" },
  { id: 1, itemName: "microsoft mobile", cost: "6000" },
  { id: 1, itemName: "android mobile", cost: "10000" },
];
let budgetMobile = cart_item.filter(function (value) {
  return value.cost <= 10000;
});
// Finding Array object
let budgetMobileFind = cart_item.find(function (value) {
  return value.cost > 10000;
});
// FindIndex of Array object
let budgetMobileFindIndex = cart_item.findIndex(function (value) {
  return value.cost < 10000;
});
console.log("Affortable Price Mobiles are : ", budgetMobile);
console.log("Find Affortable Mobiles are : ", budgetMobileFind);
console.log("Find Affortable Mobiles are : ", budgetMobileFindIndex);
