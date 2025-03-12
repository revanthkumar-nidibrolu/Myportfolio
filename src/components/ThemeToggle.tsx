
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check system preference and saved preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button 
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="relative w-10 h-10 rounded-full flex items-center justify-center overflow-hidden glass transition-all duration-300 hover:scale-110"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {isDarkMode ? (
          <Sun className="h-5 w-5 text-yellow-300 animate-fade-in" />
        ) : (
          <Moon className="h-5 w-5 text-blue-700 animate-fade-in" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
