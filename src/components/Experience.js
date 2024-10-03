import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          {/* <Details
            position="Software Engineer"
            company="Vasmi Group"
            time="2021-2022 Sept"
            address="Visakhapatanam"
            work="Developing and maintaining user-facing features using React.js, ensuring responsive design and cross-browser compatibility. Collaborating with senior developers and team members to integrate APIs, debug issues, and improve the application's performance "
          /> */}
          <Details
            position="Software Engineer SDE-1"
            company="Mesky"
            companyLink="mesky.in"
            time="09/2022-present"
            address="Gurugram"
            work="A React.js developer designs and implements user interfaces and components using React.js, ensuring they are efficient and reusable. They also collaborate with backend developers and designers to integrate API services and optimize performance across different devices and browsers."
          />
          <Details
            position="Jr Software Engineer"
            company="Vasmi Group"
            // companyLink="mesky.in"
            time="10/2021-09/2022"
            address="VSP AP"
            work="Worked as a Front-End Developer on the Active Health project, building responsive and user-friendly interfaces. Focused on optimizing user experience and implementing key features to support the platform’s healthcare services."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
