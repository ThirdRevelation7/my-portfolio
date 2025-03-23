export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center py-20 ">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-200 to-pink-500 bg-clip-text text-transparent inline-block">
                    My Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div
                        className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-200/20
                                hover:shadow-[0_0_15px_theme('color.cyan.200')] transition"
                        onTouchStart={(e) =>
                            e.currentTarget.classList.add(
                                "shadow-[0_0_15px_theme('color.cyan.200')]"
                            )
                        }
                        onTouchEnd={(e) =>
                            e.currentTarget.classList.remove(
                                "shadow-[0_0_15px_theme('color.cyan.200')]"
                            )
                        }
                    >
                        <h3 className="text-xl font-bold mb-2 text-left">Sevier Dents</h3>
                        <p className="text-gray-400 mb-4 text-left">
                            First paid website I built completely, including all the way to
                            domain setup and launch.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTMl", "CSS", "Bootstrap", "Domain"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-cyan-500/10 hover:bg-cyan-200/20 rounded-full text-gray-200
                                            py-1 px-3 text-sm transition hover:shadow-[0_0_15px_theme('colors.cyan.200')] hover:text-cyan-200"
                                    onTouchStart={(e) => e.currentTarget.classList.add("touch-hover-cyan")}
                                    onTouchEnd={(e) => e.currentTarget.classList.remove("touch-hover-cyan")}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a
                                href="https://sevierdents.com/"
                                className="text-cyan-200 hover:text-cyan-100"
                            >
                                View Project →
                            </a>
                        </div>
                    </div>
                    <div
                        className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-200/20
                                hover:shadow-[0_0_15px_theme('color.pink.500')] transition"
                        onTouchStart={(e) =>
                            e.currentTarget.classList.add(
                                "shadow-[0_0_15px_theme('color.pink.500')]"
                            )
                        }
                        onTouchEnd={(e) =>
                            e.currentTarget.classList.remove(
                                "shadow-[0_0_15px_theme('color.pink.500')]"
                            )
                        }
                    >
                        <h3 className="mb-2 text-xl font-bold text-left">
                            Company Fleet Code Searcher
                        </h3>
                        <p className="mb-4 text-gray-400 text-left">
                            First paid website I built completely, including all the way to
                            domain setup and launch.
                        </p>
                        <div className="flex flex-wrap mb-4 gap-2">
                            {["HTMl", "CSS", "Bootstrap", "Domain"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-pink-500/10 hover:bg-pink-500/20 rounded-full text-gray-200
                                            py-1 px-3 text-sm transition hover:shadow-[0_0_15px_theme('colors.pink.500')] hover:text-pink-500"
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
                        </div>
                    </div>
                    <div
                        className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-cyan-200/20
                                hover:shadow-[0_0_15px_theme('color.cyan.200')] transition"
                        onTouchStart={(e) =>
                            e.currentTarget.classList.add(
                                "shadow-[0_0_15px_theme('color.cyan.200')]"
                            )
                        }
                        onTouchEnd={(e) =>
                            e.currentTarget.classList.remove(
                                "shadow-[0_0_15px_theme('color.cyan.200')]"
                            )
                        }
                    >
                        <h3 className="text-xl font-bold mb-2 text-left">Sevier Dents</h3>
                        <p className="text-gray-400 mb-4 text-left">
                            First paid website I built completely, including all the way to
                            domain setup and launch.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["HTMl", "CSS", "Bootstrap", "Domain"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-cyan-500/10 hover:bg-cyan-200/20 rounded-full text-gray-200
                                            py-1 px-3 text-sm transition hover:shadow-[0_0_15px_theme('colors.cyan.200')] hover:text-cyan-200"
                                    onTouchStart={(e) => e.currentTarget.classList.add("touch-hover-cyan")}
                                    onTouchEnd={(e) => e.currentTarget.classList.remove("touch-hover-cyan")}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-cyan-200 hover:text-cyan-100">
                                View Project →
                            </a>
                        </div>
                    </div>
                    <div
                        className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-200/20
                                hover:shadow-[0_0_15px_theme('color.pink.500')] transition"
                        onTouchStart={(e) =>
                            e.currentTarget.classList.add(
                                "shadow-[0_0_15px_theme('color.pink.500')]"
                            )
                        }
                        onTouchEnd={(e) =>
                            e.currentTarget.classList.remove(
                                "shadow-[0_0_15px_theme('color.pink.500')]"
                            )
                        }
                    >
                        <h3 className="mb-2 text-xl font-bold text-left">
                            Company Fleet Code Searcher
                        </h3>
                        <p className="mb-4 text-gray-400 text-left">
                            First paid website I built completely, including all the way to
                            domain setup and launch.
                        </p>
                        <div className="flex flex-wrap mb-4 gap-2">
                            {["HTMl", "CSS", "Bootstrap", "Domain"].map((tech, key) => (
                                <span
                                    key={key}
                                    className="bg-pink-500/10 hover:bg-pink-500/20 rounded-full text-gray-200
                                            py-1 px-3 text-sm transition hover:shadow-[0_0_15px_theme('colors.pink.500')] hover:text-pink-500"
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
