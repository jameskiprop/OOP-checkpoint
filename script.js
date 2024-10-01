// Product class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ShoppingCartItem class
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  // calculating the total price of the item
  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// ShoppingCart class
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  //getting the total of items inside the cart (Method)
  getTotalItems() {
    return this.items.length;
  }

  //  adding items to the cart (Method)
  addItem(product, quantity) {
    const item = new ShoppingCartItem(product, quantity);
    this.items.push(item);
  }

  //  removing an item from the cart by product ID (Method)
  removeItem(productId) {
    this.items = this.items.filter((item) => item.product.id !== productId);
  }

  //  displaying cart items (Method)
  displayCart() {
    this.items.forEach((item) => {
      console.log(
        `Product: ${item.product.name}, Quantity: ${
          item.quantity
        }, Total Price: $${item.getTotalPrice()}`
      );
    });
  }

  // Method to calculate the total price of the cart
  getCartTotal() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }
}

// Testing the functionality
// Create products
const product1 = new Product(1, "Laptop", 1200);
const product2 = new Product(2, "Mouse", 25);
const product3 = new Product(3, "Keyboard", 75);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 1);

// showing the cart
console.log("Cart Items:");
cart.displayCart();

// showing total price of the cart
console.log(`Total Cart Price: $${cart.getCartTotal()}`);

// removing an item from the cart
cart.removeItem(2); // Remove the item with product ID 2 (Mouse)

// showing the cart again after removal
console.log("\nCart Items after removal:");
cart.displayCart();

// showing the total price of the cart after removal
console.log(`Total Cart Price after removal: $${cart.getCartTotal()}`);
