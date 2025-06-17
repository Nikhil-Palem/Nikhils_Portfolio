import React from 'react';
import SectionTitle from './Animations/SectionTitle';
import {
  Code, Database, Wrench, Braces, Rocket,
} from 'lucide-react';
import BlurFadeText from './Animations/BlurFadeText';
import '../index.css';

import {
  FaJava, FaPython, FaHtml5, FaCss3Alt, FaJsSquare,
  FaReact, FaNode, FaGithub, FaDocker, FaCode,
} from 'react-icons/fa';
import {
  SiExpress, SiMongodb, SiPostman, SiOverleaf,
  SiJupyter, SiNetlify,
} from 'react-icons/si';
import {
  RiTailwindCssFill, RiNextjsFill,
} from 'react-icons/ri';
import {
  BiLogoPostgresql,
} from 'react-icons/bi';
import {
  GrOracle,
} from 'react-icons/gr';
import {
  VscVscodeInsiders,
} from 'react-icons/vsc';
import {
  IoLogoVercel,
} from 'react-icons/io5';
import {
  SiRender,
} from 'react-icons/si';
import {
  TbBrandReactNative,
} from 'react-icons/tb';

const skills = {
  'Languages': {
    icon: Code,
    items: [
      { name: 'Java', level: 'advanced' },
      { name: 'Python', level: 'intermediate' },
      { name: 'C', level: 'intermediate' },
      { name: 'JavaScript', level: 'intermediate' },
      { name: 'HTML', level: 'advanced' },
      { name: 'CSS', level: 'advanced' },
    ],
  },
  'Frameworks & Libraries': {
    icon: Braces,
    items: [
      { name: 'React', level: 'advanced' },
      { name: 'React Native', level: 'intermediate' },
      { name: 'Node.js', level: 'advanced' },
      { name: 'Express.js', level: 'intermediate' },
      { name: 'Tailwind CSS', level: 'intermediate' },
      { name: 'Next.js', level: 'basic' },
    ],
  },
  'Databases': {
    icon: Database,
    items: [
      { name: 'PostgreSQL', level: 'intermediate' },
      { name: 'MongoDB', level: 'intermediate' },
      { name: 'Oracle SQL', level: 'basic' },
    ],
  },
  'Dev Tools': {
    icon: Wrench,
    items: [
      { name: 'VS Code', level: 'advanced' },
      { name: 'Jupyter Notebook', level: 'basic' },
      { name: 'LaTeX', level: 'basic' },
      { name: 'GitHub', level: 'advanced' },
      { name: 'Postman', level: 'intermediate' },
    ],
  },
  'CI/CD & Deployment': {
    icon: Rocket,
    items: [
      { name: 'Netlify', level: 'basic' },
      { name: 'Render', level: 'intermediate' },
      { name: 'Vercel', level: 'intermediate' },
      { name: 'Docker', level: 'basic' },
    ],
  },
};

const Skills = () => {
  return (
    <section id="skills">
      <SectionTitle title="Skills" />

      {/* Proficiency legend */}
      <div className="flex gap-4 flex-wrap mb-6">
        <div className="flex items-center gap-2 sm:text-sm text-[13px]">
          <span className="sm:w-3 sm:h-3 h-2.5 w-2.5 rounded-full bg-green-700 border border-green-700" />
          <span className="text-green-700 dark:text-green-400 font-medium">Basic</span>
        </div>
        <div className="flex items-center gap-2 sm:text-sm text-[13px]">
          <span className="sm:w-3 sm:h-3 h-2.5 w-2.5 rounded-full bg-yellow-800 border border-yellow-800" />
          <span className="text-yellow-800 dark:text-yellow-400 font-medium">Intermediate</span>
        </div>
        <div className="flex items-center gap-2 sm:text-sm text-[13px]">
          <span className="sm:w-3 sm:h-3 h-2.5 w-2.5 rounded-full bg-red-700 border border-red-700" />
          <span className="text-red-700 dark:text-red-400 font-medium">Advanced</span>
        </div>
      </div>

      {/* Skills section */}
      <div className="grid gap-8 mt-6">
        {Object.entries(skills).map(([category, { icon: Icon, items }]) => (
          <div key={category}>
            <div className="flex items-center gap-2 mb-3">
              <Icon className="w-5 h-5 text-purple-500" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{category}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {items.map(({ name: skill, level }) => {
                let IconComponent = null;
                switch (skill) {
                  case 'Java': IconComponent = <FaJava />; break;
                  case 'Python': IconComponent = <FaPython />; break;
                  case 'HTML': IconComponent = <FaHtml5 />; break;
                  case 'CSS': IconComponent = <FaCss3Alt />; break;
                  case 'C': IconComponent = <FaCode />; break;
                  case 'JavaScript': IconComponent = <FaJsSquare />; break;
                  case 'React': IconComponent = <FaReact />; break;
                  case 'React Native': IconComponent = <TbBrandReactNative />; break;
                  case 'Node.js': IconComponent = <FaNode />; break;
                  case 'Express.js': IconComponent = <SiExpress />; break;
                  case 'Tailwind CSS': IconComponent = <RiTailwindCssFill />; break;
                  case 'Next.js': IconComponent = <RiNextjsFill />; break;
                  case 'PostgreSQL': IconComponent = <BiLogoPostgresql />; break;
                  case 'MongoDB': IconComponent = <SiMongodb />; break;
                  case 'Oracle SQL': IconComponent = <GrOracle />; break;
                  case 'VS Code': IconComponent = <VscVscodeInsiders />; break;
                  case 'Jupyter Notebook': IconComponent = <SiJupyter />; break;
                  case 'LaTeX': IconComponent = <SiOverleaf />; break;
                  case 'GitHub': IconComponent = <FaGithub />; break;
                  case 'Postman': IconComponent = <SiPostman />; break;
                  case 'Netlify': IconComponent = <SiNetlify />; break;
                  case 'Render': IconComponent = <SiRender />; break;
                  case 'Vercel': IconComponent = <IoLogoVercel />; break;
                  case 'Docker': IconComponent = <FaDocker />; break;
                }

                const levelHoverColor = {
                  basic: 'hover:bg-green-100 hover:text-green-700 hover:border-green-700 dark:hover:bg-green-900 dark:hover:text-green-300',
                  intermediate: 'hover:bg-yellow-100 hover:text-yellow-800 hover:border-yellow-800 dark:hover:bg-yellow-900 dark:hover:text-yellow-300',
                  advanced: 'hover:bg-red-100 hover:text-red-700 hover:border-red-700 dark:hover:bg-red-900 dark:hover:text-red-300',
                };

                return (
                  <div
                    key={skill}
                    className={`skill-tag px-3 py-1 flex flex-row rounded-full sm:text-sm text-[12px] font-medium text-gray-800 dark:text-gray-200 bg-gray-200 dark:bg-gray-700 cursor-pointer border border-transparent ${levelHoverColor[level]}`}
                  >
                    <span className="skills flex items-center gap-2">
                      {IconComponent}
                      <BlurFadeText text={skill} />
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
