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

// Task 3: Arrow Function
// Scenario: Employee Bonus Calculation
console.log("********** Employee Bonus Calculation **********");
const calculateBonus = (salary, performanceRating) => {
    let bonusPercentage = performanceRating === "Excellent" ? 0.2 : 
                          performanceRating === "Good" ? 0.1 : 
                          performanceRating === "Average" ? 0.05 : 0;
    let bonus = salary * bonusPercentage;
    return `Bonus: $${bonus}`;
};
console.log(calculateBonus(5000, "Excellent")); // Expected output: "Bonus: $1000"
console.log(calculateBonus(7000, "Good"));      // Expected output: "Bonus: $700"

// Task 4: Parameters and Arguments
// Scenario: Subscription Pricing Model
console.log("********** Subscription Pricing Model **********");
function calculateSubscriptionCost(plan, months, discount = 0) {
    const prices = { "Basic": 10, "Premium": 20, "Enterprise": 50 };
    let cost = (prices[plan] || 0) * months - discount;
    return `Total Cost: $${cost}`;
}
console.log(calculateSubscriptionCost("Basic", 6, 10)); // Expected output: "Total Cost: $50"
console.log(calculateSubscriptionCost("Premium", 12, 0)); // Expected output: "Total Cost: $240"

