import React from "react";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiAngularSimple,
  DiPostgresql,
} from "react-icons/di";
import { SiJavascript, SiFirebase, SiNextdotjs, SiIonic } from "react-icons/si";
import Stack from "./Stack";

function Techstack() {
  return (
    <>
      <h2 className="mt-32 w-full text-center text-6xl md:mt-16 md:text-4xl">
        <strong className="text-primary dark:text-primaryDark">
          Professional
        </strong>
        &nbsp;Skillset
      </h2>
      <div className="grid w-full grid-cols-8 items-start justify-center gap-4 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
        <Stack>
          <SiJavascript />
        </Stack>
        <Stack>
          <DiNodejs />
        </Stack>
        <Stack>
          <DiReact />
        </Stack>
        <Stack>
          <DiAngularSimple />
        </Stack>
        <Stack>
          <SiIonic />
        </Stack>
        <Stack>
          <SiNextdotjs />
        </Stack>
        <Stack>
          <DiMongodb />
        </Stack>
        <Stack>
          <DiPostgresql />
        </Stack>
        <Stack>
          <DiGit />
        </Stack>
        <Stack>
          <SiFirebase />
        </Stack>
      </div>
    </>
  );
}

export default Techstack;
