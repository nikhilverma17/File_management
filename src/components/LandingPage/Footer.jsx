// Footer.js
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6">
      <div className="flex justify-between items-center px-8">
        <div className="text-gray-600 dark:text-gray-300">
          <p>&copy; 2024 Nextly. All Rights Reserved.</p>
        </div>
        <div className="space-x-4">
          <a href="#privacy" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Privacy</a>
          <a href="#terms" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Terms</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
