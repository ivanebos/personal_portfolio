/**********Import nessesities **********/
import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

/**********Import ICONS **********/
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";
import { BiHome, BiCodeAlt } from "react-icons/bi";
import { BsFillMoonStarsFill, BsSunFill } from "react-icons/bs";
import { IoMdContact } from "react-icons/io";

/**********Import Sections *********/

import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Contact from "./Contact";

/**********Import images **********/
import logo from "../public/logo.png";
import face from "../public/face.png";

import CV from "../public/Ivan_Ebos_Resume.pdf";

const Home: NextPage = () => {
  // init variables
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMe] = useState(false);
  const [activeIcon, setActive] = useState(1);

  return (
    <div className={"scroll-smooth " + (darkMode ? "dark" : "")}>
      <Head>
        <title>Ivan Ebos Portofolio</title>
        <link rel="icon" href="/Logo_IE.png" />
      </Head>
      <main className=" bg-white dark:bg-gray-900 ">
        {/* --------------------------Nav Bar-------------------------- */}
        <nav className="hidden md:flex px-10 md:px-15 lg:px-40 justify-between shadow-lg dark:bg-slate-800 sticky top-0 backdrop-blur-lg z-10">
          <a href="#">
            <Image className=" w-40 my-5 dark:invert" src={logo} alt="" />
          </a>
          <ul className="hidden md:flex items-center font-mono dark:text-white">
            <li className="hover:scale-125 transition-all">
              <BsFillMoonStarsFill
                className={
                  "dark:text-white transition-all " + (darkMode ? "hidden" : "")
                }
                onClick={() => setDarkMode(!darkMode)}
              />
              <BsSunFill
                className={
                  "dark:text-white scale-[1.4] transition-all " +
                  (darkMode ? "" : "hidden")
                }
                onClick={() => setDarkMode(!darkMode)}
              />
            </li>
            <li className="hover:scale-110 transition-all">
              <a
                className=" px-4 py-2 ml-8 hover:border-b-4 hover:border-blue-500  transition-all"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="hover:scale-110 transition-all">
              <a
                className=" px-4 py-2 ml-8 hover:border-b-4 hover:border-blue-500 transition-all"
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="hover:scale-110 transition-all">
              <a
                className=" px-4 py-2 ml-8 hover:border-b-4 hover:border-blue-500  transition-all"
                href="#contact"
              >
                Contact
              </a>
            </li>

            <li className="hover:scale-110 transition-all">
              <a
                href={CV}
                download
                className=" border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-md ml-8 hover:bg-blue-500 hover:text-white transition-all"
              >
                Resume
              </a>
            </li>
          </ul>
          <div className="md:hidden flex items-center gap-10">
            <div className="hover:scale-125 transition-all">
              <BsFillMoonStarsFill
                className={" transition-all " + (darkMode ? "hidden" : "")}
                onClick={() => setDarkMode(!darkMode)}
              />
              <BsSunFill
                className={
                  "text-white scale-[1.4] transition-all " +
                  (darkMode ? "" : "hidden")
                }
                onClick={() => setDarkMode(!darkMode)}
              />
            </div>
            <button
              onClick={() => setShowMe(!showMenu)}
              className="dark:text-white hover:scale-125"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0l-3.75-3.75M17.25 21L21 17.25"
                />
              </svg>
            </button>
          </div>
        </nav>

        <nav className="md:hidden py-3 px-7 fixed left-1/2 flex items-center gap-5 translate-x-[-50%] bottom-11 rounded-full backdrop-blur-3xl z-20 shadow-md dark:text-white">
          <a
            href="#"
            onClick={() => setActive(1)}
            className={
              "p-1 text-2xl transition-all " +
              (activeIcon === 1 ? "text-blue-500 scale-125" : "")
            }
          >
            <BiHome />
          </a>
          <a
            href="#skills"
            onClick={() => setActive(2)}
            className={
              "p-1 text-2xl transition-all " +
              (activeIcon === 2 ? "text-blue-500 scale-125" : "")
            }
          >
            <BiCodeAlt />
          </a>
          <a
            href="#portfolio"
            onClick={() => setActive(3)}
            className={
              "p-1 text-2xl transition-all " +
              (activeIcon === 3 ? "text-blue-500 scale-125" : "")
            }
          >
            <AiOutlineFundProjectionScreen />
          </a>
          <a
            href="#contact"
            onClick={() => setActive(4)}
            className={
              "p-1 text-2xl transition-all " +
              (activeIcon === 4 ? "text-blue-500 scale-125" : "")
            }
          >
            <IoMdContact />
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={"p-1 text-lg " + (darkMode ? "hidden" : "")}
          >
            <BsFillMoonStarsFill />
          </button>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={"p-1 text-lg " + (darkMode ? "" : "hidden")}
          >
            <BsSunFill />
          </button>
        </nav>

        {/* --------------------------About Me-------------------------- */}
        <section
          id="home"
          className=" flex items-center justify-center min-h-[calc(100vh-11rem)] py-10 px-10 md:px-20 lg:px-40"
        >
          <div className=" flex flex-col md:flex-row md:justify-between gap-10">
            <div className="text-center md:text-left">
              <h2 className="font-mono text-5xl py-2 text-blue-600 font-medium md:text-6xl">
                Ivan Ebos
              </h2>
              <h3 className=" font-mono text-2xl py-2 md:text-3xl dark:text-white">
                Software Developer
              </h3>
              <p className="font-mono pt-5 leading-8 md:text-xl max-w-xl mx-auto dark:text-white">
                Welcome to my personal portfolio!
              </p>
              <p className="font-mono leading-8 md:text-lg max-w-xl mx-auto dark:text-white">
                I am a third-year student currently attending McMaster
                University, pursuing a degree in Computer Science.
              </p>
            </div>

            <div className="flex  justify-evenly text-5xl text-gray-600 md:flex-col ">
              <a href="https://github.com/ivanebos">
                <AiFillGithub className="dark:text-white bg-transparent hover:scale-125 transition-all " />
              </a>
              <a href="https://www.linkedin.com/feed">
                <AiFillLinkedin className="dark:text-white  hover:scale-125 transition-all " />
              </a>
            </div>

            <div className="relative mx-auto bg-gradient-to-b from-blue-500 to-white rounded-full w-80 h-80 overflow-hidden md:h-80 md:w-80">
              <Image
                className="mt-5"
                src={face}
                layout="fill"
                objectFit="cover"
                alt=""
              />
            </div>
          </div>
        </section>
        <Skills />
        <Portfolio />
        <Contact />

        {/* --------------------------Footer-------------------------- */}
        <section className="bg-gray-100 pb-20 md:pb-0 px-10 md:px-20 lg:px-40 dark:bg-slate-800 mt-10">
          <div className="text-center py-7 ">
            <Image
              className="mx-auto w-40 dark:invert pb-3"
              src={logo}
              alt=""
            />

            <div className="text-gray-500 dark:text-gray-400 text-sm">
              <p className="whitespace-nowrap">
                Est. 2023 | Designed and Coded | By Ivan Ebos
              </p>
            </div>
          </div>
          <div></div>
        </section>
      </main>
    </div>
  );
};

export default Home;
