var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var price = Math.floor(Math.random() * 101);
 var object = {itemName: item, itemPrice: price};
 cart.push(object);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].hasOwnProperty(item)) {
      return cart.splice(i, 1);
    }
  }
  return console.log("That item is not in your cart.");
}

function placeOrder(cardNumber) {
  // write your code here
}
