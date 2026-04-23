import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://3fbcdbf0aa8317741c9fb5b323d47f8f@o88872.ingest.us.sentry.io/4511158858940416",
  release: "1.1.0-demo",
  environment: "production",
});

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

function triggerBug() {
  const order = null;
  processOrder(order); // This will throw: Cannot read properties of null
}

try {
  triggerBug();
} catch (error) {
  Sentry.captureException(error);
  console.error("Error captured and sent to Sentry:", error.message);
}
