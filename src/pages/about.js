import Layout from "@/components/Layout";
import Image from "next/image";
import profile from "../../public/images/profile/murali.png";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";

export default function About() {
  return (
    <>
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="React JS Developer | Passionate About Modern Web Design"
            className="mb-16 !text-4xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-6 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium">
                Hi, my name is <strong>Bala Murali Krishna</strong>. I am a
                dedicated front-end web developer with around 3+ years of
                experience in the field. I specialize in building responsive,
                high-performance websites and applications using modern
                technologies like React.js and Next.js. I have hands-on
                experience working at Early Base, a startup, where I played a
                pivotal role in building projects from scratch, contributing to
                both the design and implementation of key features. My
                experience includes collaborating with teams to create scalable
                solutions that meet business needs efficiently.
              </p>
              <p className="my-4 font-medium">
                My expertise includes creating seamless user interfaces,
                optimizing web performance, and adhering to best practices in
                coding standards. I am passionate about developing
                user-friendly, accessible, and visually appealing web
                applications.
              </p>
              <p className="font-medium">
                Over the years, I have honed my skills in JavaScript frameworks,
                front-end tooling, and CSS techniques to deliver robust and
                scalable solutions. I am always excited to take on new
                challenges and contribute to impactful projects that push the
                boundaries of web development.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">
              <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light" />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="Bala Murali Krishna"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
