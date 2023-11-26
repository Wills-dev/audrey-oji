const ContactMe = () => {
  return (
    <div className="py-20 padding-x w-full">
      <div className="flex justify-between w-full gap-10">
        <p className="max-w-[500px] text-[24px] font-mulish text-gray-600 max-md:text-[10px] max-sm:max-w-[200px]">
          If you have a general or project inquiry, please drop me an email or
          contact me
        </p>
        <div className="flex flex-col items-end gap-3">
          <h4 className="text-[#000113] font-mulish font-bold text-[22px]  max-md:text-[12px] whitespace-nowrap">
            Connect with me:
          </h4>
          <div className="flex items-center gap-3 ">
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
      </div>
      <div className="flex items-center justify-center max-sm:justify-start">
        <form className="flex w-[650px] justify-center max-md:w-full items-center flex-col  py-20">
          <div className="w-full flex flex-col gap-2">
            <label
              htmlFor="name"
              className="text-xl font-mulish font-bold max-sm:text-[14px] uppercase"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="w-full outline-none  border-b-2 h-[56px] border-[#828397] focus:border-blue-700"
            />
          </div>
          <div className="w-full flex flex-col gap-2  mt-12">
            <label
              htmlFor="email"
              className="text-xl font-mulish font-bold max-sm:text-[14px] uppercase"
            >
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full outline-none  border-b-2 h-[56px] border-[#828397] focus:border-blue-700"
            />
          </div>
          <div className="w-full flex flex-col gap-2  mt-12">
            <label
              htmlFor="message"
              className="text-xl font-mulish font-bold max-sm:text-[14px] uppercase"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="message"
              className="w-full outline-none  border-b-2 h-[56px] border-[#828397] focus:border-blue-700"
            />
          </div>
          <div className="w-full flex justify-center items-center mt-14">
            <button className="flex items-center bg-[#1A23FF] hover:bg-blue-600 text-white w-[250px] whitespace-nowrap justify-center h-[56px] font-clash-bold text-center ">
              Send message
              <img
                src="/assets/images/Artwork.svg"
                alt=""
                className="ml-2"
              />{" "}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
