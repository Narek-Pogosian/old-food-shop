import AddToCartCounter from "@/components/details/add-to-cart-counter";
import ProductInfo from "@/components/details/product-info";
import ReviewList from "@/components/details/reviews-list";
import WriteReviewDialog from "@/components/details/write-review-dialog";
import PageTitle from "@/components/page-title";
import { Button } from "@/components/ui/button";
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
            priority
            fill
            sizes="(max-width: 1024px) 50%"
          />
        </div>
      </section>

      {/* Reviews */}
      <section className="pt-16">
        <h2 className="mb-12 text-3xl font-semibold text-center">
          Our Customers Opinion
        </h2>
        <h3 className="mb-4 text-2xl font-semibold">Client Reviews</h3>
        <div className="flex flex-col gap-6 lg:gap-12 lg:flex-row">
          <div className="lg:w-[500px] space-y-4">
            <div>
              <p>TODO: Add diagrams</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold">
                We value your opinion
              </h3>
              <WriteReviewDialog productId={product.id} />
            </div>
          </div>
          <ReviewList reviews={product.reviews} />
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
