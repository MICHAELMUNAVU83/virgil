import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gradient-to-tr flex flex-col gap-10 md:flex-row items-center justify-between md:pl-24 from-blue-200 pt-36 md:pt-28 to-white md:h-screen">
      <div className="w-[100%] flex flex-col gap-5">
        <h2 className="text-4xl mx-auto w-[90%] md:w-[100%] md:mx-0 md:text-7xl text-[#0c1523] jakarta text-center md:text-start font-bold">
          Transforming ideas into inspiring experiences
        </h2>
        <p className="lexend text-sm md:text-xl text-center md:text-start mx-auto md:mx-0 font-normal w-[90%] md:w-[100%] text-[#585858] tracking-wide">
          We build innovative solutions for individuals, startups, and
          enterprises to automate business processes, improve productivity, and
          drive innovation. This can be landing pages, e-commerce, mobile apps,
          Minimum Viable Products(MVPs), or complete digital products.
        </p>
        <div className="flex mx-auto w-[70%] md:mx-0 md:w-[100%] gap-5 mt-5">
          <a
            href="/#contact"
            className="bg-[#4285F4] md:w-48 p-4  hover:scale-105 transition-all ease-in-out duration-500 jakarta font-bold rounded-lg md:text-xl flex justify-center items-center text-white"
          >
            Reach Out
          </a>
          <a
            href="/projects"
            className="border-2 hover:scale-105 transition-all ease-in-out duration-500 border-[#0c1523] md:w-48 p-4 jakarta font-bold rounded-lg md:text-xl flex justify-center items-center text-[#0C1523]"
          >
            Our work
          </a>
        </div>
      </div>
      <div className="md:w-[100%] mx-auto md:mx-0 w-[85%] h-full py-10 md:py-0">
        <img
          src="img3.jpg"
          alt=""
          className="w-full rounded-tl-[70px] object-cover md:rounded-tl-[150px] h-full"
        />
      </div>
    </div>
  );
};

export default HomePage;
