import React, { FC } from 'react';
import Link from 'next/link';
interface NavLinkProps {
  href: string;
  title: string;
}
const NavLink: FC<NavLinkProps> = ({ href, title }) => {
  return <Link href={href}>{title}</Link>;
};

export default NavLink;

