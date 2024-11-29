"use client";
import Heading from "./sub/Heading";
import Image from "next/image";
import { skillsData } from "../assets";
import { motion } from "framer-motion";

const Skills = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.07,
      },
    }),
    hidden: { opacity: 0, y: 30 },
  };
  return (
    <div
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center gap-y-20 px-96 lg:px-20 mdpx-10 sm:px-5 lg:place-items-center sm:place-items-center"
    >
      <Heading text={"Skills"} />
      <div className="w-full flex justify-between flex-wrap gap-x-8 gap-y-5 lg:gap-y-4 lg:gap-x-4 sm:gap-y-5 sm:flex-col sm:w-[15px]">
        {skillsData.map((item, index) => (
          <motion.div
            custom={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ scale: 1.1 }}
            viewport={{ margin: "50px", once: true }}
            key={index}
            className="flex items-center justify-center gap-x-3 rounded-xl border border-yellow-500 bg-zinc-200 px-5 py-2 lg:px-2"
          >
            <Image
              src={item.icon}
              alt="Skills Image"
              width={100}
              height={100}
              className="h-auto w-[40px] min-w-[35px]"
            />
            <p className="text-sm text-gray-600">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
