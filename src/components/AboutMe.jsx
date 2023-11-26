const AboutMe = () => {
  return (
    <div className="flex max-md:flex-col gap-8">
      <div className="flex-1">
        <img src="/assets/images/Group46.svg" alt="" />
      </div>
      <div className="flex-1 padding-r py-20">
        <div className="relative">
          <div className="absolute top-0 left-0">
            <img src="/assets/images/commas.svg" alt="" />
          </div>
          <p className="px-10 font-mulish font-medium text-[22px] text-[#000113] leading-[42px]">
            I’m{" "}
            <span className="capitalize font-bold max-sm:text-sm leading-[27px]">
              audrey oluchi oji.
            </span>{" "}
            A product designer from Nigeria, I started out as a curious soul in
            Tech learning about User interface & experience design, my
            background in research really helped out (I studied & attained a
            B.Sc clinical pharmacology decree). After some time I ended up
            diving deeper than UI/UX into the vast world of Product design. A
            huge part of my story as a designer comes from learning and
            relearning every single day and always taking a leap to do something
            innovative.{" "}
          </p>
          <div className="absolute bottom-0 right-0">
            {" "}
            <img src="/assets/images/comma.svg" alt="" />
          </div>
        </div>
        <div className="ml-10 mt-10">
          <a
            href=""
            className="flex items-center bg-[#1A23FF] hover:bg-blue-600 text-white w-[254px] whitespace-nowrap justify-center h-[56px] font-clash-bold text-center"
          >
            Download My Resume{" "}
            <img src="/assets/images/download1.svg" alt="" className="ml-2" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
