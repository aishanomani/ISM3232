// Task 1: Function Declaration
// Scenario: Business Profit Calculation
console.log("********** Business Profit Calculation **********");
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    return `Total Profit: $${profit}`;
}
console.log(calculateProfit(20, 30, 100)); // Expected output: "Total Profit: $1000"
console.log(calculateProfit(50, 70, 200)); // Expected output: "Total Profit: $4000"

// Task 2: Function Expression
// Scenario: Sales Tax Computation
console.log("********** Sales Tax Computation **********");
const calculateSalesTax = function(amount, taxRate) {
    let tax = amount * taxRate;
    return `Sales Tax: $${tax}`;
};
console.log(calculateSalesTax(100, 0.07)); // Expected output: "Sales Tax: $7"
console.log(calculateSalesTax(500, 0.1));  // Expected output: "Sales Tax: $50"

