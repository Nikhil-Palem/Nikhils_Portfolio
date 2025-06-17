import React from 'react';
import '../index.css';
import Avatar from '@mui/material/Avatar';
import nikhil_img from '../assets/nikhil_img.jpg';
import { FaRegCalendarPlus } from 'react-icons/fa6';

function IntroSection() {
  return (
    <div id="home" className="w-full">
      <div className="flex flex-row items-center justify-between">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 border border-emerald-300 rounded-full px-3 py-2 dark:bg-emerald-900 dark:text-emerald-200 dark:border-emerald-600">
          <span className="relative flex items-center justify-center w-4 h-4">
            <span className="dot-anim absolute inset-0 rounded-full bg-emerald-400 dark:bg-emerald-500" />
            <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-300" />
          </span>
          <span className="xs:text-sm text-[12px] font-medium">Available for Working</span>
        </div>

        {/* Hire Me Button */}
        <div className="sm:mr-10">
          <button
            onClick={() =>
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="bg-blue-200 text-blue-700 border border-blue-300 hover:bg-blue-300 font-semibold py-2 px-6 rounded-full flex items-center gap-2 xs:text-sm text-[12px]"
          >
            <FaRegCalendarPlus />
            Hire Me
          </button>
        </div>
      </div>

      {/* Intro content */}
      {/* <div className="py-5 w-full"> */}
      <div className=" w-full py-5">
        <div className="w-full flex flex-row items-center justify-between sm:gap-10 gap-5">
          {/* Text section */}
          <div className=''>
            <h2 className="sm:text-3xl xs:text-xl text-[16px] font-bold mb-4 dark:text-white">
              Hi, I'm Nikhil Palem <span className="inline-block animate-wave sm:text-3xl xs:text-xl">👋</span>
            </h2>
            <p className="sm:text-lg text-[15px] w-full  mb-4 dark:text-gray-300">
              React Native & Full-stack Dev | Intern @EduSaathi | Java + DSA | I love building things and helping people
            </p>
          </div>

          {/* Avatar */}
          <div className=" flex items-center justify-center">
            <Avatar src={nikhil_img} sx={{ width: 100, height: 100 }}>
              {"Nikhil"?.charAt(0)}
            </Avatar>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default IntroSection;
