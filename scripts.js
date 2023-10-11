const salary = 4000;
const lodging = "apartment";
const size = "large";

// Only change the syntax below (not the values or key names)

const expenses = {
  food: 51.7501,
  transport: 10.2,
};

const tax = {
  734: "3%",
  234: "20%",
  913: "12%",
  415: "38%",
  502: "42%",
};

const rent = {
  none: 0,
  "small-room": 200,
  "large-room": 300,
  "small-apartment": 400,
  "large-apartment": 800,
  "small-house": 1200,
  "large-house": 2400,
};

// You can change below however you want

/* 1. Changed the call method from dot notation to brackets. You cannot call number keys with dot notation.
    2. Parse the tax key value into an integer from a string.
*/
const taxAsDecimal = parseInt(tax[913]) / 100;

const startingAfterTax = salary - salary * taxAsDecimal; // salary * taxAsDecimal to get 480, then 480 - 4000 to get startingAfterTax

const type = `${size}-${lodging}`; // Used interpolation to create a new variable to accurately match the key inside of rent object

const balance =
  startingAfterTax - expenses.transport - expenses.food - rent[type]; // Added startingAfterTax and changed expenses.rent.type to just rent[type] (You cannot call it with dot notation)

console.log(balance.toFixed(2));
