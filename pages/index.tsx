import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/hero";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Joeri Brinks</title>
      </Head>
      <Hero />
    </div>
  );
};

export default Home;
