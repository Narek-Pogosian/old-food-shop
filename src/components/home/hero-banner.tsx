import Link from "next/link";
import { Button } from "../ui/button";

const HeroBanner = () => {
  return (
    <section className="h-[500px] md:h-[650px] flex flex-col items-center justify-center text-center gap-12 px-2">
      <h1 className="text-5xl font-bold leading-tight xl:text-8xl text-balance md:text-6xl">
        Welcome to{" "}
        <span className="text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600 dark:from-emerald-500 dark:to-emerald-300 bg-clip-text">
          Food Shop
        </span>
      </h1>
      <div className="max-w-xl space-y-12 md:max-w-2xl">
        <blockquote className="font-semibold md:text-lg xl:text-2xl text-balance">
          Food, in the end, in our own tradition, is something holy. It&#39;s
          not about nutrients and calories. It&#39;s about sharing. It&#39;s
          about honesty. It&#39;s about identity.
          <footer className="mt-2">- Louise Fresco</footer>
        </blockquote>
        <Button variant="white" asChild size="lg" className="text-lg font-bold">
          <Link href="/shop">Start Shopping</Link>
        </Button>
      </div>
    </section>
  );
};

export default HeroBanner;
