import React from 'react';

const About = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-700 mb-4">
          Hi, I'm Aryan Patankar, a passionate Full Stack Developer with over 5 years of experience in creating web applications. I specialize in React, Node.js, and cloud technologies.
        </p>
        <p className="text-gray-700 mb-4">
          My journey in tech started when I built my first website at the age of 15. Since then, I've been constantly learning and improving my skills to stay up-to-date with the latest technologies.
        </p>
        <p className="text-gray-700">
          When I'm not coding, you can find me hiking in the mountains, reading sci-fi novels, or experimenting with new recipes in the kitchen.
        </p>
      </div>
    </div>
  );
};

export default About;