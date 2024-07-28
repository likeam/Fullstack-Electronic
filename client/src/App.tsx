import HighLights from "./HighLights";
import Product from "./pages/Product";
import BannerCategories from "./ui/BannerCategories";
import Blog from "./ui/Blog";
import Categories from "./ui/Categories";
import DiscountedBanner from "./ui/DiscountedBanner";
import HomeBanner from "./ui/HomeBanner";
import ProductList from "./ui/ProductList";

export default function App() {
  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <HighLights />
      <Categories />
      <ProductList />
      <DiscountedBanner />
      <Blog />
    </main>
  );
}
