import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {


    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative"
        >
            <RevealOnScroll>
                {/* <div className="absolute top-[+140px] pt-5 left-1/2 transform -translate-x-1/2 z-10">
                <img
                    src="./profile-pic.png" // Replace with your image URL
                    alt="Profile"
                    className="w-40 h-40 rounded-full border-4 border-white"
                />
            </div> */}
                <div className="text-center z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-pink-500 bg-clip-text text-transparent leading-right ">Hi, I'm Christian!</h1>
                    <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                        I'm a full stack developer who loves crafting clean, scalable
                        web applications. My goal is to build solutions that offer both
                        exceptional performance and a delightful user experience.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <a
                            href="#projects"
                            className="bg-pink-500 text-white py-3 px-6 rounded font-medium transition overflow-hidden relative hover:-translate-y-1 duration-400 ease-in-out hover:shadow-[0_0_15px_theme('colors.pink.400')] hover:bg-pink-500/5"
                            onTouchStart={(e) => e.currentTarget.classList.add("touch-hover-pink")}
                            onTouchEnd={(e) => e.currentTarget.classList.remove("touch-hover-pink")}
                        >
                            View Projects
                        </a>
                        <a
                            href="#projects"
                            className="border border-pink-500 text-pink-500 py-3 px-6 rounded font-medium transition overflow-hidden relative hover:-translate-y-1 duration-400 ease-in-out hover:shadow-[0_0_15px_theme('colors.pink.400')] hover:bg-pink-500/10"
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