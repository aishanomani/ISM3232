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

