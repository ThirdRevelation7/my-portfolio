import { RevealOnScroll } from "../RevealOnScroll";

export const Contact = () => {

    return (
        <section id="contact" className="min-h-screen flex items-center justify-around py-20">
            <RevealOnScroll>
                <div className="">
                    <h3 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-pink-500 bg-clip-text text-transparent leading-right introduction">Contact me</h3>
                </div>

                <div className="flex flex-center items-center justify-around">
                    <a className="size-18 hover:-translate-y-1.5 transition duration-300 ease-in-out overflow-hidden" href="https://github.com/ThirdRevelation7">{<img src="github.png" />}</a>
                    <a className="size-15 hover:-translate-y-1.5 transition duration-300 ease-in-out overflow-hidden" href="https://www.linkedin.com/in/christian-romero-19b819316">{<img src="linkedin.png" />}</a>
                </div>
            </RevealOnScroll>

        </section>
    );
};