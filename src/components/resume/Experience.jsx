import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Web Development Intern"
            subTitle="Unified Mentor"
            result="Oct 2024 - Present"
            des="Skills:
• HTML5
• CSS3
• JavaScript
• React.js
• Redux
• Tailwind CSS
• Git
• Github"
          />
          <ResumeCard
            title="Java Developer Intern"
            subTitle="Octanet Services Pvt Ltd"
            result="Sep 2024 - Oct 2024"
            des="Skills:
• Java
• OOPs
• Collection"
          />
          <ResumeCard
            title="Web Development Intern"
            subTitle="ByteUprise"
            result="Jul 2024 - Aug 2024"
            des="Skills:
• HTML5
• CSS3
• JavaScript
• ReactJS"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
