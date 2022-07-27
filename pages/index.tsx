import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/herosection";
import AboutSection from "../components/aboutsection";
import Waves from "../components/waves";
import Navbar from "../components/navbar";
import SkillsSection from "../components/skillssection";
import ProjectsSection from "../components/projectssection";
import ContactSection from "../components/contactsection";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Home | Joeri Brinks</title>
      </Head>
      <Navbar />
      <div id="home" className="p-8" />
      <Hero />
      <div id="about" className="p-8" />
      <AboutSection />
      <div id="skills" className="p-8" />
      <SkillsSection />
      <div id="projects" className="p-8" />
      <ProjectsSection />
      <div className="p-8" />
      <ContactSection />
      <Waves />
    </div>
  );
};

export default Home;
