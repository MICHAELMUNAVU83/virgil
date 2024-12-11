import { motion } from "framer-motion";
import AboutTeam from "../../public/assets/about-team.jpg";

function Product() {
  return (
    <section className="md:py-40 py-10 w-full bg-white">
      <div className="md:flex md:gap-5 md:px-0 px-5 mx-auto md:w-5/6 ">
        <div className="md:w-[50%] md:hidden block mb-10 rounded-xl overflow-hidden">
          <img src={AboutTeam} alt="" className="w-full  " />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="md:w-[50%] justify-center text-start flex flex-col gap-y-5  lg:gap-y-10 "
        >
          <h1 className="text-[#432CF2] jakarta text-xl font-bold">
            When you choose us, you're choosing
          </h1>
          <h2 className="jakarta font-bold text-2xl md:text-3xl lg:text-5xl w-[80%]">
            Excellence, Customization, and Transparency.
          </h2>
          <p className="text-[#585858] inter tracking-wide md:text-2xl">
            Our dedicated team of experts will transform your ideas into digital
            realities, uniquely crafted to suit your needs. With us as your
            partner, you can rest assured that your vision will be brought to
            life with precision and care. Experience the difference of working
            with Virgil Africa today.
          </p>
          <Link to="/contact">
            <button className="bg-[#432CF2] jakarta font-bold hover:bg-black text-white text-xl  px-5 py-3 rounded-lg">
              Get Started
            </button>
          </Link>
        </motion.div>

        <div className="md:w-[50%] md:block hidden  rounded-xl overflow-hidden">
          <motion.img
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1 },
            }}
            src={AboutTeam}
            alt=""
            className="w-full  "
          />
        </div>
      </div>
    </section>
  );
}

export default Product;
