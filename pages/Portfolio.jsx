import React from "react";

import { FiGithub } from "react-icons/fi";
import { CiFolderOn } from "react-icons/ci";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      link: "https://github.com/ivanebos/SquareRunner",
      title: "Square Runner",
      description:
        "Utilized Object Oriented Programming to design and create an interactive Player vs. AI game in Python. Implemented game graphics using PyGame.",

      tech: ["Python", "PyGame", "OOP"],
    },
    {
      id: 2,
      link: "https://github.com/ivanebos",
      title: "Recursive Descent Parser",
      description:
        "Designed a predictive grammar to accept boolean expressions then implemented the grammar using a recursive descent parser.",
      tech: ["Python", "Discrete math"],
    },
    {
      id: 3,
      link: "https://github.com/ivanebos",
      title: "SQL Design Project",
      description:
        "Given a description of system requirements, I designed an ER Model, then implemented the ER model using SQL. Launched SQL scripts to test and view information from the database.",
      tech: ["SQL", "PosgreSQL", "ER Diagrams"],
    },
    {
      id: 4,
      link: "https://github.com/ivanebos",
      title: "Concurrent Addition",
      description:
        "Created multi-threading programming to calculate the summation of an array of millions of numbers.",
      tech: ["Golang", "C", "Multi-Threading"],
    },
  ];

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
              className="px-7 py-8 dark:text-white shadow-md  flex flex-col justify-between  dark:shadow-blue-700 hover:shadow-2xl transition-all hover:scale-110"
            >
              <div>
                <div className="flex justify-between items-center pb-10 ">
                  <CiFolderOn size={50} className="text-blue-600" />

                  <a href={link}>
                    <FiGithub
                      size={25}
                      className="text-black hover:scale-110 dark:text-white"
                    />
                  </a>
                </div>

                <p className="text-xl font-semibold pb-4 ">{title}</p>

                <p className="text-md pb-4 text-gray-700 dark:text-gray-500">
                  {description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-sm text-blue-600">
                {tech.map((skill, index) => (
                  <div key={index} className={" whitespace-nowrap"}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
