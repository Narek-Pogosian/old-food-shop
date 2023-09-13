import { Gift } from "lucide-react";
import { Button } from "../ui/button";

const DiscountBanner = () => {
  return (
    <div className="bg-[url('/discount.webp')] bg-cover rounded-t bg-center h-[500px]">
      <div className="grid h-full place-content-center bg-gradient-to-b from-transparent dark:from-black/40 dark:to-background to-background">
        <div className="max-w-3xl space-y-6 text-center">
          <h2 className="text-5xl font-bold">
            Exclusive Discounts for Members
          </h2>
          <p className="text-lg text-muted-foreground">
            The time is now for it to be okay to be great. People in this world
            shun people for being great. For being a bright color. For standing
            out. But the time is now to be okay to be the greatest you.
          </p>
          <Button size="lg" className="font-semibold">
            <Gift className="w-4 h-4 mr-4" />
            Get your code
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
