// Task 1: Variable Declaration
// Scenario: Employee Information

console.log("********** Employee Information **********");
let employeeName = "Jane Smith"; 
console.log("Employee Name: " + employeeName + " - Variable Type: " + typeof(employeeName));  
const employeeID = 1112223333;
console.log("Employee ID: " + employeeID + " - Variable Type: " + typeof(employeeID));
var isActive = true;
console.log("Is Employee Active: " + isActive + " - Variable Type: " + typeof(isActive));

// Task 2: Primitive Data Types
// Scenario: Product Details
console.log("********** Product Details **********");
let productName = "Apple MacBook"; 
console.log("Product Name: " + productName + " - Variable Type: " + typeof(productName));  
const productPrice = 1000;
console.log("Product Price: $" + productPrice + " - Variable Type: " + typeof(employeeID));
var isAvailable = true;
console.log("Is Product Available: " + isAvailable + " - Variable Type: " + typeof(isAvailable));

// Task 3: Number Data Type
// Scenario: Financial Transactions 
console.log("********** Financial Transactions  **********");
let accountBalance = 5000; 
console.log("Initial Account Balance: $" + accountBalance + " - Variable Type: " + typeof(accountBalance));  
// Perform arithmetic operations
accountBalance += 1500;  // Deposit
console.log("After Deposit: $" + accountBalance);
accountBalance -= 2000;  // Withdrawal
console.log("After Withdrawal: $" + accountBalance);
accountBalance *= 1.05;  // Interest (5% increase)
console.log("After Interest: $" + accountBalance);
accountBalance /= 2;  // Split balance in half
console.log("After Split: $" + accountBalance);