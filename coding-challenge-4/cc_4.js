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