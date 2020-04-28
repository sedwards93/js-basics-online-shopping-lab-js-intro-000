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
  var pleasework = [];
  if (cart.length === 0) {
    return `Your shopping cart is empty.`}
  else if (cart.length === 1) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`}
  else if (cart.length > 0) {
    for (var i = 0; i < cart.length-1; i++) {
      pleasework.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
    }
      return `In your cart, you have${pleasework}, and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`}
  }


function total() {
  var count = 0;
  for (var i = 0; i < cart.length; i++) {
  count += cart[i].itemPrice
  }
  return count
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
