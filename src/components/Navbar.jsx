import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { Link, useLocation } from 'react-router';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname || '/');
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const hendelActiveLink = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="text-[#FFCC00] bg-[#090040] py-4 md:py-6 sticky top-0 z-10 border-b-2 border-[#FFCC00]">
      <div className="container mx-auto md:px-20 flex justify-between items-center ">
        <h1 className="font-bold  text-1xl">React First Project</h1>

        {/*Mobail responsiv bar*/}

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>

        <ul className="hidden md:flex gap-5 md:space-x-2 ">
          <li>
            {' '}
            <Link
              to={'/'}
              onClick={() => hendelActiveLink('/')}
              className={`${
                activeLink === '/' ? 'text-[#B13BFF]' : 'hover:text-[#B13BFF]'
              }`}
            >
              Home
            </Link>{' '}
          </li>
          <li>
            {' '}
            <Link
              to={'/products'}
              onClick={() => hendelActiveLink('/products')}
              className={`${
                activeLink === '/products'
                  ? 'text-[#B13BFF]'
                  : 'hover:text-[#B13BFF]'
              }`}
            >
              Products
            </Link>{' '}
          </li>
          <li>
            {' '}
            <Link
              to={'/blogs'}
              onClick={() => hendelActiveLink('/blogs')}
              className={`${
                activeLink === '/blogs'
                  ? 'text-[#B13BFF]'
                  : 'hover:text-[#B13BFF]'
              }`}
            >
              Blogs
            </Link>{' '}
          </li>
          <li>
            {' '}
            <Link
              to={'/contact'}
              onClick={() => hendelActiveLink('/contact')}
              className={`${
                activeLink === '/contact'
                  ? 'text-[#B13BFF]'
                  : 'hover:text-[#B13BFF]'
              }`}
            >
              Contact
            </Link>{' '}
          </li>
          <li>
            {' '}
            <Link
              to={'/about'}
              onClick={() => hendelActiveLink('/about')}
              className={`${
                activeLink === '/about'
                  ? 'text-[#B13BFF]'
                  : 'hover:text-[#B13BFF]'
              }`}
            >
              About Us
            </Link>{' '}
          </li>
        </ul>

        <button className="hidden md:flex bg-[#B13BFF] px-4 py-2 rounded cursor-pointer text-[#FFCC00] font-bold">
          Login
        </button>

        {/* Mobile menu collapesd */}

        <div
          className={`md:hidden w-full absolute bg-[#471396] top-full left-0 ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-2">
            <li>
              {' '}
              <Link className="hover:text-[#B13BFF]">Home</Link>{' '}
            </li>
            <li>
              {' '}
              <Link className="hover:text-[#B13BFF]">Products</Link>{' '}
            </li>
            <li>
              {' '}
              <Link className="hover:text-[#B13BFF]">Blogs</Link>{' '}
            </li>
            <li>
              {' '}
              <Link className="hover:text-[#B13BFF]">Contact</Link>{' '}
            </li>
            <li>
              {' '}
              <Link className="hover:text-[#B13BFF]">About Us</Link>{' '}
            </li>
            <li>
              <button className="md:flex bg-[#B13BFF] px-4 py-2 rounded cursor-pointer text-[#FFCC00] font-bold">
                Login
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
