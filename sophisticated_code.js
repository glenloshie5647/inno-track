/*
  Filename: sophisticated_code.js
  Content: Complex and elaborate JavaScript code

  This code is a simulation of a restaurant ordering system, involving multiple objects and functions to handle different aspects of the ordering process.
  It includes features such as adding/removing items from the cart, calculating the total price, applying discounts, and generating the final order receipt.
*/

// Objects
const menu = {
  items: [
    { id: 1, name: "Burger", price: 10.99 },
    { id: 2, name: "Pizza", price: 12.99 },
    // ... more menu items
  ],
};

const cart = {
  items: [],
  addItem(item) {
    this.items.push(item);
  },
  removeItem(itemId) {
    this.items = this.items.filter((item) => item.id !== itemId);
  },
};

// Functions
function calculateTotalPrice() {
  let totalPrice = 0;
  cart.items.forEach((item) => {
    totalPrice += item.price;
  });
  return totalPrice;
}

function applyDiscount(discountPercentage, totalPrice) {
  const discountAmount = (discountPercentage / 100) * totalPrice;
  return totalPrice - discountAmount;
}

function generateOrderReceipt() {
  const totalPrice = calculateTotalPrice();
  const discountedPrice = applyDiscount(10, totalPrice);

  let receipt = "Order Receipt\n\n";
  receipt += "Items:\n";
  cart.items.forEach((item) => {
    receipt += `- ${item.name}: $${item.price}\n`;
  });

  receipt += "\n";
  receipt += `Total Price: $${totalPrice}\n`;
  receipt += `Discounted Price: $${discountedPrice}\n`;

  return receipt;
}

// Usage
cart.addItem(menu.items[0]); // Add Burger to the cart
cart.addItem(menu.items[1]); // Add Pizza to the cart
console.log(generateOrderReceipt()); // Generate and print order receipt