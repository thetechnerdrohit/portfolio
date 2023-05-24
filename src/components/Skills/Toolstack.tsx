import React from "react";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiAmazonaws,
  SiJenkins,
  SiGit,
  SiNotion,
  SiSlack,
} from "react-icons/si";
import Stack from "./Stack";

const Toolstack = () => {
  return (
    <>
      <h2 className="w-full text-center text-6xl md:mt-10 md:text-4xl">
        <strong className="text-primary dark:text-primaryDark">Tools</strong> I
        use
      </h2>
      <div className="grid w-full grid-cols-8 items-start justify-center gap-4 2xl:grid-cols-7 xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
        <Stack>
          <SiLinux />
        </Stack>
        <Stack>
          <SiVisualstudiocode />
        </Stack>
        <Stack>
          <SiAmazonaws />
        </Stack>
        <Stack>
          <SiNotion />
        </Stack>
        <Stack>
          <SiJenkins />
        </Stack>
        <Stack>
          <SiGit />
        </Stack>
        <Stack>
          <SiPostman />
        </Stack>
        <Stack>
          <SiSlack />
        </Stack>
        <Stack>
          <SiVercel />
        </Stack>
        <Stack>
          <SiHeroku />
        </Stack>
      </div>
    </>
  );
};

export default Toolstack;
