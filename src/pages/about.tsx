
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AnimatedText from "~/components/Home/AnimatedText";
import Layout from "~/components/Layout";
import profilePic from "../../public/images/profile/developer-pic-2.jpg";
import { useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Experience from "~/components/About/Experience";
import TransitionEffect from "~/effects/TransitionEffect";
import TypingEffect from "~/effects/TypingEffect";

const AnimatedNumbers = ({ value, springduration }: any) => {
  const ref = useRef<any>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    duration: springduration || 3000,
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latestValue) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
      if (ref.current && latestValue.toFixed(0) <= value) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
        ref.current["textContent"] = latestValue.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const AboutPage = () => {
  const [typing, setTyping] = useState([1]);
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
            text="Passion Fuels Purpose!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium ">
                Hi, I&apos;m Rohit Chauhan, a web developer with a passion for
                creating beautiful, functional, and user-centered digital
                experiences. With 5+ years of experience in the field. I am
                always looking for new and innovative ways to bring my clients&apos;
                visions to life.
              </p>
              {typing.indexOf(1) != -1 && (
                <p className="my-4 font-medium">
                  <TypingEffect
                    sequence={[
                      `I believe that design is about more than just making things look
                      pretty – it's about solving problems and creating intuitive,
                      enjoyable experiences for users.`,
                      1000,
                      () => {
                        setTyping((prev) => [...prev, 2]);
                      },
                    ]}
                  />
                </p>
              )}
              {typing.indexOf(2) != -1 && (
                <p className="mb-4 font-medium">
                  <TypingEffect
                    sequence={[
                      `Whether I'm working on a website, mobile app, or other digital
                      product, I bring my commitment to design excellence and
                      user-centered thinking to every project I work on. I look
                      forward to the opportunity to bring my skills and passion to
                      your next project.`,
                    ]}
                  />
                </p>
              )}
            </div>

            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute -right-5 top-3 -z-10 h-[101%] w-[102%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Rohit Chauhan"
                className="h-auto w-full rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
              />
            </div>

            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {AnimatedNumbers({ value: 5, springduration: 5000 })}+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {AnimatedNumbers({ value: 20, springduration: 6000 })}+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {AnimatedNumbers({ value: 5, springduration: 7000 })}+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>
          <Experience />
        </Layout>
      </main>
    </>
  );
};

export default AboutPage;
