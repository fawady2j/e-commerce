"use client";

import { CartProvider as CProvider } from "use-shopping-cart";

const CartProvider = ({ children }) => {
  return (
    <CProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.NEXT_PUBLIC_STRIPE_KEY}
      successUrl="http://e-commerce-lake-omega-68.vercel.app/stripe/success"
      cancelUrl="http://e-commerce-lake-omega-68.vercel.app/stripe/error"
      language="en-us"
      currency="usd"
      billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </CProvider>
  );
};

export default CartProvider;
