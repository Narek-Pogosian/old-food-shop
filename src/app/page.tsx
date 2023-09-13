import Categories from "@/components/home/categories";
import DiscountBanner from "@/components/home/discount-banner";
import HeroBanner from "@/components/home/hero-banner";

const Home = async () => {
  return (
    <>
      <HeroBanner />
      <div className="container pt-24 pb-12 space-y-16">
        <Categories />
        <DiscountBanner />
      </div>
    </>
  );
};

export default Home;
