import React from "react";
import MyPhoto from "../assets/Photo_AmanBhaskar.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import Typed from "typed.js";

const Home = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "MERN Developer"],
      typeSpeed: 50,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col items-center justify-center h-full max-w-screen-lg mx-auto px-4 md:flex-row">
        <div className="flex flex-col justify-center md:w-2/3 h-full mt-20">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a <span ref={el} />
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            Hi, I'm Aman Bhaskar, a passionate web developer with a B.Tech in
            Electronics and Communication Engineering from IIIT Guwahati. I
            specialize in creating responsive, high-performance web applications
            using React, Node.js, and modern web technologies. Check out my
            projects by clicking the button below.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src={MyPhoto}
            alt="my photo"
            className="rounded-2xl max-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
