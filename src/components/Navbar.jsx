import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" bg-orange-500 py-4 md:py-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1>React First Project</h1>

        {/*Mobail responsiv bar*/}

        <div>
          <button onClick={toggleMenu}>
            {isOpen ? <IoMdClose /> : <FaBars />}
          </button>
        </div>

        <ul className=" flex space-x-4 md:space-x-5">
          <li>Home</li>
          <li>Products</li>
          <li>Blogs</li>
          <li>Contact</li>
          <li>About Us</li>
        </ul>

        <button>Login</button>
      </div>
    </nav>
  );
};

export default Navbar;
