import HighLights from "./HighLights";
import BannerCategories from "./ui/BannerCategories";
import Categories from "./ui/Categories";
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
    </main>
  );
}
