// Task 1: Function Declaration
// Scenario: Customer Invoice Calculation
console.log("********** Customer Invoice Calculation **********");
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount;
    return `Total Invoice: $${total.toFixed(2)}`;
}
console.log(calculateInvoice(100, 0.08, 5)); // "Total Invoice: $103.00"
console.log(calculateInvoice(500, 0.1, 20)); // "Total Invoice: $530.00"

// Task 2: Function Expression
// Scenario: Employee Hourly Wage Calculation
console.log("********** Employee Hourly Wage Calculation **********");
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
    return `Hourly Wage: $${hourlyWage.toFixed(2)}`;
};
console.log(calculateHourlyWage(52000, 40)); // "Hourly Wage: $25.00"
console.log(calculateHourlyWage(75000, 35)); // "Hourly Wage: $41.21"

// Task 3: Arrow Function
// Scenario:  Customer Loyalty Discount
console.log("**********  Customer Loyalty Discount **********");
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate = years >= 5 ? 0.15 : years >= 3 ? 0.10 : 0.05;
    let discountedPrice = amount - (amount * discountRate);
    return `Discounted Price: $${discountedPrice.toFixed(2)}`;
};
console.log(calculateLoyaltyDiscount(100, 6)); // "Discounted Price: $85.00"
console.log(calculateLoyaltyDiscount(200, 2)); // "Discounted Price: $190.00"

// Task 4: Parameters and Arguments
// Scenario: Product Shipping Cost Calculation
console.log("**********  Product Shipping Cost Calculation **********");
function calculateShippingCost(weight, location, expedited = false) {
    let baseCost = location === "USA" ? 5 + (0.5 * weight) : location === "Canada" ? 10 + (0.7 * weight) : 0;
    let totalCost = expedited ? baseCost + 10 : baseCost;
    return `Shipping Cost: $${totalCost.toFixed(2)}`;
}
console.log(calculateShippingCost(10, "USA", true)); // "Shipping Cost: $20.00"
console.log(calculateShippingCost(5, "Canada", false)); // "Shipping Cost: $13.50"

// Task 5: Returning Values
// Scenario: Business Loan Interest Calculation
console.log("********** Business Loan Interest Calculation **********");
function calculateLoanInterest(principal, rate, years) {
    let interest = principal * rate * years;
    return `Total Interest: $${interest.toFixed(2)}`;
}
console.log(calculateLoanInterest(1000, 0.05, 3)); // "Total Interest: $150.00"
console.log(calculateLoanInterest(5000, 0.07, 5)); // "Total Interest: $1750.00"

// Task 6: Higher-Order Functions
// Scenario: Filtering High-Value Transactions
console.log("********** Filtering High-Value Transactions **********");
let transactions = [500, 1200, 3000, 800, 2200];
function filterHighValueTransactions(transactions, filterFunction) {
    return transactions.filter(filterFunction);
}
console.log(filterHighValueTransactions(transactions, amount => amount > 1000)); // [1200, 3000, 2200]

// Task 7: Closures
// Scenario: Budget Tracker
console.log("********** Budget Tracker **********");
function createBudgetTracker() {
    let balance = 0;
    return function(expense) {
        balance -= expense;
        console.log(`Current Balance: -$${Math.abs(balance)}`);
    };
}
let budget = createBudgetTracker();
budget(300); // "Current Balance: -$300"
budget(200); // "Current Balance: -$500"

// Task 8: Recursion in JavaScript
// Scenario: Business Growth Projection
console.log("********** Business Growth Projection **********");
function calculateGrowth(years, revenue) {
    if (years === 0) return `Projected Revenue: $${revenue.toFixed(2)}`;
    return calculateGrowth(years - 1, revenue * 1.05);
}
console.log(calculateGrowth(8, 1000)); // "Projected Revenue: $1477.46"
console.log(calculateGrowth(5, 5000)); // "Projected Revenue: $6381.41"