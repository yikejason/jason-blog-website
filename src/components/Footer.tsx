import React from 'react';

const Footer = () => {
  return (
    <div className="w-full flex flex-col items-center pb-12">
      <div className="flex flex-wrap gap-3 mt-12">
        <a
          className="opacity-50 hover:opacity-80 font-normal"
          title="GitHub"
          target="_blank"
          href="https://github.com/yikejason"
        >
          GitHub
        </a>
        <a
          className="opacity-50 hover:opacity-80 font-normal"
          title="Linkedin"
          target="_blank"
          href="https://github.com/yikejason"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
};

export default Footer;

