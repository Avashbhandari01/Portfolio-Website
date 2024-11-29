"use client";
import Heading from "./sub/Heading";
import Project from "./sub/Project";
import { projectsData } from "../assets";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div id="projects" className=" py-20 px-96 sm:px-9 lg:place-items-center">
      <Heading text={"Projects"} />
      <div className="flex flex-wrap items-center justify-center gap-5">
        {projectsData.slice(0, 5).map((data, index) => (
          <motion.div key={`id-${index}`} layout>
            <Project data={data} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
