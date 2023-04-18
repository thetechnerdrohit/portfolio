
const Index = ({ children, className = "" }: any) => {
  return <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>{children}</div>;
};

export default Index;
