import { Link } from "react-router-dom";
import Container from "./Container";
import Title from "./Title";
import { discountImgOne } from "../assets";

const DiscountedBanner = () => {
  const popularSearchItems = [
    { title: "Smart Watches", link: "smartWatches" },
    { title: "Headphone", link: "headphones" },
    { title: "Cameras", link: "camerasAndPhotos" },
    { title: "Audio", link: "tvAndAudio" },
    { title: "Laptop & Computers", link: "computersAndLaptop" },
    { title: "Cell Phone", link: "cellPhones" },
  ];

  return (
    <Container>
      <div className="">
        <Title text="Populer Search" />
        <div className=" w-full h-[1px] bg-gray-200 mt-3" />
      </div>
      <div className=" my-7 flex items-center flex-wrap gap-4">
        {popularSearchItems?.map(({ title, link }) => (
          <Link
            key={title}
            to={`/category/${link}`}
            className=" border border-[px] border-gray-300 px-8 py-3 rounded-full capitalize font-medium hover:bg-black hover:text-white duration-200 "
          >
            {title}
          </Link>
        ))}
      </div>
      <div className=" w-full py-5 md:py-0 my-12 bg-[#f6f6f6] rounded-lg flex items-center justify-between overflow-hidden">
        <img src={discountImgOne} alt="discountImage" className=" hidden" />
      </div>
    </Container>
  );
};

export default DiscountedBanner;
