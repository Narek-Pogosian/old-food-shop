import { currency } from "@/lib/helpers/currency";
import { Product } from "@prisma/client";
import Image from "next/image";

type Props = {
  product: Product;
};

const SearchProductItem = ({ product }: Props) => {
  return (
    <li key={product.id} className="flex gap-6 p-2 rounded hover:bg-accent">
      <Image
        src={product.imgUrl}
        alt={`Image of ${product.name}`}
        width={70}
        height={40}
        className="rounded"
      />
      <div>
        <p>{product.name}</p>
        <p>{currency(product.price)}</p>
      </div>
    </li>
  );
};

export default SearchProductItem;
