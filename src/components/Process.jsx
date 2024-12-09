const Process = () => {
  return (
    <div className="bg-gradient-to-tr from-blue-300 to-white relative overflow-hidden px-5 md:p-28 group">
      <img
        src="/shape2.png"
        alt="stats"
        className="absolute top-[-10%] right-[-4%] transform group-hover:translate-y-[-20%] group-hover:translate-x-[5%] transition-transform duration-300"
      />
      <div className="flex flex-col mb-28 md:mb-0 md:flex-row items-center">
        <div className="w-full mt-20">
          <h2 className=" text-4xl text-[#0c1523] md:text-5xl jakarta font-bold">
            Working process
          </h2>
          <p className=" text-md  text-[#585858] md:text-xl lexend mt-5">
            Our IT consulting process is a systematic journey comprising four
            stages: Assessment and Analysis, Planning, Implementation and
            Execution, and Monitoring and Optimization.
          </p>
        </div>
        <div className="w-full mt-10">
          <div className="flex flex-col md:flex-row gap-10">
            <div className="border rounded-full p-5 md:w-72 md:h-72 w-80 h-80 flex bg-white items-center justify-center flex-col gap-2 text-center shadow-sm">
              <h2 className=" text-center text-[#4285F4] text-3xl md:text-5xl jakarta font-bold">
                01
              </h2>
              <h3 className="text-xl md:text-xl text-[#4285F4] jakarta font-bold">
                Assessment and Analysis
              </h3>
              <p className="] text-sm  lexend">
                The process begins by thoroughly understanding your objectives.
              </p>
            </div>
            <div className="border rounded-full ml-8 md:ml-0 mt-5 p-5 md:w-72 md:h-72  bg-white w-80 h-80 flex items-center justify-center flex-col gap-2 text-center shadow-sm">
              <h2 className=" text-[#4285F4] text-center text-3xl md:text-5xl jakarta font-bold">
                02
              </h2>
              <h3 className=" text-[#4285F4] text-xl md:text-xl jakarta font-bold">
                Current State Evaluation
              </h3>
              <p className=" text-sm text-center  lexend">
                Assess your existing IT infrastructure, systems, and processes
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mt-10">
            <div className="border rounded-full p-5 md:w-72 bg-white  md:h-72 w-80 h-80 flex items-center justify-center flex-col gap-2 text-center shadow-sm">
              <h2 className=" text-[#4285F4] text-center text-3xl md:text-5xl jakarta font-bold">
                03
              </h2>
              <h3 className=" text-[#4285F4] text-xl md:text-xl jakarta font-bold">
                Implementation and Execution
              </h3>
              <p className=" text-sm  lexend ">
                We Execute the project plan, which involves deploying new
                software, hardware and IT processes.
              </p>
            </div>
            <div className="border rounded-full bg-white  ml-8 md:ml-0 mt-5 p-5 md:w-72 md:h-72 w-80 h-80 flex items-center justify-center flex-col gap-2 text-center shadow-sm">
              <h2 className="text-[#4285F4] text-center text-3xl md:text-5xl jakarta font-bold">
                04
              </h2>
              <h3 className="text-[#4285F4] text-xl md:text-xl jakarta font-bold">
                Evaluation and Maintenance
              </h3>
              <p className=" text-sm text-center  lexend">
                We Assess the results of the implemented solutions against the
                predefined goals
              </p>
            </div>
          </div>
        </div>
      </div>

      <img
        src="/shape.png"
        alt="shape"
        className="absolute bottom-0 left-0 transform translate-y-1/2 group-hover:translate-y-[20%] group-hover:translate-x-[-5%] transition-transform duration-300"
      />
    </div>
  );
};

export default Process;
