import WriteReviewDialog from "@/components/details/reviews/write-review-dialog";
import { db } from "@/lib/db";
import { Product } from "@prisma/client";
import ReviewList from "./reviews-list";
import ProgressBar from "./progress-bar";
import Stars from "./stars";

type Props = {
  product: Product;
};

const ReviewsSection = async ({ product }: Props) => {
  const reviews = await db.review.findMany({
    where: { productId: product.id },
  });

  const avgRating =
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length || 0;

  const ratings: Record<string, number> = {
    "0": 0,
    "1": 0,
    "2": 0,
    "3": 0,
    "4": 0,
    "5": 0,
  };

  reviews.forEach((review) => {
    ratings[review.rating] += 1;
  });

  return (
    <>
      <h3 className="mb-4 text-2xl font-semibold">Client Reviews</h3>
      <div className="flex flex-col gap-6 md:gap-12 md:flex-row">
        <div className="md:w-[350px] lg:w-[450px] space-y-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              {avgRating > 0 && (
                <>
                  <span className="font-semibold">
                    {Math.round(avgRating * 10) / 10}
                  </span>
                  <Stars count={Math.floor(avgRating)} />
                </>
              )}
              <span className="text-muted-foreground">
                Based on <b>{reviews.length}</b> reviews
              </span>
            </div>
            <div className="space-y-1">
              {Object.keys(ratings).map((key) => (
                <div className="flex items-center gap-2" key={key}>
                  {key} <span className="text-xl text-amber-500">&#9733;</span>{" "}
                  <ProgressBar
                    progress={
                      reviews.length
                        ? (ratings[key]! / reviews.length) * 100
                        : 0
                    }
                  />
                </div>
              ))}
            </div>
          </div>
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
