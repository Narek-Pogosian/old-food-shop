"use client";

import CheckoutForm from "@/components/checkout/checkout-form";
import PageTitle from "@/components/page-title";

const Checkout = () => {
  return (
    <div className="container">
      <PageTitle>Checkout</PageTitle>

      <CheckoutForm />
    </div>
  );
};

export default Checkout;
