import { currency } from "@/lib/utils";
import { Product } from "@prisma/client";

type Props = {
  product: Product;
};

const ProductInfo = ({ product }: Props) => {
  return (
    <>
      <h2 className="mb-1 text-2xl font-bold">{product.name}</h2>
      <p className="mb-4 text-lg font-semibold">{currency(product.price)}</p>
      <p className="text-muted-foreground">{product.description}</p>
    </>
  );
};

export default ProductInfo;
