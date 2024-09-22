import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="p-4 max-w-screen-lg mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          I'm a web developer with a keen interest in crafting scalable,
          responsive web applications. I hold a B.Tech in Electronics and
          Communication Engineering from IIIT Guwahati, and my expertise lies in
          front-end technologies like HTML, CSS, JavaScript, React, and back-end
          tools such as MongoDB, Node.js, and REST APIs.
        </p>
        <br />
        <p className="text-xl">
          During my internship at NPES Pvt. Ltd., I transformed a WordPress site
          into a high-performance React-based platform, resulting in a 30%
          increase in mobile traffic. I've also developed a real-time weather
          app and a custom e-commerce website from scratch, demonstrating my
          ability to design user-friendly, visually appealing interfaces and
          handle complex backend logic.
          <p className="text-xl mt-4">
            Feel free to explore my work and get in touch if you're interested
            in collaborating on exciting projects!
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
