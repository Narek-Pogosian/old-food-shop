import { currency } from "@/lib/helpers/currency";
import { Product } from "@prisma/client";
import Image from "next/image";

type Props = {
  product: Product;
};

const SearchProductItem = ({ product }: Props) => {
  return (
    <li key={product.id} className="flex gap-3 p-2 rounded hover:bg-accent">
      <Image
        src={product.imgUrl}
        alt={`Image of ${product.name}`}
        width={70}
        height={40}
        className="rounded"
      />
      <div className="text-left">
        <p className="font-semibold">{product.name}</p>
        <p className="text-sm text-muted-foreground">
          {currency(product.price)}
        </p>
      </div>
    </li>
  );
};

export default SearchProductItem;
