import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {


    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center relative"
        >
            <RevealOnScroll>
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-pink-500 bg-clip-text text-transparent leading-right introduction">Hi, I'm Christian!</h1>
                    <p className="text-gray-400 light:text-gray-500 text-lg mb-8 max-w-lg mx-auto">
                        I'm a full stack developer who loves crafting clean, scalable
                        web applications. My goal is to build solutions that offer both
                        exceptional performance and a delightful user experience.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#projects"
                            className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition-all overflow-hidden relative duration-400 ease-in-out hover:shadow-[0_0_15px_theme('colors.pink.400')] hover:bg-pink-500/5 hover:animate-pulse hover:-translate-y-1.5 light:hover:text-gray-500"
                            onTouchStart={(e) => e.currentTarget.classList.add("touch-hover-pink")}
                            onTouchEnd={(e) => e.currentTarget.classList.remove("touch-hover-pink")}
                        >
                            View Projects
                        </a>
                        <a
                            href="#projects"
                            className="border border-pink-500 text-pink-500 py-3 px-6 rounded font-medium transition overflow-hidden relative hover:animate-pulse hover:-translate-y-1.5 duration-400 ease-in-out hover:shadow-[0_0_15px_theme('colors.pink.400')] hover:bg-pink-500/10"
                            onTouchStart={(e) => e.currentTarget.classList.add("touch-hover-pink")}
                            onTouchEnd={(e) => e.currentTarget.classList.remove("touch-hover-pink")}
                        >
                            Contact Me
                        </a>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};