import React, {  useState } from 'react'
import Title from '../layouts/Title';
import Experience from "./Experience";
import Skills from './Skills';
import Education from './Education';
import Achievement from './Achievement';

const Resume = () => {
  const [experienceData, setExperienceData] = useState(true);
  const [skillData, setSkillData] = useState(false);
  const [educationData, setEducationData] = useState(false);
   const [achievementData, setAchievementData] = useState(false);
  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() =>
              setExperienceData(true) &
              setSkillData(false) &
              setEducationData(false) &
              setAchievementData(false)
            }
            className={`${              
              experienceData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Experience
          </li>
          <li
            onClick={() =>
              setExperienceData(false) &
              setSkillData(true) &
              setEducationData(false) &
              setAchievementData(false)
            }
            className={`${
              skillData ? "border-designColor rounded-lg" : "border-transparent"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() =>
              setExperienceData(false) &
              setSkillData(false) &
              setEducationData(true) &
              setAchievementData(false)
            }
            className={`${
              educationData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() =>
              setExperienceData(false) &
              setSkillData(false) &
              setEducationData(false) &
              setAchievementData(true)
            }
            className={`${
              achievementData
                ? "border-designColor rounded-lg"
                : "border-transparent"
            } resumeLi`}
          >
            Certifications
          </li>
        </ul>
      </div>
      {experienceData && <Experience />}
      {skillData && <Skills />}
      {achievementData && <Achievement />}
      {educationData && <Education />}
 
    </section>
  );
}

export default Resume