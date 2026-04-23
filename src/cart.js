export function addToCart(cart, item) {
  if (!item.id || !item.price) {
    throw new Error("Invalid item: missing id or price");
  }
  return [...cart, item];
}

export function removeFromCart(cart, itemId) {
  return cart.filter((item) => item.id !== itemId);
}

export function getCartTotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function applyDiscount(cart, discountCode) {
  const discounts = { SAVE10: 0.1, SAVE20: 0.2 };
  const rate = discounts[discountCode];
  if (!rate) throw new Error(`Unknown discount code: ${discountCode}`);
  return getCartTotal(cart) * (1 - rate);
}
