import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-200 to-pink-500 bg-clip-text text-transparent inline-block">
                        My Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                            className="p-6 rounded-xl border border-white/10 light:border-gray-300 hover:-translate-y-1 hover:border-cyan-200/20 light:shadow-cyan-400 light:shadow-md
                                hover:shadow-[0px_0px_5px_2px_theme('color.cyan.100'),0px_0px_15px_5px_theme('color.cyan.500')] transition"
                            onTouchStart={(e) =>
                                e.currentTarget.classList.add(
                                    "shadow-[0px_0px_5px_2px_theme('color.cyan.100'),0px_0px_15px_5px_theme('color.cyan.400')]", "light:shadow-xl"
                                )
                            }
                            onTouchEnd={(e) =>
                                e.currentTarget.classList.remove(
                                    "shadow-[0px_0px_5px_2px_theme('color.cyan.100'),0px_0px_15px_5px_theme('color.cyan.400')]", "light:shadow-xl"
                                )
                            }
                        >
                            <h3 className="text-xl font-bold mb-2 text-left light:text-gray-500">Business Website</h3>
                            <p className="text-gray-400 mb-4 text-left">
                                First paid website I built completely, including all the way to
                                domain setup and launch. This had a lot of "first's" for me, including hosting the website as well as dealing with domain setup.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["HTMl", "CSS", "Bootstrap", "Domain"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-cyan-500/10 hover:bg-cyan-200/20 rounded-full text-gray-200 light:text-gray-400 light:bg-cyan-500/20
                                            py-1 px-3 text-sm transition hover:shadow-[0_0_15px_theme('colors.cyan.200')] hover:text-cyan-200 hover:light:shadow-[0_0_15px_theme('colors.cyan.400')] hover:light:text-cyan-400"
                                        onTouchStart={(e) => e.currentTarget.classList.add("touch-hover-cyan")}
                                        onTouchEnd={(e) => e.currentTarget.classList.remove("touch-hover-cyan")}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center overflow-hidden">
                                <a
                                    href="https://sevierdents.com/"
                                    className="text-cyan-200 hover:text-cyan-100 hover:light:text-cyan-300 light:text-cyan-400"
                                >
                                    View Project →
                                </a>
                                <img src="./SD-logo.jpeg" alt="Business website" className="max-w-50 min-w-50 min-h-45 max-h-45 mx-2 rounded-xl" />
                            </div>
                        </div>
                        <div
                            className="p-6 rounded-xl border border-white/10 light:border-gray-300 hover:-translate-y-1 hover:border-pink-200/20 light:shadow-pink-500 light:shadow-md
                                hover:shadow-[0px_0px_5px_2px_theme('color.pink.200'),0px_0px_15px_5px_theme('color.pink.500')] transition"
                            onTouchStart={(e) =>
                                e.currentTarget.classList.add(
                                    "shadow-[0px_0px_5px_2px_theme('color.pink.200'),0px_0px_15px_5px_theme('color.pink.500')]", "light:shadow-xl"
                                )
                            }
                            onTouchEnd={(e) =>
                                e.currentTarget.classList.remove(
                                    "shadow-[0px_0px_5px_2px_theme('color.pink.200'),0px_0px_15px_5px_theme('color.pink.500')]", "light:shadow-xl"
                                )
                            }
                        >
                            <h3 className="mb-2 text-xl font-bold text-left light:text-gray-500">
                                Python/Tkinter Code Search App
                            </h3>
                            <p className="mb-4 text-gray-400 text-left">
                                As a Fleet Manager with Mavis Tires, I built this app using Python and Tkinter to help streamline and simplify a very tedious task I deal with daily of seraching through hundreds of codes on physical paper.
                            </p>
                            <div className="flex flex-wrap mb-4 gap-2">
                                {["Python", "Tkinter", "JSON"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-pink-500/10 hover:bg-pink-500/20 rounded-full text-gray-200
                                            py-1 px-3 text-sm transition hover:shadow-[0_0_15px_theme('colors.pink.500')] hover:text-pink-500 light:text-gray-400 light:bg-pink-500/20"
                                        onTouchStart={(e) => e.currentTarget.classList.add("touch-hover-pink")}
                                        onTouchEnd={(e) => e.currentTarget.classList.remove("touch-hover-pink")}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://github.com/ThirdRevelation7/mavis-fleet-app.git" className="text-pink-500 hover:text-pink-300">
                                    View Project →
                                </a>
                                <img src="./mavis-app-screenshot.png" alt="mavis app" className="max-w-50 min-w-50 max-h-45 min-h-45 rounded-xl mx-2" />
                            </div>
                        </div>
                        <div
                            className="p-6 rounded-xl border border-white/10 light:border-gray-300 hover:-translate-y-1 hover:border-cyan-200/20 light:shadow-cyan-400 light:shadow-md
                                hover:shadow-[0px_0px_5px_2px_theme('color.cyan.100'),0px_0px_15px_5px_theme('color.cyan.400')] transition"
                            onTouchStart={(e) =>
                                e.currentTarget.classList.add(
                                    "shadow-[0px_0px_5px_2px_theme('color.cyan.100'),0px_0px_15px_5px_theme('color.cyan.400')]", "light:shadow-xl"
                                )
                            }
                            onTouchEnd={(e) =>
                                e.currentTarget.classList.remove(
                                    "shadow-[0px_0px_5px_2px_theme('color.cyan.100'),0px_0px_15px_5px_theme('color.cyan.400')]", "light:shadow-xl"
                                )
                            }
                        >
                            <h3 className="text-xl font-bold mb-2 text-left light:text-gray-500">Flask/Python/SQL fan website</h3>
                            <p className="text-gray-400 mb-4 text-left">
                                First website I ever built, and using Python/Flask/SQLite to do so. Project built in dedication to my favorite gaming platform of all time. (Source Code on my <a href="https://github.com/ThirdRevelation7" className="text-cyan-200 hover:text-cyan-100 underline">GitHub!</a>)
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {["Python", "Flask", "CSS", "SQLite", "SQLAlchemy"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-cyan-500/10 hover:bg-cyan-200/20 rounded-full text-gray-200
                                            py-1 px-3 text-sm transition hover:shadow-[0_0_15px_theme('colors.cyan.200')] hover:text-cyan-200 light:text-gray-400 light:bg-cyan-500/20
                                            hover:light:shadow-[0_0_15px_theme('colors.cyan.400')] hover:light:text-cyan-400"
                                        onTouchStart={(e) => e.currentTarget.classList.add("touch-hover-cyan")}
                                        onTouchEnd={(e) => e.currentTarget.classList.remove("touch-hover-cyan")}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="https://youtu.be/jRdbYlCWoUA" className="text-cyan-200 hover:text-cyan-100 hover:light:text-cyan-300 light:text-cyan-400">
                                    View Project →
                                </a>
                                <img src="./ps-wbsite-login.png" alt="playstation website" className="max-w-50 min-w-50 max-h-45 min-h-45 rounded-xl mx-2" />
                            </div>
                        </div>
                        <div
                            className="p-6 rounded-xl border border-white/10 light:border-gray-300 hover:-translate-y-1 hover:border-pink-200/20 light:shadow-pink-500 light:shadow-md
                                hover:shadow-[0px_0px_5px_2px_theme('color.pink.200'),0px_0px_15px_5px_theme('color.pink.500')] transition"
                            onTouchStart={(e) =>
                                e.currentTarget.classList.add(
                                    "shadow-[0px_0px_5px_2px_theme('color.pink.200'),0px_0px_15px_5px_theme('color.pink.500')]", "light:shadow-xl"
                                )
                            }
                            onTouchEnd={(e) =>
                                e.currentTarget.classList.remove(
                                    "shadow-[0px_0px_5px_2px_theme('color.pink.200'),0px_0px_15px_5px_theme('color.pink.500')]", "light:shadow-xl"
                                )
                            }
                        >
                            <h3 className="mb-2 text-xl font-bold text-left light:text-gray-500">
                                React Movie App
                            </h3>
                            <p className="mb-4 text-gray-400 text-left">
                                First React project I built. Website I named Watchie that allows you to search for any movie using The Movie Database api as well as store your favorites.
                            </p>
                            <div className="flex flex-wrap mb-4 gap-2">
                                {["React", "CSS", "API", "Local Storage"].map((tech, key) => (
                                    <span
                                        key={key}
                                        className="bg-pink-500/10 hover:bg-pink-500/20 rounded-full text-gray-200
                                            py-1 px-3 text-sm transition hover:shadow-[0_0_15px_theme('colors.pink.500')] hover:text-pink-500 light:bg-pink-500/20 light:text-gray-400"
                                        onTouchStart={(e) => e.currentTarget.classList.add("touch-hover-pink")}
                                        onTouchEnd={(e) => e.currentTarget.classList.remove("touch-hover-pink")}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="flex justify-between items-center">
                                <a href="#" className="text-pink-500 hover:text-pink-300">
                                    View Project →
                                </a>
                                <img src="./watchie-screenshot.png" alt="movie website" className="max-w-50 min-w-50 max-h-45 min-h-45 rounded-xl mx-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    );
};
