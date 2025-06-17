import React from 'react';
import SectionTitle from './Animations/SectionTitle';
import CompanyLogo from '../assets/eduSaathiLogo.png';

const experiences = [
  {
    id: 1,
    Logo: CompanyLogo,
    companyName: 'EduSaathi',
    position: 'Full Stack Developer',
    duration: 'Oct 2024 - Present',
    description:
      'Utilized the MERN stack to build and enhance features for the CRM system and student portal. Contributed to scalable, user-centric solutions that improved overall platform functionality and user experience.',
  },
];

const Experience = () => {
  return (
    <section id="experience">
      <SectionTitle title="Experience" />
      <div className="mt-6">
        {experiences.map((exp) => (
          <div
            key={exp.id}
            className="flex flex-row items-start sm:items-center gap-4 rounded-lg"
          >
            <img
              src={exp.Logo}
              alt={`${exp.companyName} Logo`}
              className="sm:h-14 sm:w-14 h-10 w-10 object-contain filter invert mb-12 dark:invert"
            />
            <div className="flex flex-col">
              <h2 className="sm:text[15px] text-[14px] font-semibold text-gray-800 dark:text-gray-200">
                {exp.position}
              </h2>
              <div className="flex justify-between gap-4 sm:gap-10">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {exp.companyName}
                </p>
                <p className="text-[12px] sm:text-sm whitespace-nowrap text-gray-600 dark:text-gray-400">
                  {exp.duration}
                </p>
              </div>
              <p className="text-[12px] text-gray-700 dark:text-gray-300 mt-2 sm:text-sm">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
