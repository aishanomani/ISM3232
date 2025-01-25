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