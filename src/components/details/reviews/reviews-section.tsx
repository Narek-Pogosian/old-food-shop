import WriteReviewDialog from "@/components/details/reviews/write-review-dialog";
import { db } from "@/lib/db";
import { Product } from "@prisma/client";
import ReviewList from "./reviews-list";
import ReviewsData from "./reviews-data";

type Props = {
  product: Product;
};

const ReviewsSection = async ({ product }: Props) => {
  const reviews = await db.review.findMany({
    where: { productId: product.id },
  });

  return (
    <>
      <h3 className="mb-4 text-2xl font-semibold">Client Reviews</h3>
      <div className="flex flex-col gap-6 md:gap-12 md:flex-row">
        <div className="md:w-[350px] lg:w-[450px] space-y-4">
          <ReviewsData reviews={reviews} />
          <div>
            <h3 className="mb-4 text-xl font-semibold">
              We value your opinion
            </h3>
            <WriteReviewDialog productId={product.id} />
          </div>
        </div>
        <ReviewList reviews={reviews} />
      </div>
    </>
  );
};

export default ReviewsSection;
