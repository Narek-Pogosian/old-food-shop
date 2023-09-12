"use client";

type Props = {
  quantity: number;
};

const CartQuantityBadge = ({ quantity }: Props) => {
  return (
    <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-semibold tracking-widest text-primary-foreground rounded-full pointer-events-none -top-[4px] -right-[6px] bg-primary ">
      <span>{quantity}</span>
    </span>
  );
};

export default CartQuantityBadge;
