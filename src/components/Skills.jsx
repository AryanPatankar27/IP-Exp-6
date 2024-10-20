import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaReact, FaNodeJs, FaJsSquare, FaPython, FaAws, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiFirebase, SiMongodb, SiFlask, SiFastapi } from 'react-icons/si';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const skills = [
    { name: 'React', level: 90, color: '#61DAFB', icon: FaReact },
    { name: 'Node.js', level: 85, color: '#68A063', icon: FaNodeJs },
    { name: 'JavaScript', level: 80, color: '#F7DF1E', icon: FaJsSquare },
    { name: 'Python', level: 75, color: '#3776AB', icon: FaPython },
    { name: 'AWS', level: 70, color: '#FF9900', icon: FaAws },
    { name: 'Docker', level: 75, color: '#2496ED', icon: FaDocker },
    { name: 'Firebase', level: 80, color: '#FFCA28', icon: SiFirebase },
    { name: 'MongoDB', level: 85, color: '#47A248', icon: SiMongodb },
    { name: 'Flask', level: 70, color: '#000000', icon: SiFlask },
    { name: 'FastAPI', level: 75, color: '#009688', icon: SiFastapi },
  ];

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <div className="max-w-4xl mx-auto py-16" ref={ref}>
      <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
      <div className="bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="mb-6"
            custom={index}
            initial="hidden"
            animate={controls}
            variants={skillVariants}
            onMouseEnter={() => setHoveredSkill(skill.name)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <skill.icon className="w-6 h-6 mr-2" style={{ color: skill.color }} />
                <span className="text-lg font-medium" style={{ color: skill.color }}>
                  {skill.name}
                </span>
              </div>
              <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
            </div>
            <div className="relative w-full bg-gray-200 rounded-full h-4 overflow-hidden">
              <motion.div
                className="absolute top-0 left-0 h-full rounded-full"
                style={{ backgroundColor: skill.color }}
                initial={{ width: 0 }}
                animate={controls}
                variants={{
                  visible: { width: `${skill.level}%`, transition: { duration: 1, ease: "easeOut" } },
                }}
              />
            </div>
            <motion.div
              className="mt-2 text-sm text-gray-600"
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: hoveredSkill === skill.name ? 1 : 0,
                height: hoveredSkill === skill.name ? 'auto' : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {getSkillDescription(skill.name)}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

function getSkillDescription(skillName) {
  const descriptions = {
    'React': 'Building responsive and interactive user interfaces',
    'Node.js': 'Server-side JavaScript runtime for scalable applications',
    'JavaScript': 'Core language for both front-end and back-end development',
    'Python': 'Versatile language for web development, data analysis, and more',
    'AWS': 'Cloud computing services for deploying and managing applications',
    'Docker': 'Containerization for consistent development and deployment environments',
    'Firebase': 'Backend-as-a-Service platform for web and mobile app development',
    'MongoDB': 'NoSQL database for building scalable and flexible applications',
    'Flask': 'Lightweight Python web framework for building web applications',
    'FastAPI': 'Modern, fast (high-performance) Python web framework for building APIs',
  };
  return descriptions[skillName] || '';
}

export default Skills;