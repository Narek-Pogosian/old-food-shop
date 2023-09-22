import { Review } from "@prisma/client";
import Stars from "./stars";
import Star from "./star";
import ProgressBar from "./progress-bar";

type Props = {
  reviews: Review[];
};

export type Ratings = Record<string, number>;

const ReviewsData = ({ reviews }: Props) => {
  const avgRating =
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length || 0;

  const ratings: Ratings = {
    "5": 0,
    "4": 0,
    "3": 0,
    "2": 0,
    "1": 0,
    "0": 0,
  };

  reviews.forEach((review) => {
    ratings[review.rating] += 1;
  });

  return (
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
          Based on <b>{reviews.length}</b>{" "}
          {reviews.length === 1 ? "review" : "reviews"}
        </span>
      </div>

      {/* Progress Bars */}
      <div className="space-y-1">
        {Object.keys(ratings)
          .reverse()
          .map((key) => (
            <div className="flex items-center gap-2" key={key}>
              <span>{key}</span>
              <Star />
              <ProgressBar
                progress={
                  reviews.length ? (ratings[key]! / reviews.length) * 100 : 0
                }
              />
              <span className="w-6 text-sm tracking-wider text-muted-foreground">
                {reviews.length
                  ? Math.round((ratings[key]! / reviews.length) * 100)
                  : 0}
                %
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ReviewsData;
