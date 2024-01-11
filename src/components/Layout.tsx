'use client';
import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
      className="flex flex-col"
    >
      <div className="container mx-auto px-4 py-4 mt-24">
        <section className="max-w-prose grid gap-9 m-auto text-gray-600 leading-relaxed">
          {children}
        </section>
      </div>
    </motion.main>
  );
};

export default Layout;

