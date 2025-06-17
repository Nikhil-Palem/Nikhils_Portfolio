// components/BottomNavbar.jsx
import { Sun, Home, Github, Linkedin, Code2, Pen } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
const navbarItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "blogs", label: "Blog", icon: Pen },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com/Nikhil-Palem", icon: Github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/palem-nikhil/", icon: Linkedin },
  { name: "LeetCode", url: "https://leetcode.com/nikhil_palem/", icon: Code2 },
];

export default function BottomNavbar({ setDarkMode, darkMode }) {
  return (
    <TooltipProvider>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-full max-h-14 justify-center">
        {/* Overlay background adapts to light/dark */}
        <div className="fixed bottom-0 inset-x-0 h-14 w-full bg-white/40 dark:bg-black/80 backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" />

        {/* Dock container with light/dark styles */}
        <div
          className={
            `pointer-events-auto relative z-50 flex h-full items-center rounded-full shadow-lg transition-all duration-300 transform hover:px-2 hover:scale-110
            bg-white text-black border border-gray-400
            dark:bg-black dark:text-white dark:border-gray-600`
          }
        >
          {navbarItems.map((item) => (
            <DockIcon
              key={item.href}
              href={item.href}
              label={item.label}
              Icon={item.icon}
            />
          ))}
          <Separator />
          {socialLinks.map((item) => (
            <DockIcon
              key={item.name}
              href={item.url}
              label={item.name}
              Icon={item.icon}
            />
          ))}
          <Separator />
          <DockIcon
            Icon={darkMode ? BsFillMoonStarsFill : Sun}
            label={darkMode ? 'DarkMode' : 'LightMode'}
            onClick={() => setDarkMode(!darkMode)}
          />
        </div>
      </div>
    </TooltipProvider>
  );
}

function DockIcon({ href, Icon, label, onClick }) {
  const [hover, setHover] = useState(false);
  const iconButton = (
    <button
      onClick={onClick}
      className={
        `w-12 h-12 flex items-center justify-center rounded-full transition-all duration-300 transform hover:-translate-y-0.5
        hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer`
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Icon className="w-5 h-5" />
    </button>
  );

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {href ? <a href={href}>{iconButton}</a> : iconButton}
      </TooltipTrigger>
      {hover && (
        <TooltipContent
          side="top"
          sideOffset={5}
          className={
            `px-2 py-1 text-sm rounded
            bg-black text-white
            dark:bg-white dark:text-black`
          }
        >
          {label}
        </TooltipContent>
      )}
    </Tooltip>
  );
}

function Separator() {
  return <div className="w-px h-8 mx-2 bg-gray-300 dark:bg-gray-600" />;
}
