import AdBanners from "../../Components/AdBanners/AdBanners";
import Banner from "../../Components/Banner/Banner";
import BestSellingProducts from "../../Components/BestSellingProducts/BestSellingProducts";
import Category from "../../Components/Category/Category";

export default function Home() {
  return (
    <>
      <Banner/>
      <Category/>
      <BestSellingProducts/>
      <AdBanners/>
    </>
  )
}
