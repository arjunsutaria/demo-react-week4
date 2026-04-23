function greet(name) {
  return `Hello, ${name}!`;
}

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

function processOrder(order) {
  const total = calculateTotal(order.items);
  const message = greet(order.customer);
  console.log(message, "Your total is:", total);
}

processOrder({
  customer: "Arjun",
  items: [
    { name: "Widget", price: 9.99 },
    { name: "Gadget", price: 24.99 },
  ],
});
