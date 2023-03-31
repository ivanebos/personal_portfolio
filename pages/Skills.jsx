import React from "react";
import { useState } from "react";

// Icons Sorted A-Z
import {
  AiFillHtml5,
  AiFillCaretDown,
  AiFillCaretUp,
  AiFillCode,
} from "react-icons/ai";
import { BsDatabase, BsFillCCircleFill, BsGit } from "react-icons/bs";
import { DiNodejsSmall, DiLinux } from "react-icons/di";
import { FaReact, FaPython, FaJava } from "react-icons/fa";
import { GiProcessor, GiCape } from "react-icons/gi";
import { GrVmware } from "react-icons/gr";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { MdVideogameAsset } from "react-icons/md";
import { RiFileExcel2Fill } from "react-icons/ri";
import {
  SiTailwindcss,
  SiHaskell,
  SiCsharp,
  SiOctave,
  SiRstudio,
  SiPostgresql,
  SiMicrosoftoffice,
  SiSelenium,
  SiDotnet,
  SiNumpy,
  SiVirtualbox,
} from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandGolang,
  TbBrandVscode,
  TbHexagonLetterV,
  TbCircleLetterV,
  TbBrandPowershell,
} from "react-icons/tb";

export default function SkillsScreen() {
  const [showSkill1, setSkill1] = useState(false);
  const [showSkill2, setSkill2] = useState(false);
  const [showSkill3, setSkill3] = useState(false);
  const [showSkill4, setSkill4] = useState(false);

  const skills = [
    {
      id: 1,
      title: "Web \n Development",
      discription: (
        <p className="text-lg">
          As a web developer, I have a diverse set of skills that enable me to
          create dynamic and engaging websites. With a strong foundation in{" "}
          <b className="dark:text-gray-200">HTML</b>,{" "}
          <b className="dark:text-gray-200">CSS</b>, and{" "}
          <b className="dark:text-gray-200">JavaScript</b>, I am able to craft
          websites that are both aesthetically pleasing and highly functional.
          <br />
          <br />I am also proficient in various front-end and back-end
          frameworks, which allow me to build{" "}
          <b className="dark:text-gray-200">scalable</b> and{" "}
          <b className="dark:text-gray-200">efficient</b> websites. I enjoy
          learning new technologies to help improve my web development skills,
          currently, I have taken interest in learning more about the{" "}
          <b className="dark:text-gray-200">three.js</b> framework.
        </p>
      ),

      skillFunc: setSkill1,
      skillVar: showSkill1,
      format: false,
      items: [
        [<AiFillHtml5 className="dark:text-gray-100" />, "HTML5", true],
        [<IoLogoCss3 className="dark:text-gray-100" />, "CSS", true],
        [<SiTailwindcss className="dark:text-gray-100" />, "Tailwind", false],
        [
          <IoLogoJavascript className="dark:text-gray-100" />,
          "Javascript",
          true,
        ],
        [<FaReact className="dark:text-gray-100" />, "React", false],
        [<TbBrandNextjs className="dark:text-gray-100" />, "Next.js", false],
        [<DiNodejsSmall className="dark:text-gray-100" />, "Node.js", false],
        [
          <TbHexagonLetterV className="dark:text-gray-100" />,
          "Vanta.js",
          false,
        ],
      ],
    },
    {
      id: 2,
      title: "Programing",
      discription: (
        <p className="text-lg">
          As a programmer, I am passionate about software and have a wide range
          of skills in different programming domains. From game development to
          enterprise software, I have experience working with various
          programming languages, my strongest being{" "}
          <b className="dark:text-gray-200">Python</b>,{" "}
          <b className="dark:text-gray-200">Java</b>, and{" "}
          <b className="dark:text-gray-200">C</b>.
          <br />
          <br />I am constantly exploring new technologies to expand my
          knowledge and skills. My current field of interest has been with web
          development. In the future I hope to expand my knowledge in the
          <b className="dark:text-gray-200"> cybersecurity</b> and{" "}
          <b className="dark:text-gray-200">automotive industry</b>. I am always
          eager to take on new challenges. With every new challenge, I strive to
          create <b className="dark:text-gray-200">efficient</b>,{" "}
          <b className="dark:text-gray-200">scalable</b>, and{" "}
          <b className="dark:text-gray-200">maintainable</b> solutions.
        </p>
      ),
      skillFunc: setSkill2,
      skillVar: showSkill2,
      format: true,
      items: [
        [<FaPython className="dark:text-gray-100" />, "Python", true],
        [<MdVideogameAsset className="dark:text-gray-100" />, "PyGame", false],
        [<SiCsharp className="dark:text-gray-100" />, "C#", true],
        [<SiSelenium className="dark:text-gray-100" />, "Selenium", false],
        [<SiDotnet className="dark:text-gray-100" />, ".Net", false],
        [<FaJava className="dark:text-gray-100" />, "Java", true],
        [<SiHaskell className="dark:text-gray-100" />, "Haskell", true],
        [<BsDatabase className="dark:text-gray-100" />, "SQL", true],
        [<SiPostgresql className="dark:text-gray-100" />, "Postgres", false],
        [<TbBrandGolang className="dark:text-gray-100" />, "Golang", true],
        [<BsFillCCircleFill className="dark:text-gray-100" />, "C", true],
        [<AiFillCode className="dark:text-gray-100" />, "POSIX", false],
      ],
    },
    {
      id: 3,
      title: "Data Science & Analysis",
      discription: (
        <p className="text-lg">
          As someone with a passion for math, I possess a deep curiosity and
          appreciation for the insights that can be gleaned from data. Using my
          technical skills I can effectively{" "}
          <b className="dark:text-gray-200">process</b>,{" "}
          <b className="dark:text-gray-200">analyze</b>, and{" "}
          <b className="dark:text-gray-200">interpret</b> complex data sets.
          <br />
          <br />
          My current journey to achieve a minor in math provides me with a
          strong foundation in{" "}
          <b className="dark:text-gray-200">quantitative methods</b> and{" "}
          <b className="dark:text-gray-200">statistical techniques</b> that are
          essential for success in the field of data analysis.{" "}
        </p>
      ),
      skillFunc: setSkill3,
      skillVar: showSkill3,
      format: false,
      items: [
        [<FaPython className="dark:text-gray-100" />, "Python", true],
        [<SiNumpy className="dark:text-gray-100" />, "NumPy", false],
        [<SiRstudio className="dark:text-gray-100" />, "R-Studio", true],
        [<GiCape className="dark:text-gray-100" />, "Matlab", true],
        [<SiOctave className="dark:text-gray-100" />, "Octave", true],
        [<RiFileExcel2Fill className="dark:text-gray-100" />, "MS Excel", true],
        [<TbCircleLetterV className="dark:text-gray-100" />, "VB", false],
      ],
    },
    {
      id: 4,
      title: "Other Skills",
      discription: (
        <p className="text-lg">
          In today's rapidly evolving tech industry, possessing a diverse tool
          set is crucial to stay competitive. Some of my experiences include
          working with visualization software such as{" "}
          <b className="dark:text-gray-300">VMware</b> and{" "}
          <b className="dark:text-gray-300">VirtualBox</b>. My familiarity with{" "}
          <b className="dark:text-gray-300">Linux</b> and{" "}
          <b className="dark:text-gray-300">Shell</b> enables me to navigate and
          troubleshoot operating systems with ease.
          <br /> <br />
          My utilization of <b className="dark:text-gray-300">
            VSCode
          </b> and <b className="dark:text-gray-300">MS-Suite</b> improves my
          organization and productivity to become an effective programmer and
          project manager. Finally, my knowledge of{" "}
          <b className="dark:text-gray-300">Git</b> allows me to collaborate
          effectively with team members. Combining these skills and experience I
          am able to effectively carry out any project or problem.
        </p>
      ),
      skillFunc: setSkill4,
      skillVar: showSkill4,
      format: true,
      items: [
        [<GrVmware className="dark:text-gray-100" />, "VMware", true],
        [<SiVirtualbox className="dark:text-gray-100" />, "VirtualBox", true],

        [<DiLinux className="dark:text-gray-100" />, "Linux", true],
        [<TbBrandPowershell className="dark:text-gray-100" />, "Shell", true],
        [
          <SiMicrosoftoffice className="dark:text-gray-100" />,
          "MS-Suite",
          true,
        ],
        [<BsGit className="dark:text-gray-100" />, "Git", true],
        [<TbBrandVscode className="dark:text-gray-100" />, "VS-Code", true],
      ],
    },
  ];

  return (
    <section id="skills" className=" px-10 md:px-20 lg:px-40 md:pt-20 ">
      <div className="max-w-screen-lg py-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className=" md:mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 dark:text-white ">
            Skills
          </p>
          <p className="py-6 dark:text-gray-400">
            My Skills, Tools and Technologies
          </p>
        </div>
        {skills.map(
          ({ id, title, discription, skillFunc, skillVar, format, items }) => (
            <div
              key={id}
              className={
                "mb-10 flex flex-col-reverse md:flex-row md:justify-between md:gap-5 pb-5 " +
                (format ? "md:flex-row-reverse" : "")
              }
            >
              <div className="text-center md:text-left md:max-w-xl dark:text-gray-400 mx-auto md:mx-0">
                {discription}
              </div>

              <div className="md:py-0 py-5 ">
                <div
                  className=" font-medium border-2 border-blue-400 rounded py-2 px-4 mb-2 flex justify-center gap-5 items-center text-blue-500 hover:bg-blue-500 hover:text-white transition-all"
                  onClick={() => skillFunc(!skillVar)}
                >
                  <h3 className=" select-none whitespace-nowrap pl-5 text-xl md:pl-0 dark:text-white ">
                    {title}
                  </h3>

                  <AiFillCaretDown
                    className={" " + (skillVar ? "hidden " : "dark:text-white")}
                  />
                  <AiFillCaretUp
                    className={" " + (skillVar ? "dark:text-white" : "hidden")}
                  />
                </div>

                <div
                  className={
                    "  " +
                    (skillVar ? "" : "hidden md: invisible md:block ") +
                    (format ? "md:pl-8" : "md:pr-8 md:float-right")
                  }
                >
                  {items.map((item, index) => (
                    <div
                      key={index}
                      className={
                        "flex justify-center md:justify-start items-center " +
                        (item[2] ? "font-semibold" : "md:pl-5")
                      }
                    >
                      {item[0]}
                      <p className=" text-lg ml-2 text-gray-800 dark:text-gray-100">
                        {item[1]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
