// Task 1: If Statements
// Scenario: Customer Discounts
console.log("********** Customer Discounts **********");
let purchaseAmount = 175;
if (purchaseAmount > 100) {
    let discount = 0.2; // 20% discount
    let finalAmount = purchaseAmount - purchaseAmount * discount;
    console.log(`Final Amount After Discount: $${finalAmount}`);
}

// Task 2: For Loop
// Scenario: Sales Report
console.log("********** Sales Report **********");
let sales = [175, 75, 215, 150, 90];
let totalSales = 0;
for (let sale of sales) {
  totalSales += sale;
}
console.log(`Total Sales: $${totalSales}`);

// Task 3: While Loop
// Scenario: Inventory Depletion
console.log("********** Inventory Depletion **********");
let stock = 10;
while (stock > 0) {
  console.log(`Stock remaining: ${stock}`);
  stock--;
}
console.log("Stock Depleted!");

// Task 4: Do...While Loop
// Scenario: Customer Survey
console.log("********** Customer Survey **********");
let responses = 0;
do {
  responses++;
  console.log(`Responses collected: ${responses}`);
} while (responses < 3);

// Task 5: For...In Loop
// Scenario: Employee Information
console.log("********** Employee Information **********");
let employee = {
  name: "Alice",
  position: "Manager",
  salary: 75000
};
for (let key in employee) {
  console.log(`${key}: ${employee[key]}`);
}

// Task 6: For...Of Loop
// Scenario: Product Listings
console.log("********** Product Listings **********");
let products = ["Headphones", "Speaker", "Microphone"];
for (let product of products) {
  console.log(`Product: ${product}`);
}

// Task 7: forEach() Method
// Scenario: Order Processing
console.log("********** Order Processing **********");
let orders = [106, 107, 108];
orders.forEach(order => console.log(`Order ID: ${order}`));

// Task 8: Function Declaration
// Scenario: Tax Calculation
console.log("********** Tax Calculation **********");
function calculateTax(amount, taxRate) {
  return amount * taxRate;
}
let tax = calculateTax(175, 0.15);
console.log(`Calculated Tax: $${tax}`);

// Task 9: Function Expressions
// Scenario: Discount Application
console.log("********** Discount Application **********");
const applyDiscount = function(price, discountPercentage) {
  return price - price * (discountPercentage / 100);
};
let discountedPrice = applyDiscount(175, 10);
console.log(`Discounted Price: $${discountedPrice}`);

// Task 10: Arrow Functions
// Scenario: Loyalty Points
console.log("********** Loyalty Points **********");
const calculatePoints = (purchaseAmount) => Math.floor(purchaseAmount / 10);
let points = calculatePoints(200);
console.log(`Points Earned: ${points}`);