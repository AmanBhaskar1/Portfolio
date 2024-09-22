import React from "react";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import express from "../assets/express.png";
import github from "../assets/github.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import typescript from "../assets/typescript.png";
import jquery from "../assets/jquery.png";
import mongodb from "../assets/mongodb.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import sass from "../assets/sass.png";
import sql from "../assets/sql.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
  const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 4, src: react, title: "React", style: "shadow-blue-600" },
    { id: 5, src: tailwind, title: "Tailwind", style: "shadow-sky-400" },
    { id: 6, src: node, title: "NodeJs", style: "shadow-green-400" },
    { id: 7, src: bootstrap, title: "Bootstrap", style: "shadow-purple-500" },
    {
      id: 8,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    { id: 9, src: typescript, title: "TypeScript", style: "shadow-blue-800" },
    { id: 10, src: sass, title: "Sass", style: "shadow-pink-400" },
    { id: 11, src: sql, title: "SQL", style: "shadow-sky-600" },
    { id: 12, src: mongodb, title: "MongoDB", style: "shadow-green-600" },
    { id: 13, src: jquery, title: "jQuery", style: "shadow-sky-500" },
    { id: 14, src: express, title: "Express", style: "shadow-white" },
  ];
  return (
    <div
      name="experience"
      className="h-screen bg-gradient-to-b from-gray-800 to-black w-full "
    >
      <div className="mx-auto max-w-screen-lg p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => {
            return (
              <div
                key={id}
                className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg
                  ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
