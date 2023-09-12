import Link from "next/link";
import { Button } from "../ui/button";

const HeroBanner = () => {
  return (
    // TODO: Edit text and probably change image, fix for mobile and tablet
    <div className="bg-[url('/bg2.jpg')] h-[650px] bg-cover bg-blend-multiply bg-gray-500  flex items-center justify-center">
      <div className="max-w-2xl space-y-6 text-center">
        <h1 className="text-5xl font-bold text-white">Collection is here</h1>
        <p className="text-lg text-white">TODO</p>
        <Button variant="white" asChild size="lg">
          <Link href="/shop">Start Shopping</Link>
        </Button>
      </div>
    </div>
  );
};

export default HeroBanner;
