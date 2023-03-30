import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useRef, useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { title } from "process";
import Skills from "../components/Skills";
import Test from "../components/SkillsContainer";
import SkillsContainer from "../components/SkillsContainer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const mainTitle = useRef<HTMLDivElement>(null);
  const main = useRef<HTMLDivElement>(null);
  const aboutMe = useRef<HTMLDivElement>(null);
  const skillsTitle = useRef<HTMLDivElement>(null);
  useScrollPosition(({ prevPos, currPos }) => {
    let mainNode = main.current as any;
    mainNode.style.backgroundPosition = `0px ${-currPos.y * 0.9}px`;
    let mainTitleNode = mainTitle.current as any;
    mainTitleNode.style.transform = `translateY(${
      -currPos.y * 2
    }px) translateX(${-currPos.y * 0.2}px)`;
    let aboutMeNode = aboutMe.current as any;
    aboutMeNode.style.transform = `translateY(${
      -750 - currPos.y * 2
    }px) translateX(${-currPos.y * 0.1}px)`;

    let skillsTitleNode = skillsTitle.current as any;
    if (currPos.y > -1600) {
      console.log(-1600 - currPos.y);

      skillsTitleNode.style.transform = `translateY(${
        -2400 - currPos.y * 1.5
      }px) translateX(${+800 + currPos.y * 0.5}px)`;
    } else {
      skillsTitleNode.style.transform = "";
    }
  });
  return (
    <>
      <Head>
        <title>Nemanja Vicanovic</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        ref={main}
        className="bg-hero-pattern w-[calc(100vw - 5px)] h-[2724px] opacity-60 overflow-hidden"
      >
        <h1 className={`text-9xl`} ref={mainTitle}>
          Hi, I am Nemanja, a FrontEnd developer.
        </h1>
        <h2
          className={`text-5xl mb-[1500px] translate-y-[-750px]`}
          ref={aboutMe}
        >
          I love design and have profound knowledge of technical side of react
          with professional experience with working with a team and cooperating
          with backend developers to ship the best the possible solutions for
          our client problems.
        </h2>
        <div className="flex flex-col">
          <h2
            ref={skillsTitle}
            className="text-4xl text-center bg-red-400 bg-opacity-40 m-auto p-4 pb-7 rounded-lg"
          >
            My skills
          </h2>

          <Skills />
        </div>
      </main>
      <footer className="w-full h-[360px] bg-red-300">
        <div className="w-full h-[20px] bg-red-300 rounded-t-3xl -translate-y-full"></div>
      </footer>
    </>
  );
}
