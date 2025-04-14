import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="E-commerce Website"
          des=" Z.P. Bag House E-Commerce Store is a responsive online shopping platform built with React.js, featuring product listings, cart management, and a seamless checkout experience."
          src={projectOne}
          githubLink="https://github.com/Shubhamjha400"
          liveLink="https://zpbaghouse.netlify.app/"
        />
        <ProjectsCard
          title="Real Estate Website"
          des=" Homely Real Estate Website is a responsive platform designed for property listings, featuring an intuitive UI, search functionality, and detailed property descriptions for a seamless user experience."
          src={projectTwo}
          githubLink="https://github.com/Shubhamjha400/Real_Estate_Website"
          liveLink="https://homely-realestate.netlify.app/"
        />
        <ProjectsCard
          title="Guest House Website"
          des=" Kingsukh Guest House Website is a responsive and user-friendly platform showcasing room listings, amenities, booking options, and contact details for a seamless guest experience."
          src={projectThree}
          githubLink="https://github.com/Shubhamjha400/Kingsukh-Guest-House"
          liveLink="https://kingsukhguesthouse0.netlify.app/"
        />
      </div>
    </section>
  );
}

export default Projects