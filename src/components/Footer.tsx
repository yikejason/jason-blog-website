import React from 'react';
import Image from 'next/image';
import GitHubIcon from '../../public/github-fill.svg';
import LinkedinIcon from '../../public/linkedin-fill.svg';

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
          <Image src={GitHubIcon} alt="GitHub" />
        </a>
        <a
          className="opacity-50 hover:opacity-80 font-normal"
          title="Linkedin"
          target="_blank"
          href="https://github.com/yikejason"
        >
          <Image src={LinkedinIcon} alt="Linkedin" />
        </a>
      </div>
      <div className="mt-4">
        <a
          href="mailto:18215513386@163.com"
          className="opacity-50 hover:opacity-80 font-normal"
        >
          18215513386@163.com
        </a>
      </div>
      <div className="mt-4">
        <a className="opacity-50 hover:opacity-80 font-normal">
          ©2023-2024 Jason. All Rights Reserved.
        </a>
      </div>
    </div>
  );
};

export default Footer;

