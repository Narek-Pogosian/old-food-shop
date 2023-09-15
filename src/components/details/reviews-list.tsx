import { Review } from "@prisma/client";

type Props = {
  reviews: Review[];
};

const ReviewList = ({ reviews }: Props) => {
  return (
    <ul className="max-h-[400px] lg:flex-1 overflow-auto">
      {reviews.length === 0 ? (
        <div className="pt-10 text-lg font-semibold text-center text-muted-foreground">
          No reviews
        </div>
      ) : (
        reviews.map((review) => (
          <li key={review.id} className="flex flex-col pb-4 border-b">
            <span className="text-lg font-semibold">{review.name}</span>
            <span className="mb-2">
              {[...Array(Math.floor(review.rating))].map((_, i) => {
                return (
                  <span className="text-xl text-amber-500" key={i}>
                    &#9733;
                  </span>
                );
              })}
            </span>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              qui dignissimos placeat illum nisi optio rem temporibus suscipit
              nulla repellendus.
            </p>
            {review.description && <p>{review.description}</p>}
          </li>
        ))
      )}
    </ul>
  );
};

export default ReviewList;
