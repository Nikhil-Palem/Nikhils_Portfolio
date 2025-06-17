import React, { useState } from 'react';
import SectionTitle from './Animations/SectionTitle';
import AnuragLogo from '../assets/AU.jpg';
import SchoolLogo from '../assets/GGSchool.jpeg';
import NarayanaLogo from '../assets/Narayana.avif';

const educations = [
  {
    id: 1,
    logo: AnuragLogo,
    school: 'Anurag University',
    degree: 'Bachelor of Technology (B.Tech) in Computer Science and Engineering',
    duration: '2022 - Present',
    link: 'https://anurag.edu.in/',
  },
  {
    id: 2,
    logo: NarayanaLogo,
    school: 'Narayana Junior College',
    degree: 'Intermediate Education',
    duration: '2020 - 2022',
    link: 'https://www.narayanagroup.com/',
  },
  {
    id: 3,
    logo: SchoolLogo,
    school: 'Green Grove International School',
    degree: 'SSC',
    duration: '2019 - 2020',
    link: 'https://greengroveinternationalschools.com/',
  },
];

const Education = () => {
  const [hover, setHover] = useState('');

  return (
    <section id="education" className="mt-10">
      <SectionTitle title="Education" />
      <div className="mt-6">
        {educations.map((edu) => (
          <div
            key={edu.id}
            className="relative mb-10 flex items-start gap-3 w-full"
          >
            {edu.id !== 3 && (
              <div className="absolute left-6 top-11 h-full w-[1px] bg-gray-300 dark:bg-gray-600 rounded z-10" />
            )}

            {/* Logo circle */}
            <div className="w-13 h-12 rounded-full shadow bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 flex items-center justify-center z-10 overflow-hidden">
              <img
                src={edu.logo}
                alt={`${edu.school} logo`}
                className="w-12 h-12 object-contain rounded-full"
              />
            </div>

            {/* Details */}
            <div className="w-full">
              <div className="w-full flex flex-row items-center justify-between gap-2 sm:gap-4 text-sm text-gray-600 dark:text-gray-400">
                <h2
                  name={edu.school}
                  className="sm:text-[15px] text-[13px] font-semibold text-gray-800 dark:text-white cursor-pointer"
                  onMouseEnter={() => setHover(edu.school)}
                  onMouseLeave={() => setHover('')}
                  onClick={() => window.open(edu.link, '_blank')}
                >
                  {edu.school}{' '}
                  {hover === edu.school && (
                    <span className="text-purple-500">&gt;</span>
                  )}
                </h2>
                <span className="text-[12px] sm:text-sm whitespace-nowrap">{edu.duration}</span>
              </div>
              <span className="text-[12px] sm:text-sm  md:whitespace-nowrap text-gray-600 dark:text-gray-400">
                {edu.degree}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
