import AnimatedText from "@/components/AnimatedText";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profilePic from "../../public/images/profile/murali.png";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bala's Portfolio Built with Nextjs</title>
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Building Responsive and Interactive Web Interfaces"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                Hello! I'm Bala Murali, a React.js developer with 3+ years of
                experience in crafting high-performance web applications. My
                focus is on delivering clean, efficient code and engaging user
                experiences. I am adept at collaborating with designers and
                back-end developers to bring cohesive and innovative web
                solutions to life.
              </p>
            </div>
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="profile"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </Layout>
      </article>
    </>
  );
}
