// Task 1: If Statements
// Scenario: Customer Discounts
console.log("********** Customer Discounts **********");
let purchaseAmount = 175;
if (purchaseAmount > 100) {
    let discount = 0.2; // 20% discount
    let finalAmount = purchaseAmount - purchaseAmount * discount;
    console.log(`Final Amount After Discount: $${finalAmount}`);
}