// src/components/Header.tsx
import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        {/* 로고 */}
        <a href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Jena Logo" className="h-6 w-auto" />
          <span className="font-bold text-lg text-gray-800">Jena</span>
        </a>

        {/* 메뉴 */}
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <a href="#resume" className="hover:text-blue-600 transition-colors">Resume</a>
          <a href="#posts" className="hover:text-blue-600 transition-colors">Posts</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
