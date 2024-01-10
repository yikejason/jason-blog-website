'use client';
import React, { FC } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavLinkProps {
  href: string;
  title: string;
  onClick: () => void;
  active: boolean;
}
const NavLink: FC<NavLinkProps> = ({ href, title, onClick, active }) => {
  return (
    <div
      className="mr-3 text-gray-500 hover:text-gray-900 font-medium"
      onClick={onClick}
    >
      <Link href={href}>
        {title}
        {active && (
          <motion.div
            layoutId="navigation-underline"
            className="navigation-underline"
            animate
          />
        )}
      </Link>
    </div>
  );
};

export default NavLink;

