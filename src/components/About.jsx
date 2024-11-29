"use client";
import Image from "next/image";
import Achievements from "./sub/Achievements";
import Heading from "./sub/Heading";
import { aboutData, aboutText, downloadIcon, arrowLeftIcon } from "../assets";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen px-96 flex flex-col items-center justify-center lg:px-20 md:px-10 sm:px-5 sm:place-items-center"
    >
      <Heading text={"About Me"} />
      <div className="w-full flex flex-row md:flex-row items-center justify-between md:justify-center lg:items-center sm:pl-20">
        <Image
          src={"/about-me.png"}
          alt="About Image"
          width={400}
          height={400}
          className="w-[300px] lg:w-[200px] mx-auto mb-6 md:hidden"
        />
        <div className="relative xl:min-w-[500px] max-w-full sm:max-w-[300px] sm:min-w-[200px] md:max-w-[400px] lg:max-w-[700px] rounded-xl bg-zinc-100 p-5 text-justify">
          <span className="absolute -left-5 top-20 scale-[2.5] text-zinc-100 md:hidden">
            {arrowLeftIcon}
          </span>
          <p className="text-lg font-light text-gray-700 first-letter:pl-3 md:text-[14px] sm:text-[12px]">
            {aboutText}
          </p>
          <a
            href="/Avash_Bhandari_-_Resume.pdf"
            download=""
            className="w-max flex items-center gap-x-2 mt-6 rounded-full border border-gray-300 bg-red-400 px-3 py-2 font-light text-white hover:bg-red-500 transition-colors"
          >
            <span>Download CV</span>
            <span className="text-xl">{downloadIcon}</span>
          </a>
        </div>
      </div>
      <div className="mt-20 w-full flex flex-wrap items-center justify-between gap-x-7 gap-y-10 sm:flex-col md:flex-col">
        {aboutData.map((item, index) => (
          <Achievements key={index} title={item.title} amount={item.amount}>
            {item.icon}
          </Achievements>
        ))}
      </div>
    </div>
  );
};

export default About;
