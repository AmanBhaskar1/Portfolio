import React from "react";
import weather from "../assets/weather.jpg";
import Ecomm from "../assets/Ecomm.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      src: weather,
      link: "https://github.com/AmanBhaskar1/weather",
    },
    {
      id: 2,
      src: Ecomm,
      link: "https://github.com/AmanBhaskar1/EcommFront",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-20"
    >
      <div className="p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="p-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my projects right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, link }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <div className="h-48 w-full overflow-hidden rounded-t-lg">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover duration-200 hover:scale-105"
                  />
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-center"
                  >
                    Code
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
