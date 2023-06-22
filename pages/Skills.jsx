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
  SiJquery,
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
  const [showSkill1, setSkill1] = useState(true);
  const [showSkill2, setSkill2] = useState(true);
  const [showSkill3, setSkill3] = useState(true);
  const [showSkill4, setSkill4] = useState(true);
  const [showSkill5, setSkill5] = useState(true);
  const [showSkill6, setSkill6] = useState(true);
  const [showSkill7, setSkill7] = useState(true);
  const [showSkill8, setSkill8] = useState(true);

  const skills = [
    {
      id: 1,
      title: "Web \n Development",
      discription: (
        <p className="text-lg">
          As a Web Developer, my diverse set of skills enables me to create
          dynamic and engaging websites. With a strong foundation in{" "}
          <b className="dark:text-gray-200">HTML</b>,{" "}
          <b className="dark:text-gray-200">CSS</b>, and{" "}
          <b className="dark:text-gray-200">JavaScript</b>, capable to craft
          websites that are both aesthetically pleasing and highly functional.
          <br />
          <br />
          Proficient in various front-end and back-end frameworks, which allows
          me to build <b className="dark:text-gray-200">scalable</b> and{" "}
          <b className="dark:text-gray-200">efficient</b> websites. I enjoy
          learning new technologies to help improve my web development skills,
          currently interested in learning more about the{" "}
          <b className="dark:text-gray-200">three.js</b> framework.
        </p>
      ),

      skillFunc1: setSkill1,
      skillFunc2: setSkill2,
      skillVar1: showSkill1,
      skillVar2: showSkill2,

      format: false,
      title1: "Languages",
      title2: "Frameworks",
      list1: [
        [<AiFillHtml5 />, "HTML5"],
        [<IoLogoCss3 />, "CSS"],
        [<IoLogoJavascript />, "Javascript"],
        [<SiCsharp />, "C#"],
      ],
      list2: [
        [<SiTailwindcss />, "Tailwind"],

        [<FaReact />, "React"],
        [<TbBrandNextjs />, "Next.js"],
        [<DiNodejsSmall />, "Node.js"],
        [<SiJquery />, "jQuery"],
        [<SiDotnet />, "ASP.net"],
      ],
    },
    {
      id: 2,
      title: "Programming",
      discription: (
        <p className="text-lg">
          As a programmer, passionate about software and possess a wide range of
          skills in different programming domains. From game development to
          enterprise software, experience working with various programming
          languages, my strongest being{" "}
          <b className="dark:text-gray-200">Python</b>,{" "}
          <b className="dark:text-gray-200">Java</b>, and{" "}
          <b className="dark:text-gray-200">C</b>.
          <br />
          <br />
          Constantly exploring new technologies to expand my knowledge and
          skills. My current field of interest has been with web development. In
          the future I hope to expand my knowledge in the
          <b className="dark:text-gray-200"> cybersecurity</b> and{" "}
          <b className="dark:text-gray-200">automotive</b> industry. Always
          eager to take on new challenges. With every new challenge, striving to
          create <b className="dark:text-gray-200">efficient</b>,{" "}
          <b className="dark:text-gray-200">scalable</b>, and{" "}
          <b className="dark:text-gray-200">maintainable</b> solutions.
        </p>
      ),
      skillFunc1: setSkill3,
      skillFunc2: setSkill4,
      skillVar1: showSkill3,
      skillVar2: showSkill4,
      format: true,
      title1: "Languages",
      title2: "Frameworks",
      list1: [
        [<FaPython />, "Python"],
        [<FaJava />, "Java"],
        [<SiHaskell />, "Haskell"],
        [<BsDatabase />, "SQL"],
        [<TbBrandGolang />, "Golang"],
        [<BsFillCCircleFill />, "C"],
      ],
      list2: [
        [<MdVideogameAsset />, "PyGame"],
        [<SiPostgresql />, "Postgres"],
        [<AiFillCode />, "POSIX"],
      ],
    },
    {
      id: 3,
      title: "Data Science & Analysis",
      discription: (
        <p className="text-lg">
          As someone with a passion for math, I possess a deep curiosity and
          appreciation for the insights that can be obtained from data. Using my
          technical skills, I can effectively{" "}
          <b className="dark:text-gray-200">process</b>,{" "}
          <b className="dark:text-gray-200">analyze</b>, and{" "}
          <b className="dark:text-gray-200">interpret</b> complex data sets.
          <br />
          <br />
          My minor in math provides me with a strong foundation in{" "}
          <b className="dark:text-gray-200">quantitative methods</b> and{" "}
          <b className="dark:text-gray-200">statistical techniques</b> that are
          essential for success in the field of data analysis.{" "}
        </p>
      ),
      skillFunc1: setSkill5,
      skillFunc2: setSkill6,
      skillVar1: showSkill5,
      skillVar2: showSkill6,
      format: false,
      title1: "Languages",
      title2: "Tools",
      list1: [
        [<FaPython />, "Python"],
        [<SiNumpy />, "NumPy"],
        [<SiRstudio />, "R-Studio"],
        [<TbCircleLetterV />, "VB"],
      ],
      list2: [
        [<GiCape />, "Matlab"],
        [<SiOctave />, "Octave"],
        [<RiFileExcel2Fill />, "MS Excel"],
      ],
    },
    {
      id: 4,
      title: "Other Skills",
      discription: (
        <p className="text-lg">
          In today's rapidly evolving tech industry, possessing a diverse tool
          set is crucial to stay competitive. Some of my experiences include
          working with virtualization software such as{" "}
          <b className="dark:text-gray-300">VMware</b> and{" "}
          <b className="dark:text-gray-300">VirtualBox</b>. My familiarity with{" "}
          <b className="dark:text-gray-300">Linux</b> and{" "}
          <b className="dark:text-gray-300">Shell</b> enables me to navigate and
          troubleshoot operating systems with ease.
          <br /> <br />
          My utilization of <b className="dark:text-gray-300">
            VSCode
          </b> and <b className="dark:text-gray-300">MS-Suite</b> enhances my
          organization and productivity to become an effective programmer and
          project manager. Finally, my knowledge of{" "}
          <b className="dark:text-gray-300">Git</b> allows me to collaborate
          effectively with team members.
        </p>
      ),
      skillFunc1: setSkill7,
      skillFunc2: setSkill8,
      skillVar1: showSkill7,
      skillVar2: showSkill8,
      format: true,
      title1: "Software",
      title2: "Tools",
      list1: [
        [<GrVmware />, "VMware"],
        [<SiVirtualbox />, "VirtualBox"],
        [<DiLinux />, "Linux"],
      ],
      list2: [
        [<TbBrandPowershell />, "Shell"],
        [<SiMicrosoftoffice />, "MS-Suite"],
        [<BsGit />, "Git"],
        [<TbBrandVscode />, "VS-Code"],
      ],
    },
  ];

  return (
    <section id="skills" className=" px-10 md:px-20 lg:px-40 md:pt-24 ">
      <div className="max-w-screen-lg py-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="md:mb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 dark:text-white ">
            Skills
          </p>
          <p className=" py-6 dark:text-gray-400">
            My Skills, Tools and Technologies
          </p>
        </div>
        {skills.map(
          ({
            id,
            title,
            discription,
            skillFunc1,
            skillFunc2,
            skillVar1,
            skillVar2,
            format,
            title1,
            title2,
            list1,
            list2,
          }) => (
            <div className="">
              <h2 className="text-2xl pb-3 font-semibold md:text-left text-center dark:text-white">
                {title}
              </h2>
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
                <div className="md:py-2 md:px-2 md:border-2 rounded md:shadow-md md:w-1/2">
                  <div className=" md:gap-5 gap-2 md:p-3 flex flex-col md:flex-row justify-evenly">
                    <div className="flex flex-col gap-3">
                      <h3
                        className=" hover:text-white md:hover:text-black hover:bg-blue-500 md:hover:bg-transparent py-1 md:py-0 border-2 border-blue-500 md:border-0 text-blue-500 md:text-black text-center md:text-left font-medium text-xl md:text-2xl md:pl-0 dark:text-white transition-all rounded"
                        onClick={() => skillFunc1(!skillVar1)}
                      >
                        {title1}
                      </h3>

                      {list1.map((item, index) => (
                        <div
                          key={index}
                          className={
                            "flex justify-center md:justify-start items-center gap-3 " +
                            (skillVar1 ? " hidden md:flex" : "")
                          }
                        >
                          <div className="text-2xl text-blue-600">
                            {item[0]}
                          </div>
                          <p className=" text-lg ml-2 text-gray-800 dark:text-gray-100">
                            {item[1]}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex flex-col gap-3">
                      <h3
                        className="hover:text-white md:hover:text-black hover:bg-blue-500 md:hover:bg-transparent py-1 md:py-0 border-2 border-blue-500 md:border-0 text-blue-500 md:text-black text-center md:text-left font-medium text-xl md:text-2xl md:pl-0 dark:text-white transition-all rounded"
                        onClick={() => skillFunc2(!skillVar2)}
                      >
                        {title2}
                      </h3>
                      {list2.map((item, index) => (
                        <div
                          key={index}
                          className={
                            "flex justify-center md:justify-start items-center gap-3 whitespace-nowrap " +
                            (skillVar2 ? " hidden md:flex" : "")
                          }
                        >
                          <div className="text-2xl text-blue-600 dark:text-blue-600">
                            {item[0]}
                          </div>
                          <p className=" text-lg ml-2 text-gray-800 dark:text-gray-100">
                            {item[1]}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
