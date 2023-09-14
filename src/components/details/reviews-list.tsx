import { Review } from "@prisma/client";
import { ScrollArea } from "../ui/scroll-area";

type Props = {
  reviews: Review[];
};

const ReviewList = ({ reviews }: Props) => {
  if (reviews.length === 0) {
    return <div>No reviews</div>;
  }

  return (
    <ScrollArea className="max-h-[400px]">
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>{review.name}</li>
        ))}
      </ul>
    </ScrollArea>
  );
};

export default ReviewList;
