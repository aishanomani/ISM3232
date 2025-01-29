// Task 1: Product Price Management
// Scenario: Online Store
console.log("********** Online Store **********");
let prices = [9.99, 19.99, 29.99, 39.99, 49.99];
prices.push(59.99);
prices.shift();
console.log("Updated Prices:", prices);

// Task 2: Modifying Customer Orders
// Scenario: Order List
console.log("********** Order List **********");
let orders = [10, 20, 30, 40, 50];
orders[2] += 5;
let totalOrders = orders.reduce((total, quantity) => total + quantity, 0);
console.log("Updated Orders:", orders);
console.log("Total Order Count:", totalOrders);

// Task 3: Employee Performance Tracking
// Scenario: HR System
console.log("********** HR System **********");
const employee = {
    name: "Jingyuan Chen",
    role: "Business Analyst",
    performanceScore: 94,
    isActive: true,
};
employee.performanceScore = 99;
employee.promotionEligible = true;
console.log("Updated Employee Object:", employee);

// Task 4: Customer Feedback Records
// Scenario: Feedback Management
console.log("********** Feedback Management **********");
const feedback = [
    { customerName: "Ishaan Goel", feedbackText: "Love the product! Very high quality.", rating: 5 },
    { customerName: "Ambika Rao", feedbackText: "Quite satisfied with the product but it's a bit smaller than portrayed in the image.", rating: 4 },
    { customerName: "Carlos Rangel", feedbackText: "Delayed delivery was extended by almost a week but I am impressed with the product.", rating: 3 },
];
feedback.push({ customerName: "Satabdee Purkayastha", feedbackText: "Excellent quality! Will definitely order again.", rating: 5 });
console.log("Feedback List:", feedback);
