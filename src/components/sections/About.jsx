import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "React",
        "TailwindCss",
        "Bootstrap",
        "CSS",
        "HTML"
    ];

    // const frontendIcons = {
    //     css: cssIcon,
    //     html: htmlIcon,
    //     js: jsIcon,
    //     react: reactIcon
    // };

    const frontendIcons = import.meta.glob('../../assets/Frontend/*.png', { eager: true });

    const backendIcons = import.meta.glob('../../assets/Backend/*.png', { eager: true });

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center relative py-20"
        >
            <div className="items-center flex-col mb-8 justify-center">
                <RevealOnScroll>
                    <img
                        src="./profile-pic.png" // Replace with your image URL
                        alt="Profile"
                        className="w-40 h-40 rounded-full border-4 light:border-5 border-cyan-300 light:border-pink-500 shadow-lg light:shadow-gray-400 z-40 my-image"
                    />
                </RevealOnScroll>
            </div>

            <div className="text-center max-w-3xl mx-auto px-4">
                <RevealOnScroll>
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-200 to-pink-500 bg-clip-text text-transparent inline-block hover:animate-pulse">
                        About Me
                    </h2>
                </RevealOnScroll>

                <div className="rounded-xl p-8 border-white/10 light:border-gray-300 light:shadow-pink-500 light:shadow-md border hover:-translate-y-1 transition-all duration-300 hover:shadow-[0px_0px_5px_2px_theme('color.pink.200'),0px_0px_15px_5px_theme('color.pink.500')] ease-in"
                    onTouchStart={(e) => {
                        e.currentTarget.classList.add(
                            "shadow-[0px_0px_5px_2px_theme('color.pink.200'),0px_0px_15px_5px_theme('color.pink.500')]", "light:shadow-xl"
                        );

                        e.currentTarget.querySelectorAll(".cyan-glow").forEach((div) => {
                            div.classList.add("touch-hover-cyan");
                        });
                    }}
                    onTouchEnd={(e) => {
                        e.currentTarget.classList.remove(
                            "shadow-[0px_0px_5px_2px_theme('color.pink.200'),0px_0px_15px_5px_theme('color.pink.500')]", "light:shadow-xl"
                        );

                        e.currentTarget.querySelectorAll(".cyan-glow").forEach((div) => {
                            div.classList.remove("touch-hover-cyan");
                        });
                    }}
                >
                    <RevealOnScroll>
                        <p className="text-gray-400 light:text-gray-500 mb-6">
                            What I may lack in work experience, I will more than make up for with drive, hard work, and focus. I thrive in team environments and will be extremely grateful for any opportunity to contribute and grow.
                        </p>
                    </RevealOnScroll>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
                            <RevealOnScroll>
                                <h3 className="text-xl text-gray-200 light:text-gray-500 font-bold mb-4">Frontend</h3>
                            </RevealOnScroll>

                            <div className="flex space-x-2">
                                {Object.entries(frontendIcons).map(([key, src]) =>

                                    <div key={key} className="items-center justify-center flex w-14 h-14 md:h-16 md:w-16 bg-cyan-200/10 light:bg-cyan-200/20 hover:light:bg-cyan-200/30 hover:bg-cyan-200/20 hover:shadow-[0px_0px_5px_2px_theme('color.cyan.100'),0px_0px_15px_5px_theme('color.cyan.500')] shadow-xl rounded-full cyan-glow">
                                        <img src={src.default} alt={key} className="w-7 h-7 object-contain md:w-8 md:h-8" />
                                    </div>


                                )}
                            </div>

                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
                            <RevealOnScroll>
                                <h3 className="text-xl text-gray-200 light:text-gray-500 font-bold mb-4">Backend</h3>
                            </RevealOnScroll>
                            <div className="flex space-x-2">
                                {Object.entries(backendIcons).map(([key, src]) =>
                                    <div key={key} className="items-center justify-center flex w-14 h-14 md:w-16 md:h-16 bg-cyan-200/10 light:bg-cyan-200/20 hover:light:bg-cyan-200/30 hover:bg-cyan-200/20 hover:shadow-[0px_0px_5px_2px_theme('color.cyan.100'),0px_0px_15px_5px_theme('color.cyan.500')] shadow-xl rounded-full cyan-glow">
                                        <img src={src.default} alt={key} className="w-7 h-7 object-contain md:w-8 md:h-8" />
                                    </div>

                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

