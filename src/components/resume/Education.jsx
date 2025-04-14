import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Maulana Abul Kalam Azad University of Technology West Bengal, India"
            subTitle="Bachelor of Technology - B.Tech, Electronics and Communication Engineering"
            result="July 2019 - July 2023"
            des="Grade: 8.53 CGPA"
          />
          <ResumeCard
            title="Anugrah Narayan College Patna, Bihar"
            subTitle="Higher Secondary - (Class XII), PCM"
            result="Apr 2018 - Mar 2019"
            des="Grade: 71.2%"
          />
          <ResumeCard
            title="Indian Public School Madhubani, Bihar"
            subTitle="Matriculation (Class X)"
            result="May 2016 - June 2017"
            des="Grade: 10 CGPA"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
