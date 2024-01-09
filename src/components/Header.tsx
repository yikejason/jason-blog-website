import Link from 'next/link';
import NavLink from './NavLink';

const NavLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Portfolio',
    path: '/Portfolio',
  },
];

const Header = () => {
  return (
    <header className="fixed left-0 top-0 right-0 z-50 border-b border-gray-200 bg-white">
      <div className="flex container lg:py-4 px-4 py-2 mx-auto justify-between items-center">
        <Link href="/" className="text-gray-900 font-medium">
          Jason
        </Link>
        <div className="hidden md:block md:w-auto">
          <ul className="flex md:flex-row space-x-8">
            {NavLinks.map((item, i) => (
              <li key={i}>
                <NavLink title={item.title} href={item.path} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;

