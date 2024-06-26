import { useState } from "react";
import { logo } from "../assets";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import { FiStar, FiUser } from "react-icons/fi";

const Header = () => {

  const [searchText, setSearchText]= useState("")


  return (
    <div className="w-full bg-whiteText">
      <div className=" max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
        <img src={logo} alt="logo" className=" w-44" />
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
          {searchText ? < IoSearchOutline className=" absolute top-2.5 text-xl right-4" /> :<IoClose className=" absolute top-2.5 text-xl right-4" /> }
        </div>
        
        {/*Menu*/}
        <div className=" flex item-center gap-x-6 text-2xl" >
        <FiUser className= " hover:text-skyText duration-200" />        
        </div>
        <div  className=" flex item-center gap-x-6 text-2xl" >
        <FiStar className= " hover:text-skyText duration-200" />
        </div>
      </div>
    </div>
  );
}
export default Header;
