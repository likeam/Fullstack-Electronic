import { logo } from "../assets";

const Header = () => {
  return (
    <div className="w-full bg-whiteText">
      <div className=" max-w-screen-xl mx-auto h-20 flex items-center justify-between px-4 lg:px-0">
        <img src={logo} alt="logo" className=" w-44" />
        {/*Search*/}
        <div className=" hidden md:inline-flex max-w-3xl w-full relative ">
          <input type="text" 
          placeholder="Search Products"
          className=" w-full flex-1 rounded-full text-gray-900 text-lg shadow-sm placeholder:text-base 
          placeholder:tracking-wide ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-normal focus:ring-2 focus:ring-darkText sm:text-sm px-4 py-2"
          />
        </div>
         {/*Menu*/}
      </div>
    </div>
  );
};

export default Header;
