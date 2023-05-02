import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import LiIcon from "./LiIcon";

interface ExperienceDetailsProps {
  position: string;
  companyName: string;
  comapnyLink: string;
  time: string;
  address: string;
  work: string;
}

const Details = ({
  position,
  companyName,
  comapnyLink,
  time,
  address,
  work,
}: ExperienceDetailsProps) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="mx-auto my-8 flex w-[60%] flex-col items-center justify-between first:mt-0 last:mb-0"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="text-2xl font-bold capitalize">
          {position} &nbsp;{" "}
          <a
            href={comapnyLink}
            target="_blank"
            className="capitalize text-primary dark:text-primaryDark"
          >
            @{companyName}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="w-full font-medium">{work}</p>
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
      <h2 className="mb-32 w-full text-center text-8xl font-bold">
        Experience
      </h2>
      <div className="relative mx-auto w-[75%]" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 h-full w-[4px] origin-top bg-dark dark:bg-light"
        />

        <ul className="ml-4 flex w-full flex-col items-start justify-between">
          <Details
            position="software Engineer"
            companyName="Propark Mobility"
            address="Hartford Union Station, United States"
            comapnyLink="https://www.propark.com"
            time="Feb 2023 - present"
            work="I am the part of the platform system design and database architecture for the latest Command Center (Customer Centre) product.
            Conducted requirements gathering for product development."
          />
          <Details
            position="Sr. Product Engineer"
            companyName="Ovonts Technologies Pvt Ltd"
            address="Mumbai, India"
            comapnyLink="https://www.ovonts.com"
            time="May 2022 - Feb 2023"
            work="Lead a team of 6-7 developers, conducting code reviews and solving logical and syntactical issues.
          Created platform system design and database architecture for the latest SASS product.
          Set up CI/CD pipelines on Jenkins and managed servers on AWS for development, staging, and production environments.
          Ensured the team's understanding of tasks while also contributing to hands-on development."
          />
          <Details
            position="Sr. Application Developer"
            companyName="Neosoft Technologies"
            address="Mumbai, India"
            comapnyLink="https://www.neosofttech.com"
            time="Oct 2021 - Apr 2022"
            work="Lead a team of 5 developers, conducted code reviews, and resolved junior developers' issues.
            Actively participated in hands-on development while guiding the team in their tasks."
          />
          <Details
            position="Digital Technologist"
            companyName="Experience Commerce"
            address="Mumbai, India"
            comapnyLink="https://www.experiencecommerce.com"
            time="June 2021 - October 2021"
            work="Actively involved in the development of new modules in existing mobile and web applications.
            Managed the migration of development to dev and staging servers."
          />
          <Details
            position="Jr. Software Engineer"
            companyName="Anvitech Solutions LLP"
            address="Mumbai, India"
            comapnyLink="http://www.anvitechsolutions.com"
            time="June 2018 - May 2021"
            work="Developed projects from scratch for national and international clients/organizations like Deloitte, Sant-Gobain, Onepay.
            Assisted junior developers in resolving logical and syntactical issues."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
