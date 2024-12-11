import React from "react";

const Newsletter = () => {
  return (
    <div className="relative mt-20">
      <div className="bg-[#4285F4] p-2 flex justify-center w-3/4 mx-auto items-center transform rotate-[-3deg] z-20">
        <div className="transform -rotate-[-3deg] w-full relative z-10">
          <img
            src="/shape.png"
            alt="stats"
            className="absolute top-0 left-0 transform -translate-y-20 -translate-x-4 transition-transform duration-300 w-12 h-12"
          />
          <div className="flex gap-2 bg-gray-100 p-16 shadow-lg h-96 relative z-20">
            <h2 className="text-[#0C1523] jakarta w-[60%] font-bold text-5xl md:text-6xl mt-8">
              Subscribe To Our Newsletter
            </h2>

            <form className="relative flex items-center w-full max-w-md mx-auto">
              <input
                type="email"
                id="default-search"
                className="block w-full p-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter Your Email.."
                required
              />
              <button
                type="submit"
                className="text-white bg-[#4285F4] hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 absolute right-2.5"
              >
                Subscribe
              </button>
            </form>
          </div>
          <img
            src="/shape2.png"
            alt="shape"
            className="hidden md:absolute bottom-0 right-0 transform -translate-y-1/2 translate-x-1/2 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
