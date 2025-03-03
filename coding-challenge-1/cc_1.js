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

// Task 4: String Data Type
// Scenario: Customer Messaging
console.log("********** Customer Messaging  **********");
let customerName = "John Doe";
let welcomeMessage = "Hello, " + customerName + "! Welcome to our platform.";
console.log(welcomeMessage);

// Task 5: Boolean Data Type
// Scenario: Access Control
console.log("********** Access Control  **********");
let isLoggedIn = true; // Change to false to simulate logged-out state
console.log("User Logged In: " + isLoggedIn + " - Variable Type: " + typeof(isLoggedIn));
// Logical operations to check access conditions
let hasAdminRights = false;
let canAccessDashboard = isLoggedIn && hasAdminRights;
console.log("Can Access Admin Dashboard: " + canAccessDashboard);
let canAccessReports = isLoggedIn || hasAdminRights;
console.log("Can Access Reports: " + canAccessReports);
let isRestricted = !isLoggedIn;
console.log("Is Restricted Access: " + isRestricted);