import React, { useState, useEffect, useRef } from 'react';
import SectionTitle from './Animations/SectionTitle';
import { FaGithub, FaGlobe, FaDownload } from "react-icons/fa";
// import tripimg from '../assets/trip1.png';
import CampusConnectimg from '../assets/cc1.png';
import tripimg from '../assets/trip1.png'
const projects = [
  {
    id: 1,
    image: tripimg,
    type: 'Website',
    title: 'Trip Expenses',
    description: 'A responsive web application built with React and Node.js that lets friends collaboratively track and manage tour expenses. Users can securely log in, then add, update, delete, and edit payment records, with detailed breakdowns of individual and total costs for each trip. Integrated authentication ensures only authorized users can access and modify expense data.',
    gitHub: 'https://github.com/Nikhil-Palem/trip-expenses',
    websiteLink: 'https://trip-expenses.vercel.app/',
  },
  {
    id: 2,
    image: CampusConnectimg,
    type: 'Mobile App',
    title: 'Campus Connect',
    description: 'A React Native mobile platform connecting college students with alumni for mentorship, referrals, and career guidance. Core features include college‑based alumni search, connection requests, personalized news feeds, real‑time chat, notifications, and verified alumni badges to foster trust. Upcoming modules will add referral requests, resume reviews, company‑wise alumni explorers, and a B2B dashboard for institutional insights.',
    gitHub: 'https://github.com/Nikhil-Palem/CampusConnect',
    websiteLink: 'https://expo.dev/accounts/nani_palem/projects/campusconnect/builds/d9fe0d1e-b0e7-4c28-a2f2-f43815e63070',
  }
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [Hover, setHover] = useState(false);
  const intervalRef = useRef(null);
  const [transition, setTransition] = useState(true);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent(prev => {
        if (prev < projects.length - 1) {
          return prev + 1;
        } else {
          setTransition(false);
          requestAnimationFrame(() => {
            setCurrent(projects.length);
            requestAnimationFrame(() => {
              setTransition(true);
              setCurrent(0);
            });
          });
          return prev;
        }
      });
    }, 3000);
  };

  const stopAutoSlide = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const translateX = current <= projects.length - 1 ? -current * 100 : 100;

  return (
    <section
      id="projects"
      className="py-20 bg-white bg-opacity-10 backdrop-blur-xl dark:bg-black dark:bg-opacity-20"
    >
      <div className=" w-full">
        <SectionTitle title="Projects" />
        <div
          className="overflow-hidden mb-3 cursor-pointer relative"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          <div
            className={`flex ${transition ? 'transition-transform duration-700 ease-in-out' : ''}`}
            style={{ transform: `translateX(${translateX}%)` }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {projects.map((proj) => (
              <div
                key={proj.id}
                className="w-full h-full flex-shrink-0 sm:p-6 flex flex-col items-center"
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full min-h-[300px] h-60 object-contain mx-auto rounded dark:invert"
                />
                <div className="w-full mt-5 flex justify-start flex-col">
                  <p className="text-sm text-indigo-600 font-medium dark:text-indigo-400">
                    {proj.type}
                  </p>
                  <h3 className="sm:text-2xl text-xl font-semibold text-gray-700 dark:text-gray-100">
                    {proj.title}
                  </h3>
                  <p className="mt-2 text-[13px] sm:text-[16px] text-gray-700 dark:text-gray-300 text-left">
                    {proj.description}
                  </p>
                  <div className="mt-4 flex gap-4">
                    <a
                      href={proj.websiteLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-white text-[20px] transition hover:text-black hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-full"
                    >
                      {proj.type === 'Mobile App' ? <FaDownload /> : <FaGlobe />}
                    </a>
                    <a
                      href={proj.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 dark:text-white text-[20px] transition hover:text-black hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded-full"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {Hover && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-50">
              <div className="bg-black/10 text-white px-5 py-3 rounded-full text-[15px] font-medium tracking-wide backdrop-blur-sm">
                ⏸ Paused
              </div>
            </div>
          )}
        </div>

        <div className="transform flex items-center justify-center gap-2">
          {projects.map((_, idx) => (
            <button
              key={idx}
              className={`w-4 h-2 rounded-full transition-colors duration-300 hover:cursor-pointer ${
                idx === current ? 'bg-black dark:bg-white' : 'bg-gray-400 dark:bg-gray-600'
              }`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
