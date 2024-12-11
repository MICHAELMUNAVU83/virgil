import Product from "../components/Product";
import servicesData from "../shared/services.json";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Slide } from "react-awesome-reveal";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
// import { motion } from "framer-motion";

function Services() {
  return (
    <section className="bg-[#F9F9F9] md:py-20  py-10 md:px-0 px-5">
      <Slide
        cascade={true}
        triggerOnce={true}
        direction="up"
        className="flex flex-col items-center justify-center"
      >
        <div className="text-center mx-auto font-bold">
          <h3 className="text-xl text-[#0b3369] jakarta md:pb-0 pb-5">
            Our services
          </h3>
          <p className="text-center text-xl jakarta md:text-5xl md:w-[60%] md:pt-10 mx-auto font-bold">
            These services can vary based on the project specificity
          </p>
        </div>
      </Slide>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 sm:grid-cols-2  md:justify-center gap-5 md:gap-10 pt-10 mx-auto md:w-5/6 md:pt-20 pb-20 md:pb-40">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="bg-white flex flex-col cursor-pointer gap-y-5 w-full px-5 py-10 rounded-xl text-center  items-center justify-center border-[3px] border-[#F9F9F9] hover:scale-105 transition-transform duration-500 ease-in-out hover:border-none hover:shadow-xl"
          >
            <div className="rounded-full bg-[#F5F3FE]  flex items-center justify-center size-24">
              <img
                src={service.icon}
                alt={service.name}
                className="mx-auto size-16"
              />
              yrctvu
            </div>
            <h3 className="text-2xl font-bold text-[#0b3369] mb-4 jakarta">
              {service.name}
            </h3>
            <p className="text-[#585858] md:text-xl inter tracking-wide">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <Product />
    </section>
  );
}

export default Services;
