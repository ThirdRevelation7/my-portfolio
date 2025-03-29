import { useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";

export const NavBar = ({ menuOpen, setMenuOpen }) => {

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-19">
                    <a href="#home" className="font-mono text-xl font-bold text-cyan-300">
                        my<span className="text-pink-500">_portfolio</span>
                    </a>
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden light:text-black" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-200 hover:text-white transition-colors light:text-gray-500 hover:light:text-gray-300">
                            Home
                        </a>
                        <a href="#about" className="text-gray-200 hover:text-white transition-colors light:text-gray-500 hover:light:text-gray-300">
                            About
                        </a>
                        <a href="#projects" className="text-gray-200 hover:text-white transition-colors light:text-gray-500 hover:light:text-gray-300">
                            Projects
                        </a>
                        <a href="#contact" className="text-gray-200 hover:text-white transition-colors light:text-gray-500 hover:light:text-gray-300">
                            Contact
                        </a>
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};
