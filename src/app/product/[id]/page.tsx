import AddToCartCounter from "@/components/details/add-to-cart-counter";
import ProductInfo from "@/components/details/product-info";
import PageTitle from "@/components/page-title";
import Image from "next/image";
import { db } from "@/lib/db";
import { Suspense } from "react";
import ReviewsSection from "@/components/details/reviews/reviews-section";
import { ErrorBoundary } from "react-error-boundary";

export async function generateStaticParams() {
  const products = await db.product.findMany({ select: { id: true } });

  return products.map((product) => ({
    id: product.id,
  }));
}

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const product = await db.product.findFirst({
    where: { id: params.id },
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
        <div className="relative aspect-[16/11]">
          <Image
            src={product.imgUrl}
            alt={product.name}
            className="rounded"
            priority
            fill
            sizes="(max-width: 1024px) 50%"
          />
        </div>
      </section>

      <section className="pt-16">
        <h2 className="mb-12 text-3xl font-semibold text-center">
          Our Customers Opinion
        </h2>
        <ErrorBoundary
          fallback={
            <h2 className="text-2xl font-bold text-center">
              Error, could not get reviews
            </h2>
          }
        >
          <Suspense
            fallback={
              <p className="text-xl font-semibold text-center">
                Loading reviews...
              </p>
            }
          >
            <ReviewsSection product={product} />
          </Suspense>
        </ErrorBoundary>
      </section>
    </div>
  );
};

export default ProductDetails;
