import * as Sentry from "@sentry/browser";
import { addToCart, getCartTotal, applyDiscount } from "./cart";
import { createUser, getUserDisplayName } from "./user";

Sentry.init({
  dsn: "https://3fbcdbf0aa8317741c9fb5b323d47f8f@o88872.ingest.us.sentry.io/4511158858940416",
  release: "1.2.0-demo",
  environment: "production",
});

try {
  const user = createUser("Arjun Sutaria", "arjun.sutaria@sentry.io");
  console.log("Welcome:", getUserDisplayName(user));

  let cart = [];
  cart = addToCart(cart, { id: "widget-1", name: "Widget", price: 9.99, quantity: 2 });
  cart = addToCart(cart, { id: "gadget-1", name: "Gadget", price: 24.99, quantity: 1 });

  const total = getCartTotal(cart);
  const discountedTotal = applyDiscount(cart, "SAVE10");
  console.log("Discounted total:", discountedTotal);
} catch (error) {
  Sentry.captureException(error);
  console.error("Error captured:", error.message);
}
