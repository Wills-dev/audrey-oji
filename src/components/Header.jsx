const Header = () => {
  return (
    <div className=" w-full pt-40 max-sm:pt-32 flex justify-center items-center flex-col gap-6 padding-x relative">
      <div className="flex flex-col relative justify-center items-center">
        <div className="flex items-center gap-2 mt-16 max-sm:mt-5">
          <h1 className="text-[98px] max-lg:text-[55px] max-md:text-[30px]  text-[#000113] font-clash-medium text-center">
            AUDREY OJI
          </h1>
          <img
            src="/assets/images/Group32.svg"
            alt=""
            className="max-md:w-[45px] max-md:h-[48px]"
          />
        </div>
        <h2 className="text-[#1A23FF] text-[108px] font-clash-bold uppercase left-4  max-lg:text-[64px] max-md:text-[45px] max-sm:text-[30px] text-center">
          Product Designer{" "}
        </h2>
        <div className="absolute left-0 top-14">
          <img
            src="/assets/images/Group10.svg"
            alt=""
            className="hidden md:block"
          />
        </div>
      </div>
      <div className="max-w-[994px] flex justify-center px-20 py-10 max-md:px-10 max-sm:px-4  bg-[#F6F6FC] z-10">
        <p className="text-center font-mulish font-medium text-[#000113] text-[28px] max-md:text-base max-sm:text-sm ">
          {" "}
          Hello there!{" "}
          <span className="text-[#00068A] font-[800]">I’m Audrey</span> an
          ardent and talented{" "}
          <span className="text-[#00068A] font-[800]">Product designer</span>{" "}
          with years of experience in creating functional and visually pleasing
          designs & digital products. I’m all about{" "}
          <span className="text-[#00068A] font-[800]">
            turning broad problems simple
          </span>{" "}
          & improving user experience through{" "}
          <span className="text-[#00068A] font-[800]">innovation</span>.{" "}
        </p>
      </div>
      <div className="absolute bottom-0 right-0 z-0">
        {" "}
        <img src="/assets/images/Group41.svg" alt="" className="" />
      </div>
    </div>
  );
};

export default Header;
