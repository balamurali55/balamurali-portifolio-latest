import Image from "next/image";
import React, { useEffect, useRef } from "react";
import javascriptpNG from "../../public/images/skills/JavaScript-logo.png";
import ReactIcon from "../../public/images/skills/ReactIcon.png";
import NextJsIcon from "../../public/images/skills/NextJsIcon.png";
import TailwindCssIcon from "../../public/images/skills/TailwindCssIcon.png";
import ReduxIcon from "../../public/images/skills/reduxIcon.png";
import ZustandIcon from "../../public/images/skills/zustandIcon.png";
import Typescript from "../../public/images/skills/Typescript.png";
import postman from "../../public/images/skills/Postman.png";
import materialUi from "../../public/images/skills/MaterialUi.png";
import GitHubIcon from "../../public/images/skills/GitHubIcon.png";
import HTML_CSS from "../../public/images/skills/HTML&CSS.png";
import NodeJs from "../../public/images/skills/NodeJs.png";
import Ant from "../../public/images/skills/Ant.png";
import Express from "../../public/images/skills/Express.png";
import Firebase from "../../public/images/skills/Firebase.png";
import mongodb from "../../public/images/skills/mongodb.png";

const Skills = () => {
  const iconsRef = useRef([]);

  useEffect(() => {
    const options = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    }, options);

    iconsRef.current.forEach((icon) => {
      if (icon) observer.observe(icon);
    });

    return () => {
      iconsRef.current.forEach((icon) => {
        if (icon) observer.unobserve(icon);
      });
    };
  }, []);

  const skills = [
    { src: javascriptpNG, alt: "JavaScript", size: "w-20 h-20" },
    { src: ReactIcon, alt: "React", size: "w-24 h-24" },
    { src: NextJsIcon, alt: "Next.js", size: "w-20 h-20" },
    { src: TailwindCssIcon, alt: "Tailwind CSS", size: "w-24 h-24" },
    { src: ReduxIcon, alt: "Redux", size: "w-20 h-20" },
    { src: ZustandIcon, alt: "Zustand", size: "w-28 h-28" },
    { src: Typescript, alt: "TypeScript", size: "w-20 h-20" },
    { src: postman, alt: "Postman", size: "w-20 h-20" },
    { src: materialUi, alt: "Material-UI", size: "w-24 h-24" },
    { src: GitHubIcon, alt: "GitHub", size: "w-28 h-28" },
    { src: HTML_CSS, alt: "HTML & CSS", size: "w-20 h-20" },
    { src: Firebase, alt: "Firebase", size: "w-24 h-24" },
    { src: Ant, alt: "Ant Design", size: "w-24 h-24" },
    { src: NodeJs, alt: "Node.js", size: "w-24 h-24" },
    { src: Express, alt: "Express", size: "w-24 h-24" },
    { src: mongodb, alt: "MongoDB", size: "w-24 h-24" },
  ];

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div className="grid grid-cols-3 gap-6 mt-10 sm:grid-cols-2 md:grid-cols-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={(el) => (iconsRef.current[index] = el)}
            className="p-4 border border-gray-200 shadow-lg flex justify-center items-center rounded-lg transform transition-all duration-500 opacity-0 translate-y-10 hover:scale-105"
          >
            <Image
              src={skill.src}
              alt={skill.alt}
              className={`${skill.size} object-contain`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Skills;
