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

// Task 4: Map Method
// Scenario: Price Adjustments
console.log("********** Price Adjustments **********");
const prices = [100, 200, 300];
const discountedPrices = prices.map(price => price * 0.9);
console.log(discountedPrices);

// Task 5: Filter Method
// Scenario: Product Availability
console.log("********** Product Availability **********");
const inventory = [7, 0, 11, 0, 9];
const availableProducts = inventory.filter(quantity => quantity > 0);
console.log(availableProducts);

// Task 6: Reduce Method
// Scenario: Revenue Calculation
console.log("********** Revenue Calculation **********");
const sales = [500, 300, 200, 400];
const totalRevenue = sales.reduce((acc, sale) => acc + sale, 0);
console.log(`Total Revenue: $${totalRevenue}`);

// Task 7: find() Method
// Scenario: Customer Search
console.log("********** Customer Search **********");
const customers = ["Alice", "Bob", "Charlie", "David"];
const foundCustomer = customers.find(customer => customer === "Charlie");
console.log(foundCustomer);

// Task 8: Function Declaration
// Scenario: Tax Calculation
console.log("********** Tax Calculation **********");
function calculateTax(amount, taxRate) {
    const tax = amount * (taxRate / 100);
    console.log(`Tax for $${amount} at ${taxRate}%: $${tax}`);
    return tax;
  }
  calculateTax(1000, 6);

  