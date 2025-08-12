import React from "react";
// import bgg from "../layout/bgg.jpg";
import bbg from "../layout/bbg.jpg";
import { ReactTyped } from "react-typed";
import myimage from "../layout/myimage.png";
import { NavLink } from "react-router-dom";
import mycv from '../layout/mycv.jpg'
import Projects from "./Projects";
const Home = () => {
  return (
    <><div
      // Inline background
      style={{
        backgroundImage: `url(${bbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      className="flex flex-col md:flex-row px-4 md:px-16 container mx-auto max-w-screen-2xl justify-between min-h-screen"
    >
      <div className="mt-20 w-full md:w-1/2 order-2 md:order-1">
        <small className="font-semibold text-white">Welcome to my page</small>
        <h1 className="text-3xl md:mt-2 font-semibold flex">
          <div className="relative group overflow-hidden cursor-default h-12 w-fit">
            <span className="block text-gray-100 transition-all duration-900 group-hover:-translate-y-8">
              Hello
            </span>
            <span className="block text-blue-500 absolute top-0 transition-all duration-300 group-hover:top-0 ">
              Hello
            </span>
          </div>
          <span>
            <span className="text-white">, I am a{" "}</span>
            <span className="hidden md:inline text-blue-400">
              <ReactTyped
                strings={[" Developer", "Engineer", "Programmer"]}
                typeSpeed={60}
                backSpeed={60}
                loop
              />
            </span>{" "}
          </span>
        </h1>
        <p className="cursor-default text-white">
          I am a skilled Full Stack Developer with a strong grasp of both front-end
          <span className="text-blue-600">(React)</span> and back-end
          <span className="text-blue-600">(Django)</span> and also Database
          <span className="text-blue-600">(MYSQL)</span>, enabling me to build
          comprehensive and efficient web applications. In addition to my
          development expertise, I have a solid understanding of Data Structures
          and Algorithms <span className="text-blue-600">(DSA)</span>, which allows me to write
          optimized and scalable code. My ability to seamlessly integrate my
          knowledge of DSA into my development work ensures that I create robust
          and high-performance solutions.
        </p>
        <NavLink to="/contact">
          <button
            type="button"
            className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 cursor-pointer"
          >
            Contact me
          </button>
        </NavLink>
        <a href={mycv} download="Abdul_Samad_CV.jpg">
    <button
      type="button"
      className="mt-3 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 me-2 mb-2 dark:bg-green-600 cursor-pointer dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      Download CV
    </button>
  </a>
      </div>
      <div className="w-full md:w-1/2 order-1 md:order-2 mb-2 flex justify-center items-center">
        <img
          src={myimage}
          alt="myimage"
          width={400}
          height={400}
          className="object-cover mx-auto"
        />
      </div>
    </div>
    <Projects/>
    </>
    
  );
};

export default Home;
