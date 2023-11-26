// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex  justify-between items-center fixed padding-x py-10 max-sm:py-6  w-full bg-white z-20 ">
      <div className="flex items-center gap-4">
        <button>
          <img src="/assets/images/menu1.svg" alt="" className="md:hidden" />
        </button>
        <h2 className="text-base font-clash-semibold leading-6  text-[#000339] uppercase hidden md:block mr-2">
          audrey oji
        </h2>
        <div className="flex items-center gap-3 max-md:hidden">
          <a href="/">
            <img src="/assets/images/Group23.svg" alt="" />
          </a>
          <a href="/">
            <img src="/assets/images/Group26.svg" alt="" />
          </a>
          <a href="/">
            <img src="/assets/images/Group27.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="flex items-center justify-end gap-6 max-md:hidden">
        <a href="/">
          <h2 className="text-base font-clash-medium leading-5 text-[#000113] hover:text-blue-900">
            Home
          </h2>
        </a>
        <a href="#products">
          <h2 className="text-base font-clash-medium leading-5 text-[#000113] hover:text-blue-900">
            Products
          </h2>
        </a>
        <a href="#about-me">
          <h2 className="text-base font-clash-medium leading-5 text-[#000113] hover:text-blue-900">
            About Me
          </h2>
        </a>
        <a href="#contact-me">
          <h2 className="text-base font-clash-medium leading-5 text-[#000113] hover:text-blue-900">
            Contact Me
          </h2>
        </a>
      </div>
      <div className="flex items-center gap-3 md:hidden">
        <a href="/">
          <img
            src="/assets/images/Group23.svg"
            alt=""
            className="w-[16px] max-w-[16px] h-[16px] max-h-[16px]"
          />
        </a>
        <a href="/">
          <img
            src="/assets/images/Group24.svg"
            alt=""
            className="w-[16px] max-w-[16px] h-[16px] max-h-[16px]"
          />
        </a>
        <a href="/">
          <img
            src="/assets/images/Group25.svg"
            alt=""
            className="w-[16px] max-w-[16px] h-[16px] max-h-[16px]"
          />
        </a>
        <a href="/">
          <img
            src="/assets/images/Group26.svg"
            alt=""
            className="w-[16px] max-w-[16px] h-[16px] max-h-[16px]"
          />
        </a>
        <a href="/">
          <img
            src="/assets/images/Group27.svg"
            alt=""
            className="w-[16px] max-w-[16px] h-[16px] max-h-[16px]"
          />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
