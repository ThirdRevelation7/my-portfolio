import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "React",
        "TailwindCss",
        "Bootstrap",
        "CSS",
        "HTML"
    ];

    const backendSkills = [
        "Python",
        "Node.js",
        "SQL",
        "Flask",
        "AWS"
    ];

    return (
        <section
            id="about"
            className="min-h-screen flex items-center justify-center py-20"
        >

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
                        e.currentTarget.querySelectorAll(".pink-glow").forEach((span) => {
                            span.classList.add("touch-hover-pink");
                        });
                        e.currentTarget.querySelectorAll(".cyan-glow").forEach((span) => {
                            span.classList.add("touch-hover-cyan");
                        });
                    }}
                    onTouchEnd={(e) => {
                        e.currentTarget.classList.remove(
                            "shadow-[0px_0px_5px_2px_theme('color.pink.200'),0px_0px_15px_5px_theme('color.pink.500')]", "light:shadow-xl"
                        );
                        e.currentTarget.querySelectorAll(".pink-glow").forEach((span) => {
                            span.classList.remove("touch-hover-pink");
                        });
                        e.currentTarget.querySelectorAll(".cyan-glow").forEach((span) => {
                            span.classList.remove("touch-hover-cyan");
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
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (

                                    <span
                                        key={key}
                                        className="bg-cyan-200/10 light:bg-cyan-200/20 hover:bg-cyan-200/20 rounded-full text-gray-200 light:text-gray-500
                                                   py-1 px-3 text-sm transition hover:shadow-[0_0_15px_theme('colors.cyan.200')] hover:text-cyan-200 hover:light:text-cyan-400 cyan-glow
                                                   hover:light:shadow-[0_0_15px_theme('colors.cyan.400')]"
                                    >
                                        {tech}

                                    </span>

                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all duration-300">
                            <RevealOnScroll>
                                <h3 className="text-xl text-gray-200 light:text-gray-500 font-bold mb-4">Backend</h3>
                            </RevealOnScroll>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (

                                    <span
                                        key={key}
                                        className="bg-pink-500/10 light:bg-pink-500/20 hover:bg-pink-500/20 rounded-full text-gray-200 light:text-gray-500
                                                   py-1 px-3 text-sm transition hover:shadow-[0_0_15px_theme('colors.pink.500')] hover:text-pink-500 pink-glow"
                                    >
                                        {tech}

                                    </span>

                                ))}


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section >
    );
};

