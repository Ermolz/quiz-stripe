export const redirectToStripeCheckout = (): void => {
  const checkoutUrl = import.meta.env.VITE_STRIPE_CHECKOUT_URL;

  if (!checkoutUrl) {
    throw new Error("Stripe Checkout URL is not configured.");
  }

  try {
    const url = new URL(checkoutUrl);

    if (url.protocol !== "https:") {
      throw new Error();
    }
  } catch {
    throw new Error("Stripe Checkout URL is invalid.");
  }

  window.location.assign(checkoutUrl);
};
