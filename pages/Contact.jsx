/**********Import **********/
import { useState } from "react";
import React, { useRef } from "react";

/**********Import libraires **********/
import emailjs from "emailjs-com";

/**********Import lcons **********/
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Contact = () => {
  const form = useRef();

  //init variables
  const [nameValue, setName] = useState("");
  const [emailValue, setEmail] = useState("");
  const [messageValue, setMessage] = useState("");

  const [sentVisible, setSent] = useState(false);

  const inName = (e) => setName(e.target.value);
  const inEmail = (e) => setEmail(e.target.value);
  const inMessage = (e) => setMessage(e.target.value);

  //sent feedback function
  const handleButtonClick = () => {
    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 2000);
  };

  //send email function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8nud22p",
        "template_o78wbel",
        form.current,
        "0blBhEceoUK5-tGoC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setMessage("");

    handleButtonClick();
  };
  return (
    <section id="contact" className="px-10 md:px-20 lg:px-40 md:pt-24">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center ">
        <div className="md:pb-2">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 dark:text-white">
            Contact Me
          </p>

          <p className="py-6 dark:text-gray-400">Get in Touch</p>
        </div>
        <div className="flex flex-col-reverse md:flex-row gap-10 ">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-3 dark:text-gray-300 w-full h-full"
          >
            <input
              className=" rounded border-2 p-3 bg-transparent"
              type="text"
              name="name"
              value={nameValue}
              onInput={inName}
              placeholder="Your Full Name"
              required
            />
            <input
              className=" rounded border-2 p-3 bg-transparent"
              type="text"
              name="email"
              value={emailValue}
              onInput={inEmail}
              placeholder="Your Email"
              required
            />

            <textarea
              className=" rounded border-2 p-3 resize-none bg-transparent"
              name="message"
              id=""
              rows="7"
              value={messageValue}
              onInput={inMessage}
              placeholder="Your Message"
              required
            ></textarea>
            <div className="flex items-center gap-5">
              <button
                type="submit"
                className="font-mono border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md w-full md:w-40 hover:bg-blue-500 hover:text-white transition-all"
              >
                Send Message
              </button>

              <p
                className={
                  "text-blue-600 text-lg transition-all select-none " +
                  (sentVisible ? "" : "opacity-0")
                }
              >
                Sent!
              </p>
            </div>
          </form>
          <div className=" flex-row space-y-2">
            <div className="pb-3 text-center md:text-left flex flex-col gap-1 dark:text-gray-400">
              <p className="md:max-w-xl lg:max-w-2xl text-lg">
                <b className="dark:text-gray-300">Thank you</b> for taking the
                time to visit my portfolio.
              </p>
              <p className="md:max-w-xl lg:max-w-2xl text-lg">
                I would love to hear from you and discuss any potential{" "}
                <b className="dark:text-gray-300">opportunities</b> or{" "}
                <b className="dark:text-gray-300">collaborations</b>.
              </p>

              <p className="md:max-w-xl lg:max-w-2xl text-lg">
                Please don't hesitate to reach out via{" "}
                <b className="dark:text-gray-300">email</b>.
              </p>
            </div>
            <div className="flex flex-col justify-center mx-10 gap-2 text-center md:text-left">
              <a href="mailto: ebosi@mcmaster.ca">
                <div className="flex justify-center md:justify-start gap-2 font-mono border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md  hover:bg-blue-500 hover:text-white transition-all">
                  <AiOutlineMail className="" size={20} />

                  <p className=" ">ebosi@mcmaster.ca</p>
                </div>
              </a>
              <a href="https://www.google.com/maps?client=firefox-b-d&q=hamilton+ontario&um=1&ie=UTF-8&sa=X&ved=2ahUKEwiczsKlz9v9AhVSmmoFHcVYARIQ0pQJegQIBBAC">
                <div className="flex justify-center md:justify-start gap-2 font-mono border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md hover:bg-blue-500 hover:text-white transition-all">
                  <HiOutlineLocationMarker className="" size={20} />

                  <p className="">Hamilton, ON</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
