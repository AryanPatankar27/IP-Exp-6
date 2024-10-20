import React from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Code, Briefcase } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">My Portfolio</Link>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="flex items-center hover:text-blue-200 transition-colors">
                <Home className="mr-1" size={18} />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center hover:text-blue-200 transition-colors">
                <User className="mr-1" size={18} />
                About
              </Link>
            </li>
            <li>
              <Link to="/skills" className="flex items-center hover:text-blue-200 transition-colors">
                <Code className="mr-1" size={18} />
                Skills
              </Link>
            </li>
            <li>
              <Link to="/projects" className="flex items-center hover:text-blue-200 transition-colors">
                <Briefcase className="mr-1" size={18} />
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;