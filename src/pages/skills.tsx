/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import Head from "next/head";
import AnimatedText from "~/components/Home/AnimatedText";
import Layout from "~/components/Layout";
import TransitionEffect from "~/components/TransitionEffect";
import Techstack from "~/components/Skills/Techstack";
import Toolstack from "~/components/Skills/Toolstack";
import LoveToDo from "~/components/Skills/LoveToDo";
import Github from "~/components/Skills/Github";

const SkillsPage = () => {
  return (
    <>
      <Head>
        <title>Rohit Chauhan | About Page</title>
        <meta name="description" content=""></meta>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Virtuoso"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <LoveToDo />
          <Techstack />
          <Toolstack />
          <Github />
        </Layout>
      </main>
    </>
  );
};

export default SkillsPage;
