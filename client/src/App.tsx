import HighLights from "./HighLights";
import BannerCategories from "./ui/BannerCategories";
import Categories from "./ui/Categories";
import HomeBanner from "./ui/HomeBanner";

export default function App() {
  return (
    <main>
      <BannerCategories />
      <HomeBanner />
      <HighLights />
      <Categories />
    </main>
  );
}
