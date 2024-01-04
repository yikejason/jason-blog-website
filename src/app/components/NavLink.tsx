import React, { FC } from 'react';
import Link from 'next/link';
interface NavLinkProps {
  href: string;
  title: string;
}
const NavLink: FC<NavLinkProps> = ({ href, title }) => {
  return (
    <div className="mr-3 text-gray-500 hover:text-gray-900 font-medium">
      <Link href={href}>{title}</Link>
    </div>
  );
};

export default NavLink;

