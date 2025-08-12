import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from '../styles';
import { experiences, textVariant } from "../constants"; // Fixed import

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <div className="flex justify-between items-start gap-4">
          <div>
            <h3 className="text-white text-[24px] font-bold">
              {experience.title}
            </h3>
            <p className="text-red-500 text-[16px] font-semibold ">
              {experience.company_name}
            </p>
          </div>
          {experience.link && (
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#915EFF] hover:bg-[#7d4fe0] text-white text-sm font-medium py-1 px-3 rounded-lg transition-colors"
              aria-label={`Visit ${experience.company_name}`}
            >
              Visit
            </a>
          )}
        </div>
      </div>
      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Projects = () => {
  return (
    <>
      <div className='bg-black text-white'>
      <motion.div variants={textVariant(0.1)}>
        <div className='mt-16'> <p className={`${styles.sectionSubText} text-center text-white`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Work Experience.</h2></div>
       
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => ( // Fixed variable name
            <ExperienceCard 
              key={`experience-${index}`} 
              experience={experience} 
            />
          ))}
        </VerticalTimeline>
      </div>
      </div>
    </>
  );
};

export default Projects;