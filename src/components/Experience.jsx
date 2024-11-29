"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { arrowLeftIcon, experienceData } from "../assets";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const date = new Date().getFullYear();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 95%", "end end"],
  });
  const scrollY = useSpring(scrollYProgress, { stiffness: 200, damping: 20 });
  return (
    <div
      id="experience"
      className="relative py-20 px-96 lg:px-20 md:px-10 sm:px-5 lg:place-items-center"
    >
      <Heading text={"Experience & Education"} />
      <Image
        src={"/education.png"}
        alt={"Experience Image"}
        width={400}
        height={400}
        className="absolute -top-4 right-96 opacity-70 xl:hidden lg:place-items-center sm:place-items-center"
      />
      <div
        ref={containerRef}
        className="relative w-full h-full flex flex-col items-center justify-center gap-y-10 lg:gap-y-20 py-10"
      >
        {experienceData.map((data, index) => (
          <div
            key={`id-${index}`}
            className={`z-10 w-[600px] xl:w-[480px] sm:w-[200px] px-12 sm:px-0 relative lg:left-0 sm:left-0 -left-[300px] ${
              index % 2 === 0
                ? "-left-[300px] xl:-left-[240px] lg:-left-0"
                : "left-[300px] xl:left-[240px] lg:-left-0"
            }]`}
          >
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, type: "spring", stiffness: 50 }}
              className="relative flex flex-col gap-y-3 rounded-md border border-red-300 bg-white p-4 tracking-wide sm:text-sm"
            >
              <h1 className="text-xl sm:text-lg font-light text-gray-700">
                {data.title}
              </h1>
              <p className="text-gray-800">
                <span className="block pl-2 font-extralight">
                  {data.education}
                </span>
              </p>
              <div className="text-gray-800">
                <span className="font-light">Overview:</span>
                <ul className="pl-2">
                  {data.experience.map((exp, j) => (
                    <li key={j} className="my-1 font-extralight">
                      {exp}
                    </li>
                  ))}
                </ul>
              </div>
              <span
                className={`lg:hidden absolute top-20 text-red-300 -translate-y-1/2 ${
                  index % 2 === 0 ? "left-full rotate-180" : "right-full"
                }`}
              >
                {arrowLeftIcon}
              </span>
            </motion.div>
            <div
              className={`lg:hidden w-14 absolute top-20 border border-gray-300 rounded-full aspect-square grid place-items-center text-red-400 font-light -translate-y-1/2 z-10 bg-white ${
                index % 2 === 0
                  ? "left-full -translate-x-1/2 lg:left-1/2"
                  : "right-full translate-x-1/2 lg:right-1/2"
              }`}
            >
              {date - experienceData.length + index + 1}
            </div>
          </div>
        ))}
        <motion.div
          initial={{ scaleY: 0 }}
          style={{
            scaleY: scrollY,
          }}
          className="absolute w-1 h-full rounded-full bg-gray-300 origin-top"
        ></motion.div>
      </div>
    </div>
  );
};

export default Experience;
