import { Link } from "react-router-dom";
import { useRef } from "react";
import AboutHero from "../../public/assets/about-hero.jpg";
import valuesData from "../shared/values.json";
import teamData from "../shared/team.json";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { motion } from "framer-motion";
import { Slide } from "react-awesome-reveal";
import Product from "../components/Product";

const About = () => {
  let splideRef = useRef(null);

  return (
    <main className="py-20 bg-[#F9F9F9]">
      <section className="py-20">
        <div className="md:flex md:px-0 px-5 md:gap-10 lg:justify-between mx-auto md:w-5/6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            className="md:w-[50%] justify-center text-start flex flex-col gap-y-5 md:gap-y-10"
          >
            <h1 className="text-[#432CF2] inter text-xl jakarta font-bold">
              About Us
            </h1>

            <p className="text-[#585858] inter tracking-wide md:text-2xl">
              Virgil Africa is a technology company revolutionizing how
              individuals , startups and enterprises innovate, automate, and
              accelerate their success.
            </p>
            <Link to="/contact">
              <button className="bg-[#432CF2] jakarta hover:bg-black text-white text-xl px-5 py-3 rounded-lg">
                Get Started
              </button>
            </Link>
          </motion.div>

          <div className="md:relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 1 }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              className="md:mr-28"
            >
              <img
                src={AboutHero}
                alt=""
                className="rounded-xl md:my-0 my-10"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.3, delay: 1.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="bg-white rounded-xl md:absolute bottom-28 md:right-5 lg:right-0"
            >
              <div className="flex text-[#585858] items-center gap-5 px-5 lg:px-20 py-12 justify-center">
                <div>
                  <div className="text-5xl text-black jakarta font-bold">
                    100+
                  </div>
                  <div className="lg:text-xl tracking-wide inter pt-3">
                    Total Project Done
                  </div>
                </div>
                <div></div>
                <div>
                  <div className="text-5xl text-black jakarta font-bold">
                    25k+
                  </div>
                  <div className="text-[#585858] inter tracking-wide  lg:text-xl pt-3">
                    Worldwide Customers
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-white md:py-20 py-10 md:px-0 px-5">
        <Slide
          cascade={true}
          triggerOnce={true}
          direction="up"
          className="flex flex-col items-center justify-center"
        >
          <div className="text-center mx-auto font-bold">
            <h3 className="text-xl jakarta text-[#432CF2]">Our Values</h3>
            <p className="text-center text-xl jakarta text-[#0C1523] md:text-5xl md:w-[60%] md:pt-10 mx-auto font-semibold">
              Our Values Building a Strong Foundation for Success
            </p>
          </div>
        </Slide>

        <Slide cascade={true} triggerOnce={true} direction="up">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 sm:grid-cols-2  md:justify-center gap-5 md:gap-10 pt-10 mx-auto md:w-5/6 md:pt-20 ">
            {valuesData.map((value, index) => (
              <div
                key={index}
                className=" flex flex-col gap-y-5 w-full px-5 py-10 rounded-xl text-center  items-center justify-center border-[3px] border-[#F9F9F9] hover:scale-105 transition-transform duration-300 ease-in-out hover:border-none hover:shadow-xl"
              >
                <div className="rounded-full bg-[#F5F3FE]  flex items-center justify-center size-24">
                  <img
                    src={value.icon}
                    alt={value.name}
                    className="mx-auto size-16"
                  />
                </div>
                <h3 className="text-2xl font-bold text-[#24315F] jakarta mb-4">
                  {value.name}
                </h3>
                <p className="text-[#585858] inter tracking-wide md:text-xl">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </Slide>
      </section>

      <section className="py-20 md:px-0 px-5 bg-[#F9F9F9]">
        <div className="mx-auto md:w-5/6">
          <Slide cascade={true} triggerOnce={true} direction="up">
            <div className="flex flex-col gap-y-5">
              <h3 className="text-[#432CF2] font-bold jakarta text-xl">
                Our Team
              </h3>

              <div className="md:flex justify-between items-center">
                <h1 className="uppercase jakarta text-xl md:text-2xl font-bold md:w-[30%] text-[#0C1523]">
                  Meet the amazing team behind Virgil
                </h1>

                <div className="flex md:justify-center gap-4 md:gap-8 md:pt-0 pt-5">
                  <div className="rounded-full bg-[#24315F] size-10 md:size-16 flex items-center justify-center">
                    <button onClick={() => splideRef.current.go("<")}>
                      <FaArrowLeftLong className="text-white size-5 md:size-8" />
                    </button>
                  </div>
                  <div className="rounded-full bg-[#24315F] size-10 md:size-16 flex items-center justify-center">
                    <button onClick={() => splideRef.current.go(">")}>
                      <FaArrowRightLong className="text-white size-5 md:size-8" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Splide
              options={{
                type: "slide",
                perPage: 3,
                // padding: 10,
                autoplay: true,
                interval: 3000,
                arrows: false,
                drag: "free",
                gap: "3rem",
                pagination: false,

                breakpoints: {
                  640: {
                    perPage: 1,
                  },
                },
              }}
              ref={(splide) => {
                splideRef = splide;
              }}
              className="md:flex md:py-10 "
            >
              {teamData.map((member, index) => {
                return (
                  <SplideSlide className="md:pt-0 pt-7" key={index}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="rounded-lg "
                    />

                    <h1 className="md:text-3xl jakarta text-xl pt-4 md:pt-8 pb-2 font-semibold">
                      {member.name}
                    </h1>

                    <h3 className="text-xl jakarta font-medium text-[#432CF2]">
                      {member.position}
                    </h3>
                  </SplideSlide>
                );
              })}
            </Splide>
          </Slide>
        </div>
      </section>

      <Product />
    </main>
  );
};

export default About;
