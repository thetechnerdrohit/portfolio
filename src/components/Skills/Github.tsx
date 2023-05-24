import React from "react";
import GitHubCalendar from "react-github-calendar";
import useThemeSwitcher from "~/hooks/useThemeSwitcher";

const Github = () => {
  const [mode] = useThemeSwitcher();

  return (
    <div className="space-y-7">
      <h2 className=" w-full text-center text-6xl md:mt-10 md:text-4xl">
        Days I{" "}
        <strong className="text-primary dark:text-primaryDark">Code</strong>
      </h2>
      <div className="flex w-full items-center justify-center">
        <GitHubCalendar
          username="thetechnerdrohit"
          year={new Date().getFullYear()}
          blockSize={15}
          blockMargin={5}
          fontSize={16}
          colorScheme={mode === "dark" ? "light" : "dark"}
        />
      </div>
    </div>
  );
};

export default Github;
