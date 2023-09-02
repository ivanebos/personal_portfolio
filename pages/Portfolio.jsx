import React from "react";

import { FiGithub } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      link: "https://github.com/ivanebos/fit-app",
      title: "Log Fit",
      description:
        "Created a personalized workout tracking platform that allows individuals to monitor and track progress over time of their fitness journeys. ",
      tech: [
        "MongoDB",
        "React",
        "Express.js",
        "Node.js",
        "Web Tokens",
        "Tailwind",
      ],
    },
    {
      id: 2,
      link: "https://github.com/ivanebos/personal_portfolio",
      title: "Personal Portfolio",
      description:
        "Developed and launched a personal portfolio website to showcase my skills, projects, and professional accomplishments.",
      tech: ["Javascript", "React", "Tailwind", "Netlify", "Next.js"],
    },
    {
      id: 3,
      link: "https://github.com/ivanebos/SquareRunner",
      title: "Square Runner",
      description:
        "Designed an engaging 2D Player vs. Computer action game that invites users battles against endless generated enemies. Players collect randomly generated weaponry on they progress",
      tech: ["Python", "PyGame", "OOP"],
    },
    {
      id: 4,
      link: "https://github.com/ivanebos/RecursiveDescentParser",
      title: "Recursive Descent Parser",
      description:
        "Engineered a predictive grammar capable of processing boolean expressions, followed by the implementation of a recusive descent parser for this grammer.",
      tech: ["Python", "Backus–Naur form"],
    },
    {
      id: 5,
      link: "https://github.com/ivanebos/SQLDesignProject",
      title: "SQL Design Project",
      description:
        "Given a description of system requirements, I designed an ER Model, then implemented the ER model using SQL. Launched SQL scripts to validate and query information from the database.",
      tech: ["SQL", "PosgreSQL", "ER Diagrams"],
    },
    {
      id: 6,
      link: "https://github.com/ivanebos/ConcurrentAddition",
      title: "Concurrent Addition",
      description:
        "Created multi-threading programming to calculate the summation of an array containing millions of numbers.",
      tech: ["Golang", "C", "Multi-Threading"],
    },
  ];

  const handleButtonClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section id="portfolio" className="px-10 md:px-20 lg:px-40 md:pt-24">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" md:pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 dark:text-white">
            Portfolio
          </p>

          <p className="py-6 dark:text-gray-400">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {portfolios.map(({ id, link, title, description, tech }) => (
            <div
              key={id}
              className="px-7 py-8 dark:text-white shadow-md  dark:shadow-blue-700 hover:shadow-2xl transition-all hover:scale-110"
            >
              <button
                className="text-left flex flex-col justify-between h-full"
                onClick={() => handleButtonClick(link)}
              >
                <div>
                  <div className="flex justify-between items-center pb-10 ">
                    <CiFolderOn size={50} className="text-blue-600" />

                    <a href={link}>
                      <FiGithub
                        size={25}
                        className="text-black hover:scale-125 dark:text-white transition-all"
                      />
                    </a>
                  </div>

                  <p className="text-xl font-semibold pb-4 ">{title}</p>

                  <p className="text-md pb-4 text-gray-700 dark:text-gray-500">
                    {description}
                  </p>
                </div>

                <div className=" text-sm text-blue-600 ">
                  {/*tech.map((skill, index) => (
                    <div key={index} className={" whitespace-nowrap"}>
                      {skill}
                    </div>
               ))*/}
                  {tech.join(" , ")}
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
