import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

function Footer() {
  return (
    <div className="text-[#585858] inter py-16 bg-gradient-to-tr from-blue-200  to-white h-full">
      <div className="container mx-auto px-4 md:px-8 lg:px-16 xl:px-20 2xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 w-[100%] gap-8">
          <div>
            <h1 className="jakarta text-3xl text-[#4285F4] font-bold">
              Virgil Africa
            </h1>

            <p className="mb-4 text-md lexend mt-5">
              Virgil Africa is a technology company that specializes in building
              innovative solutions for individuals, startups, and enterprises to
              automate business processes, improve productivity, and drive
              innovation.
            </p>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="lexend hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="lexend hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl  text-[#4285F4] md:text-2xl jakarta font-bold mb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 lexend">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/#services" className="hover:underline">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/#why_us" className="hover:underline">
                  Why Us
                </a>
              </li>
              <li>
                <a href="/#clients" className="hover:underline">
                  Our Clients
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:underline">
                  Projects
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl jakarta  text-[#4285F4] md:text-2xl font-bold mb-2">
              Reach Out to Us
            </h3>
            <div class="flex text-md lexend flex-col gap-2">
              <a class="flex  gap-1 items-center">
                <TiSocialFacebook class="text-3xl" />
                <p>Facebook</p>
              </a>
              <a class="flex  gap-1 items-center">
                <FaTwitter class="text-3xl" />
                <p>Twitter</p>
              </a>
              <a class="flex  gap-1 items-center">
                <AiFillInstagram class="text-3xl" />
                <p>Instagram</p>
              </a>
              <a class="flex  gap-1 items-center">
                <IoIosCall class="text-3xl" />
                <p>+254 740 769 596</p>
              </a>
              <a class="flex  gap-1 items-center">
                <IoMdMail class="text-3xl" />
                <p>info@virgil.africa</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
