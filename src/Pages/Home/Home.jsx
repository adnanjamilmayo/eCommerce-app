import React from "react";
import Layout from "../../components/Layout/Layout";
import Hero from "../../components/Hero/Hero";

const Home = () => {
  return (
    <Layout>
      <div className="h-[120vh]">
        <Hero />
        </div>
    </Layout>
  );
};

export default Home;
