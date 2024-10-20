import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="max-w-3xl mx-auto py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
      <motion.div 
        className="bg-white shadow-lg rounded-lg p-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
      >
       
        <motion.p 
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          Hello! I'm Aryan Patankar, a passionate Full Stack Developer with a keen interest in building scalable web applications and exploring new technologies.
        </motion.p>
        <motion.p 
          className="text-lg text-gray-700"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          With expertise in React, Node.js, and cloud technologies, I strive to create efficient and user-friendly solutions to complex problems.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default About;