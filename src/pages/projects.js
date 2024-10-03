import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/mesky.png";
import proj2 from "../../public/images/projects/DeliveryPortal.png";
import proj3 from "../../public/images/projects/RiderPortal.png";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      {/* <Link
        href={link}
        target={"_blank"}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link> */}
      <div className="flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        {type == "Delivery Portal" && (
          <div>
            <p className="font-bold">Key Features</p>
            <ul
              style={{ listStyleType: "disc", paddingLeft: "20px" }}
              className="font-medium space-y-1"
            >
              <li>
                Subscription Management: Easily create and manage subscriptions
                for customers.
              </li>
              <li>
                Order Creation: Streamlined order creation process for efficient
                management.
              </li>
              <li>
                Dashboard Insights: Interactive dashboards with valuable
                analytics.
              </li>
              <li>
                Transaction Handling: Manage transactions and refund flows
                efficiently.
              </li>
              <li>
                Attractive Tables and Pagination: Seamless navigation with
                user-friendly interfaces.
              </li>
            </ul>
          </div>
        )}

        <div className="mt-2 flex items-center">
          {/* <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link> */}
          {link && (
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
          )}
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[100%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-12">
          <AnimatedText
            text="Building the Future - React & Next.js Projects"
            className="mb-16 !text-4xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="E-commerce store"
                title="Mesky: Your Premier Online Organic Product Store"
                summary="As a front-end developer, I played a pivotal role in building Mesky from scratch, a comprehensive e-commerce platform dedicated to delivering high-quality organic products. My contributions included implementing seamless features such as a user-friendly shopping experience, milk subscription services, and an attractive landing page that highlights our mission.

I developed robust functionalities for the cart and order management systems, allowing customers to easily manage their purchases. Additionally, I created a detailed brand page and a personalized profile section for users, ensuring they have all the tools needed for a convenient shopping experience. Through thoughtful design and careful attention to detail, I helped bring the best of nature directly to our customers’ doorsteps."
                img={proj1}
                link="https://mesky.in"
                github="https://github.com/mesky-tech/main-react-app"
              />
            </div>
            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                type="Delivery Portal"
                title="The Ultimate Vendor Delivery Management Portal"
                summary="Our Delivery Management Portal is expertly designed for vendors to seamlessly monitor and control their entire delivery process. Built using React and Next.js, the platform allows vendors to track orders in real-time, manage delivery agents, and oversee every aspect of the delivery chain."
                img={proj2}
                link="http://43.205.153.221:5173/dashboard"
                github=""
              />
            </div>
            <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                type="Rider Portal"
                title="Rider Delivery and Tracking Portal"
                summary="Delivery portal tailored for the seamless distribution of milk products. Our platform empowers riders to efficiently deliver products while providing real-time updates on delivery status, including snapshots and precise location tracking. Riders can validate deliveries, update their status, and manage pending orders effortlessly."
                img={proj3}
                link="https://ryder.mesky.in/login"
                github=""
              />
            </div>
            {/* <div className="col-span-12 sm:col-span-12">
              <FeaturedProject
                type="Active Health pvt ltd"
                title="Active Health online Health consultation"
                summary="Active Health, is a single-page web application. It is a mission to help improve human longevity by simplifying healthcare. finding the right doctor, booking diagnostic tests, obtaining medicines, storing health records, and patient reports. Practitioner lab reports, e-prescriptions, and medication details, It provides the weekly timing and operation Schedule to the patients and practitioners"
                img={null}
                link=""
                github=""
              />
            </div> */}
          </div>
          <div className="py-4"></div>
          <div className="col-span-12 sm:col-span-12 py-2">
            <FeaturedProject
              type="Active Health Application"
              // title="Rider Delivery and Tracking Portal"
              summary="As a front-end developer I contributed to a healthcare project focused on delivering essential services online. I utilized modern web technologies to create user-friendly interfaces, ensuring an intuitive experience for patients and healthcare providers. My work included optimizing performance and enhancing accessibility to meet the needs of diverse users."
              img={proj3}
              link=""
              github=""
            />
          </div>
        </Layout>
      </main>
    </>
  );
}
