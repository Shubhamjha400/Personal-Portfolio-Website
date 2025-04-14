import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Hands On React JS From Beginner to Expert"
            result="Udemy"
          />
          <ResumeCard
            title="Certified Web Developer From Scratch"
            result="Eduonix Learning Solutions"
          />
          <ResumeCard
            title="CSS and JavaScript Certification Course for Beginners"
            result="Udemy"
          />
        </div>
      </div>
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="• Introduction to Front End Development"
            result="Simplilearn"
          />
          <ResumeCard
            title="Learn HTML - For Beginners"
            result="Udemy"
          />
          <ResumeCard
            title="Young Java Professional"
            result="Infosys Springboard"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
