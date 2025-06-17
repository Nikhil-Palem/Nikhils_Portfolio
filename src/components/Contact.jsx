import React, { useState } from 'react';
import { FaRegCalendarPlus } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { BiMailSend } from "react-icons/bi";

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contact" className="bg-white text-gray-800 dark:bg-black dark:text-gray-100 mb-10 transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="sm:text-2xl text-xl font-bold mb-4">Contact</h2>
        <p className="text-2xl sm:text-3xl font-bold font-medium mb-6 text-indigo-600 dark:text-indigo-400">
          Get in touch
        </p>
        <p className="mb-6 sm:text-[16px] text-[14px]  text-gray-600 dark:text-gray-300">
          Want to chat about a project or collaboration? Feel free to send me a <strong className='hover:cursor-pointer text-indigo-600 dark:text-indigo-400'><a href="sms:+916302247559?&body=Hi, I'm interested in your work!">message</a></strong> — I usually respond quickly. You can also drop a DM on <strong className='hover:cursor-pointer text-indigo-600 dark:text-indigo-400'><a href="https://www.linkedin.com/in/palem-nikhil/">LinkedIn</a></strong> for a faster reply!
        </p>
        <div className="flex items-center justify-center w-full">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-100 text-blue-700 border border-blue-300 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700 dark:hover:bg-blue-800 font-semibold py-2 px-6 rounded-full flex items-center gap-2 transition-colors"
          >
            {showForm ? (
              <>
                <IoClose />
                Close
              </>
            ) : (
              <>
                <FaRegCalendarPlus />
                Hire Me
              </>
            )}
          </button>
        </div>

        {showForm && (
          <form className="mt-8 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md text-left transition-colors">
            <div className="w-full flex flex-col md:flex-row items-center gap-6 md:gap-20">
              <div className="mb-4 w-full">
                <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white"
                />
              </div>
              <div className="mb-4 w-full">
                <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message..."
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-black dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-100 text-blue-700 border border-blue-300 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700 dark:hover:bg-blue-800 font-semibold py-2 px-6 rounded-full flex items-center gap-2 transition-colors"
            >
              <BiMailSend />
              <span>Submit</span>
            </button>
          </form>
        )}
      </div>

      <footer className="mt-16 text-center sm:text-sm text-[12px] text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Nikhil Palem — Built with ❤️ using React & Tailwind CSS
      </footer>
    </section>
  );
};

export default Contact;
