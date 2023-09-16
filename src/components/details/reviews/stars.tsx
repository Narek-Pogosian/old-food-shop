type Props = {
  count: number;
};

const Stars = ({ count }: Props) => {
  return (
    <div>
      {[...Array(count)].map((_, i) => {
        return (
          <span className="text-xl text-amber-500" key={i}>
            &#9733;
          </span>
        );
      })}
    </div>
  );
};

export default Stars;
