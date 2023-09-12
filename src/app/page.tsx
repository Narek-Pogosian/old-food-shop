import Categories from "@/components/home/categories";
import HeroBanner from "@/components/home/hero-banner";

const Home = async () => {
  return (
    <>
      <HeroBanner />
      <div className="container">
        <Categories />
      </div>
    </>
  );
};

export default Home;
