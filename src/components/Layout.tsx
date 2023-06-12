import Particle from "~/ui/Particle";

/* eslint-disable @typescript-eslint/restrict-template-expressions */
const Layout = ({ children, className = "" }: any) => {
  return (
    <div
      className={`z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
    >
      <Particle />
      {children}
    </div>
  );
};

export default Layout;
