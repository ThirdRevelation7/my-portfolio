import { useDarkMode } from "../context/ThemeContext";

const DarkModeToggle = () => {
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <button onClick={() => setDarkMode(!darkMode)} className="text-lg bg-none hover:light:text-purple-700 text-white hover:text-yellow-300 light:text-black cursor-pointer">
            {darkMode ? "⏾ Dark Mode" : "☼ Light Mode"}
        </button>
    );
};

export default DarkModeToggle;