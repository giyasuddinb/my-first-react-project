import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white bg-orange-500 py-4 md:py-6 relative border-b-2 border-orange-800">
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
            {" "}
            <Link to={"/"} className="hover:text-orange-900">
              Home
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"products"} className="hover:text-orange-900">
              Products
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"blogs"} className="hover:text-orange-900">
              Blogs
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"contact"} className="hover:text-orange-900">
              Contact
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to={"about"} className="hover:text-orange-900">
              About Us
            </Link>{" "}
          </li>
        </ul>

        <button className="hidden md:flex bg-white px-4 py-2 rounded cursor-pointer text-black">
          Login
        </button>

        {/* Mobile menu collapesd */}

        <div
          className={`md:hidden w-full absolute bg-orange-300 top-full left-0 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col items-center py-4 space-y-2">
            <li>
              {" "}
              <Link>Home</Link>{" "}
            </li>
            <li>
              {" "}
              <Link>Products</Link>{" "}
            </li>
            <li>
              {" "}
              <Link>Blogs</Link>{" "}
            </li>
            <li>
              {" "}
              <Link>Contact</Link>{" "}
            </li>
            <li>
              {" "}
              <Link>About Us</Link>{" "}
            </li>
            <li>
              <button className="">Login</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
