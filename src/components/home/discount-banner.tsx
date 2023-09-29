import { Gift } from "lucide-react";
import { Button } from "../ui/button";

const DiscountBanner = () => {
  return (
    <section className="bg-[url('/discount.webp')] bg-cover rounded-t bg-center h-[500px]">
      <div className="grid h-full place-content-center bg-gradient-to-b from-transparent dark:from-black/40 dark:to-background to-background">
        <div className="max-w-4xl px-4 space-y-8 text-center">
          <h2 className="text-2xl font-bold md:text-5xl">
            Exclusive Discounts for Members
          </h2>
          <p className="font-semibold md:text-lg">
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
    </section>
  );
};

export default DiscountBanner;
