import { Skeleton } from "../ui/skeleton";
import ListGrid from "./list-grid";

const SkeletonList = () => {
  const items = new Array(12).fill(0);

  return (
    <ListGrid>
      {items.map((_, i) => (
        <li key={i}>
          <Skeleton className="relative block aspect-[16/10]" />

          <div className="flex items-center justify-between py-2">
            <div className="flex flex-col gap-[2px]">
              <Skeleton className="w-40 h-5" />
              <Skeleton className="w-20 h-4" />
            </div>
            <Skeleton className="w-9 h-9" />
          </div>
        </li>
      ))}
    </ListGrid>
  );
};

export default SkeletonList;
