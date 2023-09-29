import Link from "next/link";
import { Button } from "../ui/button";

const HeroBanner = () => {
  return (
    <section className="bg-[url('/bg2.jpg')] px-2 h-[400px] md:h-[650px] bg-cover bg-blend-multiply bg-gray-500  flex items-center justify-center">
      <div className="max-w-xl space-y-12 text-center md:max-w-2xl">
        <p className="font-semibold text-white md:text-lg xl:text-2xl text-balance">
          Food, in the end, in our own tradition, is something holy. It&#39;s
          not about nutrients and calories. It&#39;s about sharing. It&#39;s
          about honesty. It&#39;s about identity.
          <br /> - Louise Fresco
        </p>
        <Button variant="white" asChild size="lg">
          <Link href="/shop">Start Shopping</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroBanner;
