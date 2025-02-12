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

