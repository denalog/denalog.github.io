import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full mt-20 py-8 border-t border-gray-200 bg-gray-50">
      <div className="max-w-[700px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>© 2025 Jena Yu. All rights reserved.</p>

        <div className="flex gap-4 text-gray-600">
          <a href="https://github.com/denalog" target="_blank" rel="noopener noreferrer">
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/jenayu" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:jena@example.com">
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
