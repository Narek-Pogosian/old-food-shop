import AddToCartCounter from "@/components/details/add-to-cart-counter";
import ProductInfo from "@/components/details/product-info";
import ReviewList from "@/components/details/reviews-list";
import PageTitle from "@/components/page-title";
import { db } from "@/lib/db";
import Image from "next/image";

export async function generateStaticParams() {
  const products = await db.product.findMany({ select: { id: true } });

  return products.map((product) => ({
    id: product.id,
  }));
}

// export const revalidate = 10000;

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const product = await db.product.findFirst({
    where: { id: params.id },
    include: { reviews: true },
  });

  if (!product) {
    throw Error;
  }

  return (
    <div className="container">
      <PageTitle>Product Details</PageTitle>
      <section className="grid gap-10 lg:grid-cols-2">
        <div className="lg:order-2">
          <ProductInfo product={product} />
          <AddToCartCounter product={product} />
        </div>
        <div className="sm:p-8 lg:p-0 relative aspect-[16/11]">
          <Image
            src={product.imgUrl}
            alt={product.name}
            className="rounded"
            fill
            sizes="(max-width: 1024px) 50%"
          />
        </div>
      </section>
      {/* Reviews */}
      <section className="pt-16">
        <h2 className="text-2xl font-semibold text-center">
          Our Customers Opinion
        </h2>
        <ReviewList reviews={product.reviews} />
      </section>
    </div>
  );
};

export default ProductDetails;
