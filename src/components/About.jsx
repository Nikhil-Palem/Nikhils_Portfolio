import React from 'react';
import SectionTitle from './Animations/SectionTitle';
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className='py-5'>
      <SectionTitle title="About" />

      <p className="mt-4 text-sm sm:text-base leading-relaxed text-gray-800 dark:text-gray-300">
        I'm Nikhil Palem, a B.Tech student at Anurag University and a skilled Full Stack and React Native developer with hands-on project experience. I'm currently interning at Edusaathi, building real-world solutions. I'm also exploring Data Science, particularly in AI and Machine Learning, with a strong foundation in Java and DSA. Curious and driven, I'm committed to learning and growing as a developer.
      </p>

      <div className='w-full flex justify-end'>
        <div
          className="inline-flex items-center gap-2 rounded-full mt-2 justify-end px-4 py-2 border border-emerald-300 bg-emerald-100 text-emerald-700 font-medium cursor-pointer transition group hover:bg-emerald-200 hover:shadow-md
          dark:border-emerald-600 dark:bg-emerald-900 dark:text-emerald-200 dark:hover:bg-emerald-800"
        >
          <span
            className="text-sm"
            onClick={() => window.open('/Nikhil_Palem-Resume.pdf', '_blank')}
          >
            View Resume
          </span>
          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
