import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
        alt="Profile"
        className="w-48 h-48 rounded-full mb-8 shadow-lg"
      />
      <h1 className="text-4xl font-bold mb-4">Aryan Patankar</h1>
      <p className="text-xl text-gray-600 mb-8">Full Stack Developer</p>
      <div className="flex space-x-6">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600"
        >
          <Github size={24} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="mailto:aryanpatankar27@gmail.com"
          className="text-gray-700 hover:text-blue-600"
        >
          <Mail size={24} />
        </a>
      </div>
    </div>
  );
};

export default Home;
