import { Review } from "@prisma/client";
import Stars from "./stars";

type Props = {
  reviews: Review[];
};

const ReviewList = ({ reviews }: Props) => {
  return (
    <ul className="max-h-[400px] md:flex-1 overflow-auto space-y-6">
      {reviews.length === 0 ? (
        <div className="pt-10 text-lg font-semibold text-center text-muted-foreground">
          No reviews
        </div>
      ) : (
        reviews.map((review) => (
          <li key={review.id} className="flex flex-col pb-4 border-b">
            <div className="flex items-end gap-4">
              <span className="font-semibold">{review.name}</span>
              <span className="text-sm text-muted-foreground">
                {review.created_at.toString().split("T")[0]}
              </span>
            </div>
            <span className="mb-2">
              <Stars count={Math.floor(review.rating)} />
            </span>
            {review.description && <p>{review.description}</p>}
          </li>
        ))
      )}
    </ul>
  );
};

export default ReviewList;
