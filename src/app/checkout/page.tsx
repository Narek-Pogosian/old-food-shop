"use client";

import CartItemCard from "@/components/cart/cart-item";
import CheckoutForm from "@/components/checkout/checkout-form";
import PageTitle from "@/components/page-title";
import useCartContext from "@/hooks/use-cart-context";
import useIsMounted from "@/hooks/use-is-mounted";
import { getTotalPrice } from "@/lib/helpers/currency";

const Checkout = () => {
  const isMounted = useIsMounted();
  const { cartItems } = useCartContext();

  return (
    <div className="container">
      <PageTitle>Checkout</PageTitle>
      <div className="flex flex-col gap-8 lg:flex lg:flex-row-reverse">
        <div className="min-w-[288px]">
          {isMounted && (
            <>
              <p className="mb-2 text-lg font-semibold ">
                Total Price: {getTotalPrice(cartItems)}
              </p>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {cartItems.map((item) => (
                  <CartItemCard cartItem={item} key={item.productId} />
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="lg:flex-1">
          <CheckoutForm />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
