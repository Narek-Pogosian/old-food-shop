import { Product } from "@prisma/client";
import { currency } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "./add-to-cart";

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <li>
      <Link
        href={`/product/${product.id}`}
        className="relative block aspect-[16/10]"
      >
        <Image
          src={product.imgUrl}
          fill
          sizes="400px"
          alt={product.name}
          loading="lazy"
          // placeholder="blur"
          className="rounded "
        />
      </Link>
      <div className="flex items-center justify-between py-2">
        <div className="flex flex-col font-semibold">
          <Link
            href={"/"}
            className="text-lg hover:underline hover:underline-offset-2"
          >
            {product.name}
          </Link>
          <span className="text-sm text-muted-foreground">
            {currency(product.price)}
          </span>
        </div>
        <AddToCart product={product} />
      </div>
    </li>
  );
};

export default ProductCard;
