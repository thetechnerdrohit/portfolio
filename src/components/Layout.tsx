/* eslint-disable @typescript-eslint/restrict-template-expressions */
const Layout = ({ children, className = "" }: any) => {
  return (
    <div
      className={`z-0 inline-block h-full w-full bg-light p-32 dark:bg-dark ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
