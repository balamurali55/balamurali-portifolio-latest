import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/inifinite-scroll.png";
import blog2 from "../../public/images/articles/BMI.png";
import blog3 from "../../public/images/articles/Heart-Beat.png";
import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout>
          <AnimatedText text="Words Can Change Your Life !" />
        </Layout>
      </main>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span
        className="text-primary font-semibold dark:text-primaryDark min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link, github }) => {
  return (
    <li
      className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light"
    >
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target={"_blank"}
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target={"_blank"}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
      <div className="mt-2 flex items-center">
        <Link
          href={github}
          target={"_blank"}
          className="w-10"
          aria-label="Crypto Screener Application github link"
        >
          <GithubIcon />
        </Link>
        <Link
          href={link}
          target={"_blank"}
          className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
          aria-label="Crypto Screener Application"
        >
          Visit Project
        </Link>
      </div>
    </li>
  );
};

export default function Articles() {
  return (
    <>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Words Can Change the World!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <div>
              <FeaturedArticle
                img={blog1}
                title="build a custom infinite Scroll component in reactjs from scratch"
                summary="Infinite scroll is a design pattern used in web development to load content continuously as the user scrolls down the page, without requiring them to click on pagination links."
                link="https://infinite-scroll-1zpzo45um-balamurali55s-projects.vercel.app/"
                github={"https://github.com/balamurali55/Infinite-Scroll"}
              />
            </div>
            <div>
              <FeaturedArticle
                img={blog2}
                title="build a Gauge BMI Calculator using reactjs from scratch"
                summary="Create a BMI calculator using React.js that displays the BMI value on a gauge chart. Utilize state management to handle user inputs for weight and height, updating the gauge in real-time."
                link=""
                github={"https://github.com/balamurali55/BMI-Calculator-gauge"}
              />
            </div>
            {/* <div>
              <FeaturedArticle
                img={blog3}
                title="Animated Heart using pure Css "
                summary="Created a Amazing Animated Heart Beat using HTML and CSS "
                link="https://heart-beat-sable.vercel.app/"
                github={"https://github.com/balamurali55/heartBeat"}
              />
            </div> */}
          </ul>
        </Layout>
      </main>
    </>
  );
}
