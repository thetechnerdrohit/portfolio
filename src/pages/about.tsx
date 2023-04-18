import React from "react";
import AnimatedText from "~/components/Home/AnimatedText";
import Layout from "~/components/Layout";

const about = () => {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <Layout className="pt-16">
        <AnimatedText text="Passion Fuels Purpose!" />
        <div className="grid w-full grid-cols-8 gap-16">
          <div className="">
            <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
              Biography
            </h2>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default about;
