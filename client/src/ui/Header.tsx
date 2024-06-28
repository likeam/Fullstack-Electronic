import { useState } from "react";
import { logo } from "../assets";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { FiShoppingBag, FiStar, FiUser } from "react-icons/fi";
import Container from "./Container";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

const bottomNavigation = [
  { title: "Home", link: "/" },
  { title: "Shop", link: "/product" },
  { title: "Cart", link: "/cart" },
  { title: "Orders", link: "/orders" },
  { title: "My Account", link: "/profile" },
  { title: "Blog", link: "/blog" },
];

const Header = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="w-full bg-whiteText">
      <div className=" max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
        <Link to={"/"}>
          <img src={logo} alt="logo" className=" w-44" />
        </Link>
        {/*Search*/}
        <div className=" hidden md:inline-flex max-w-3xl w-full relative ">
          <input
            type="text"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            placeholder="Search Products ..."
            className=" w-full flex-1 rounded-full text-gray-900 text-lg shadow-sm placeholder:text-base 
            placeholder:tracking-wide ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 
            placeholder:font-normal focus:ring-1 focus:ring-darkText sm:text-sm px-4 py-2"
          />
          {searchText ? (
            <IoSearchOutline className=" absolute top-2.5 text-xl right-4" />
          ) : (
            <IoClose className=" absolute top-2.5 text-xl right-4" />
          )}
        </div>

        {/*Menu*/}
        <div className=" flex item-center gap-x-6 text-2xl">
          <Link to={"/profile"}>
            <FiUser className=" hover:text-skyText duration-200 cursor-pointer" />
          </Link>
        </div>
        <Link to={"/favorite"} className=" relative block ">
          <FiStar className=" hover:text-skyText duration-200 cursor-pointer" />
          <span className=" inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[9px] rounded-full w-4 h-4">
            0
          </span>
        </Link>
        <Link to={"/cart"} className=" relative block ">
          <FiShoppingBag className=" hover:text-skyText duration-200 cursor-pointer" />
          <span className=" inline-flex items-center justify-center bg-redText text-whiteText absolute -top-1 -right-2 text-[12px] rounded-full w-4 h-4">
            0
          </span>
        </Link>
      </div>
      <div className=" w-full bg-darkText text-whiteText">
        <Container className=" py-2 max-w-4xl flex items-center gap-5 justify-between">
          <p className=" flex items-center gap-1">
            Select Category <FaChevronDown />
          </p>
          {bottomNavigation.map(({ title, link }) => (
            <Link
              to={link}
              key={title}
              className=" uppercase hidden md:inline-flex text-sm font-semibold text-whiteText
              hover:text-yellow-200 duration-200 relative overflow-hidden group"
            >
              {title}
              <span className="inline-flex w-full h-[1px] bg-whiteText absolute bottom-0  left-0 transform translate-x-[105%] group-hover:translate-x-0 duration-300" />
            </Link>
          ))}
        </Container>
      </div>
    </div>
  );
};
export default Header;
