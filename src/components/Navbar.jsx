import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, User, Code, Briefcase, Menu, X } from 'lucide-react';

const Navbar = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/skills', icon: Code, label: 'Skills' },
    { path: '/projects', icon: Briefcase, label: 'Projects' },
  ];

  return (
    <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold" onClick={() => onNavClick('/')}>
            My Portfolio
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="flex items-center hover:text-blue-200 transition-colors"
                  onClick={() => onNavClick(item.path)}
                >
                  <item.icon className="mr-1" size={18} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <ul className="md:hidden py-4">
            {navItems.map((item) => (
              <li key={item.path} className="mb-2">
                <Link
                  to={item.path}
                  className="flex items-center hover:text-blue-200 transition-colors"
                  onClick={() => {
                    onNavClick(item.path);
                    setIsMenuOpen(false);
                  }}
                >
                  <item.icon className="mr-1" size={18} />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;