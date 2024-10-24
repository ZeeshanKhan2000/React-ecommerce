import Hero from "../components/Hero/Hero";
import NewCollection from "../components/NewCollection/NewCollection";
import Offers from "../components/Offers/Offers";
import Popular from "../components/Popular/Popular";
import NewsLatter from "../components/NewsLetter/NewsLatter";

const Shop = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offers />
      <NewCollection />
      <NewsLatter />
    </>
  );
};

export default Shop;
