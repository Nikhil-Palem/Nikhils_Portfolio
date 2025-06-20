import React, { useEffect, useState } from 'react';
import BottomNav from './components/BottomNav';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import IntroSection from './components/IntroSection';
import BlurFade from './components/Animations/BlurFade';
import BlurFadeText from './components/Animations/BlurFadeText';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const mode = localStorage.getItem('mode') === 'true';
  const [darkMode, setDarkMode] = useState(mode);

  useEffect(() => {
    localStorage.setItem('mode', darkMode);
  }, [darkMode]);


  return (<>
    <div className={darkMode ? 'dark' : ''}>
      <div className="w-full flex items-center justify-center py-5 pb-10 bg-white text-black dark:bg-black dark:text-white transition-all duration-500">
        <div className="max-w-full md:max-w-[50%] w-full sm:px-10 px-5">
          <BlurFade delay={0.1}><IntroSection /></BlurFade>
          <BlurFade delay={0.2}><About /></BlurFade>
          <BlurFade delay={0.4}><Experience /></BlurFade>
          <BlurFade delay={0.6}><Education /></BlurFade>
          <BlurFade delay={0.8}><Skills /></BlurFade>
          <BlurFade delay={1.0}><Projects /></BlurFade>
          <BlurFade delay={1.2}><Contact /></BlurFade>
        </div>
      </div>
      <BottomNav darkMode={darkMode} setDarkMode={setDarkMode} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
        toastClassName={() =>
          darkMode
            ? "bg-blue-900 flex flex-row text-white px-4 py-3 rounded-md shadow-lg border border-blue-500"
            : "bg-emerald-100  flex flex-row text-black px-4 py-3 rounded-md shadow-lg border border-emerald-400"
        }
        bodyClassName="text-sm font-medium"
        progressClassName={() =>
          darkMode ? "bg-blue-300" : "bg-emerald-500"
        }
      />
    </div>
  </>
  );
}

export default App;
