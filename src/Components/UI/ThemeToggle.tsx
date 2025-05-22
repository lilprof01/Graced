import { Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/Stores";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <button className="btn-secondary bg-white dark:bg-black rounded-full p-2 z-[1000] fixed bottom-5 right-5 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out" onClick={toggleTheme}>
      {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

export default ThemeToggle;
