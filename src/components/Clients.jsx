const Clients = () => {
  return (
    <>
      <div id="clients" className="min-h-screen flex flex-col items-center">
        <h3 className="capitalize text-[#4285F4] jakarta text-center py-10 text-xl font-bold">
          Who are our clients
        </h3>

        <h1 className="text-[#0C1523] text-center jakarta mx-auto w-[90%] md:w-[60%] font-bold text-[28px] md:text-6xl mb-10">
          The future of strategic <br /> businesses
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center space-x-8">
          <div className="relative group cursor-pointer p-6 rounded-lg text-center">
            <div className="relative">
              <img
                src="/clients/individual.jpg"
                alt="Individuals"
                className="w-full h-96 object-cover rounded-t-lg mb-4"
              />
              <div className="absolute inset-0 flex justify-between items-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-6 h-2/3 bg-[#4285F4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="w-6 h-2/3 bg-[#4285F4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
              </div>
            </div>
            <h2 className="text-3xl font-semibold jakarta mb-2">Individuals</h2>
            <p className="text-gray-700 lexend text-lg tracking-wide">
              Personal projects needing custom software and personalized
              service.
            </p>
          </div>

          <div className="relative group cursor-pointer  p-6 rounded-lg text-center">
            <div className="relative">
              <img
                src="/clients/startups.jpg"
                alt="Startups"
                className="w-full h-96 object-cover rounded-t-lg mb-4"
              />
              <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
                <div className="w-6 h-2/3 bg-[#4285F4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="w-6 h-2/3 bg-[#4285F4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
              </div>
            </div>
            <h2 className="text-3xl font-semibold jakarta mb-2">Startups</h2>
            <p className="text-gray-700 lexend text-lg tracking-wide">
              Startups seeking scalable and innovative software solutions.
            </p>
          </div>

          <div className="relative group cursor-pointer  p-6 rounded-lg text-center">
            <div className="relative">
              <img
                src="/clients/enterprise.jpg"
                alt="Enterprises"
                className="w-full h-96 object-cover rounded-t-lg mb-4"
              />
              <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
                <div className="w-6 h-2/3 bg-[#4285F4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="w-6 h-2/3 bg-[#4285F4] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-right"></div>
              </div>
            </div>
            <h2 className="text-3xl font-semibold mb-2">Enterprises</h2>
            <p className="text-gray-700 lexend text-lg tracking-wide">
              Large corporations requiring high-performance, secure software.
            </p>
          </div>
        </div>

        <div class="my-16">
          <a
            href="#contact"
            className="bg-[#4285F4] lexend hover:scale-105  transition-all ease-in-out duration-500 border-2 border-gray-100 mt-10 text-white text-xl font-bold p-4 rounded-md w-40"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Clients;
