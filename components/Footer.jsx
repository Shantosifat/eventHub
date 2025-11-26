import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 px-6 text-center  border-t border-gray-800/50">
      <p>
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-gray-400">EventHub</span>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
