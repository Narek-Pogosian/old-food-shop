import Star from "./star";

type Props = {
  count: number;
};

const Stars = ({ count }: Props) => {
  return (
    <div>
      {[...Array(count)].map((_, i) => {
        return <Star key={i} />;
      })}
    </div>
  );
};

export default Stars;
