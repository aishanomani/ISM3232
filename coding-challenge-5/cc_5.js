// Task 1: Object Properties
// Scenario: Customer Profile
console.log("********** Customer Profile **********");
const customer = { name: "John Doe", age: 35, email: "john.doe@email.com" };
console.log(`Name: ${customer.name}`);
console.log(`Age: ${customer.age}`);
console.log(`Email: ${customer.email}`);

// Task 2: Object Methods
// Scenario: Order Details
console.log("********** Order Details **********");
const order = {
    orderId: 12345,
    totalAmount: 150,
    status: "Processing",
    displayOrder() {
      console.log(`Order ID: ${this.orderId}, Total Amount: $${this.totalAmount}, Status: ${this.status}`);
    }
  };
  order.displayOrder();

// Task 3: Array Manipulation (push, pop, shift, unshift)
// Scenario: Shopping Cart
console.log("********** Shopping Cart **********");
let cartItems = ["PS5 Console", "PS5 Controller", "Microphone"];
cartItems.push("Camera");
cartItems.pop();
cartItems.unshift("Speaker");
cartItems.shift();
console.log(cartItems);

