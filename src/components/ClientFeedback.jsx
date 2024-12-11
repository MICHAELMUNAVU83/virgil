import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

const ClientFeedback = () => {
  const swipe = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slideNext();
  };

  const swipeBack = () => {
    const swiper = document.querySelector(".swiper-container").swiper;
    swiper.slidePrev();
  };

  const testimonials = [
    {
      name: "Nyambura Kamau",
      location: "Nairobi",
      testimonial:
        "Your web development team did an outstanding job on our company website. It's sleek, modern, and perfectly represents our brand. Thank you!",
    },
    {
      name: "Ochieng Odhiambo",
      location: "Mombasa",
      testimonial:
        "The AI and machine learning solutions your company provided have revolutionized our data analytics. We're now able to make data-driven decisions with confidence.",
    },
    {
      name: "Sarah Johnson",
      location: "New York City",
      testimonial:
        "The web development services provided by your team exceeded my expectations. Our new site is not only visually appealing but also highly functional. Thank you!",
    },
    {
      name: "Kevin Smith",
      location: "San Francisco",
      testimonial:
        "The AI and machine learning solutions have transformed our data processes. We now make informed decisions faster than ever before. Highly recommend!",
    },
  ];

  return (
    <div id="testimonials">
      <div className="flex flex-col md:mx-16 lg:flex-row items-start justify-center min-h-screen md:p-6">
        <div className="md:relative lg:w-1/2 w-full p-4">
          <img
            src="/client_feedback.jpg"
            alt="Client"
            className="w-screen md:h-screen  h-[400px] rounded-lg object-top shadow-lg object-cover"
          />
          <div className="md:absolute md:left-0 md:top-3/4 transform md:-translate-y-1/2">
            <div className="bg-white mt-5 p-6 md:p-12 rounded-lg shadow-lg flex items-center">
              <div className="mr-4 pr-5 border-r border-gray-300">
                <p className="md:text-6xl text-3xl text-[#0C1523] jakarta font-bold">
                  25+
                </p>
                <p className="text-gray-600 lexend">Total Projects Done</p>
              </div>
              <div className="ml-4 pl-4">
                <p className="md:text-6xl text-3xl jakarta text-[#0C1523] font-bold">
                  40+
                </p>
                <p className="text-gray-600 lexend">Businesses Automated</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 w-full p-4 flex flex-col justify-start">
          <div className="bg-white p-8">
            <h2 className="text-[#4285F4] jakarta text-xl font-semibold ">
              Client Feedback
            </h2>
            <h1 className="text-3xl font-bold mt-4 text-[#0C1523] jakarta  md:text-6xl mb-10">
              People who already love our tech solutions.
            </h1>
            <Swiper
              loop={true}
              scrollbar={{
                draggable: true,
                hide: false,
              }}
              className="swiper-container"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide className="">
                  <blockquote className="mt-4 text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70"
                      height="70"
                      viewBox="0 0 24 24"
                      fill="#4285F4"
                      className="mb-10"
                    >
                      <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                    </svg>
                    <p className="text-xl lexend tracking-wide">
                      {testimonial.testimonial}
                    </p>
                    <footer className="mt-4">
                      <p className="text-xl font-semibold p-2 jakarta text-black">
                        {testimonial.name}
                      </p>
                      <p className="text-[#4285F4] p-2 jakarta">
                        {testimonial.location}
                      </p>
                    </footer>
                  </blockquote>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="flex justify-start mt-6">
            <button
              className="p-4 mx-2 bg-gray-200 rounded-full hover:bg-[#4285F4] transition-all ease-in-out duration-500 cursor-pointer"
              onClick={swipeBack}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
                className="hover:fill-white"
              >
                <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
              </svg>
            </button>
            <button
              className="p-4 mx-2 bg-gray-200 rounded-full hover:bg-[#4285F4] transition-all ease-in-out duration-500 cursor-pointer"
              onClick={swipe}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#000000"
                viewBox="0 0 256 256"
                className="hover:fill-white"
              >
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
