import AddToCartCounter from "@/components/details/add-to-cart-counter";
import ProductInfo from "@/components/details/product-info";
import PageTitle from "@/components/page-title";
import { db } from "@/lib/db";
import Image from "next/image";

export async function generateStaticParams() {
  const products = await db.product.findMany({ select: { id: true } });

  return products.map((product) => ({
    id: product.id,
  }));
}

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const product = await db.product.findFirst({ where: { id: params.id } });

  if (!product) {
    throw Error;
  }

  return (
    <div className="container">
      <PageTitle>Product Details</PageTitle>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="lg:order-2">
          <ProductInfo product={product} />
          <AddToCartCounter product={product} />
        </div>
        <div className="relative aspect-[16/11] lg:max-w-none lg:mx-0">
          <Image
            src={product.imgUrl}
            alt={product.name}
            className="rounded"
            fill
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
