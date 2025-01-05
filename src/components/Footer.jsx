import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>© {new Date().getFullYear()} Jeffrey Soucy</p>
      <p>
        <a href="https://github.com/Pilotjsauce" className="text-blue-400">GitHub</a> | 
        <a href="https://linkedin.com/in/soucyjb" className="text-blue-400"> LinkedIn</a> |
        <a href="mailto:jbsoucy26@gmail.com"> Email</a> 
      </p>
    </footer>
  );
};

export default Footer;
