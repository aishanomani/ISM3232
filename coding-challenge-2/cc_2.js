// Task 1: Working With Arrays
// Scenario: Store Inventory
console.log("********** Store Inventory **********");
let products = ["Laptop", "Mouse", "Keyboard", "Monitor", "Printer"];
products.push("Tablet");
products.pop();
console.log("Updated Product List:", products);

// Task 2: Accessing and Modifying Arrays
// Scenario: Student Scores
console.log("********** Student Scores **********");
let scores = [85, 90, 78, 88, 92];
scores[1] = 95;
let total = scores.reduce((sum, score) => sum + score, 0);
let average = total / scores.length;
console.log("Updated scores:", scores);
console.log("Average score:", average);

// Task 3: Working With Objects
// Scenario: Employee Records
console.log("********** Employee Records **********");
let employee = {
    name: "Jason Borne",
    age: 30,
    department: "Sales",
    isActive: true
};
employee.department = "Marketing";
employee.position = "Manager";
console.log("Updated employee record:", employee);

// Task 4: Array of Objects
// Scenario: Customer Database
console.log("********** Customer Database **********");
let customers = [
    { name: "Johnny Lawrence", email: "jlawrence@gmail.com", purchaseAmount: 250 },
    { name: "Daniel Larusso", email: "dlarusso@gmail.com", purchaseAmount: 150 },
    { name: "Tory Nichols", email: "tnichols@gmail.com", purchaseAmount: 300 }
];
customers.push({ name: "Miguel Diaz", email: "mdiaz@gmail.com", purchaseAmount: 400 });
console.log("Customer List:", customers);

// Task 5: Object Methods
// Scenario: Order Processing System
console.log("********** Order Processing System **********");
let order = {
    orderId: 107,
    customerName: "Johnny Lawrence",
    amount: 500,
    calculateTax: function() {
        return this.amount * 0.10;
    }
};
console.log("Order Details:", order);
console.log("Tax Amount:", order.calculateTax());