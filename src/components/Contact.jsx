import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!name || !email || !subject || !message || !phone) {
      toast.error("Please fill in all fields", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      return;
    }

    setIsSubmitting(true);

    const formData = {
      name,
      email,
      subject,
      message,
      phone,
    };

    try {
      const response = await fetch("https://formspree.io/f/xnnawdyn", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        setPhone("");
        setIsSuccess(true);
        toast.success("Message sent successfully!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });

        // Set timeout to reset the button back to "Send Message"
        setTimeout(() => {
          setIsSuccess(false);
        }, 3000); // Reset after 3 seconds
      } else {
        toast.error("Something went wrong. Please try again later.", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div id="contact" className="my-12 md:mx-16 p-4">
      <ToastContainer />
      <div className="w-[100%] flex md:flex-row flex-col gap-8 justify-between items-start">
        <div className="md:w-[48%] w-[100%] flex flex-col gap-4">
          <h1 className="text-3xl font-bold mt-4 text-[#0b3369] jakarta  md:text-6xl">
            Let's discuss your project
          </h1>
          <h1 className="md:text-xl mt-1 lexend  md:mt-4 text-[#0C1523]  mb-10">
            Our dedicated team of IT experts is committed to understanding your
            unique requirements and crafting tailored solutions that align with
            your business objectives.
          </h1>
        </div>
        <div className=" md:w-[48%] w-[100%] shadow-md shadow-gray-300 rounded-xl lg:p-4">
          <div className="p-4">
            <form onSubmit={sendEmail} className="lexend">
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input
                    type="text"
                    className="border-2  rounded-lg p-3"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col py-2 ">
                  <label className="uppercase text-sm py-2">Phone Number</label>
                  <PhoneInput
                    country={"ke"}
                    value={phone}
                    onChange={(phone) => setPhone(phone)}
                    inputClass="border-2 lexend  rounded-lg p-3 "
                    inputProps={{
                      name: "phone_number",
                      required: true,
                      autoFocus: true,
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Email</label>
                <input
                  type="email"
                  className="border-2  rounded-lg p-3 w-full"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Subject</label>
                <input
                  type="text"
                  className="border-2  rounded-lg p-3 w-full"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="flex flex-col py-2">
                <label className="uppercase text-sm py-2">Message</label>
                <textarea
                  className="border-2  rounded-lg p-3 border-gray-300 "
                  rows="10"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className={`w-full p-4 shadow-xl shadow-gray-400 rounded-xl uppercase ${
                  isSuccess
                    ? "bg-green-500"
                    : "bg-gradient-to-r from-[#0b3369] to-[#709dff]"
                } text-white`}
                disabled={isSubmitting}
              >
                {isSuccess
                  ? "Message Sent"
                  : isSubmitting
                  ? "Sending..."
                  : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
