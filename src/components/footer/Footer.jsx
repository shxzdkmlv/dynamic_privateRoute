import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold mb-2">Recipe Hub</h2>
              <p className="text-lg">Discover and share amazing recipes with the world</p>
            </div>

            <div className="mt-6 sm:mt-0">
              <ul className="flex justify-center sm:justify-start space-x-8">
                <li>
                  <a href="#" className="hover:text-blue-500">Dashboard</a>
                </li>
                <li>
                  <a href="#recipes" className="hover:text-blue-500">Recipes</a>
                </li>
                <li>
                  <a href="#users" className="hover:text-blue-500">Users</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl hover:text-blue-400 transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl hover:text-pink-600 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-3xl hover:text-blue-700 transition-colors" />
            </a>
          </div>

          <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>&copy; 2025 Recipe Hub. All rights reserved.</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
