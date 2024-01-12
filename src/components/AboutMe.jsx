const AboutMe = () => {
  return (
    <div className="flex max-lg:flex-col gap-8">
      <div className="flex-1 relative h-[950px]">
        <div className="">
          <img src="/assets/images/screen.png" alt="" />
        </div>
      </div>
      <div className="flex-1 padding-r pt-36  max-md:pt-0 max-sm:pl-3">
        <div className="relative">
          <div className="absolute top-0 left-0">
            <img
              src="/assets/images/commas.svg"
              alt=""
              className="max-md:max-w-[14px] max-md:max-h-[14px]"
            />
          </div>
          <p className="px-10 max-sm:px-4 font-mulish font-medium text-[22px] max-sm:text-sm text-[#000113] leading-[42px]">
            I’m{" "}
            <span className="capitalize font-bold  leading-[27px]">
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
            <img
              src="/assets/images/comma.svg"
              alt=""
              className="max-md:max-w-[14px] max-md:max-h-[14px]"
            />
          </div>
        </div>
        <div className="ml-10  max-sm:ml-4 mt-10">
          <a
            href="https://drive.google.com/file/d/1KXYxH2YAz98Taxr1ySeiRQ-1jIc3oDAk/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center bg-[#1A23FF] hover:bg-blue-600 text-white w-[254px] whitespace-nowrap justify-center h-[56px] font-clash-bold text-center "
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
