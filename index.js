var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(itemName) {
  var newcart = cart;
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(itemName)) {
      return newcart.splice(i, 1);
    }
  }

  return console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
}
