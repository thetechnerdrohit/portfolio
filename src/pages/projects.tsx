/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AnimatedText from "~/components/Home/AnimatedText";
import Layout from "~/components/Layout";
import { GithubIcon } from "~/components/Navbar/Icons";
import projectImage from "public/images/projects/crypto-screener-cover-image.jpg";
import { motion } from "framer-motion";
import TransitionEffect from "~/components/TransitionEffect";

interface FeaturedProjectProps {
  type: string;
  title: string;
  summary: string;
  image: any;
  link: string;
  github: string;
}

interface ProjectProps {
  type: string;
  title: string;
  image: any;
  link: string;
  github: string;
}

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  image,
  link,
  github,
}: FeaturedProjectProps) => {
  return (
    <article className="rounder-br-2xl relative flex w-full items-center justify-between rounded-3xl border border-solid border-dark bg-light p-12 shadow-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute -right-6 top-1 -z-10 h-[102%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light lg:-right-2 lg:h-[101%] sm:h-[101%] xs:-right-2  xs:w-full xs:rounded-[1.5rem] " />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={image}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
        />
      </Link>

      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon className="" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ type, title, image, link, github }: ProjectProps) => {
  return (
    <article className="relative flex w-full flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light p-6 dark:border-light dark:bg-dark xs:p-4">
      <div className="absolute -right-6 top-1 -z-10 h-[102%] w-[102%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light lg:-right-2 lg:h-[101%] md:-right-2 md:w-[101%] xs:h-[101%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={image} alt={title} className="h-auto w-full" />
      </Link>

      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="mt-2 flex w-full items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>

          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon className="" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const ProjectsPage = () => {
  return (
    <>
      <Head>
        <title>Rohit Chauhan | Projects Page</title>
        <meta name="description" content=""></meta>
      </Head>
      <TransitionEffect />
      <main className="mb-16 flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type={"Featured Project"}
                title={"Crypto Screener Application"}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
                It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                local currency."
                image={projectImage}
                link={""}
                github={""}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"Featured Project"}
                title={"Crypto Screener Application"}
                image={projectImage}
                link={""}
                github={""}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"Featured Project"}
                title={"Crypto Screener Application"}
                image={projectImage}
                link={""}
                github={""}
              />
            </div>

            <div className="col-span-12">
              <FeaturedProject
                type={"Featured Project"}
                title={"Crypto Screener Application"}
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
               It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
               local currency."
                image={projectImage}
                link={""}
                github={""}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"Featured Project"}
                title={"Crypto Screener Application"}
                image={projectImage}
                link={""}
                github={""}
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={"Featured Project"}
                title={"Crypto Screener Application"}
                image={projectImage}
                link={""}
                github={""}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default ProjectsPage;
