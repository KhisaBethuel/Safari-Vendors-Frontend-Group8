import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import Swal from 'sweetalert2'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const Logout = () => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out of the application.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/sign-in");
      }
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      style={{ backgroundColor: "#CBE3E5" }}
      className="flex justify-between items-center p-4 text-black rounded-bl-3xl rounded-br-3xl">
      
      <div className="flex items-center space-x-2">
        <Link to="/" className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZqeuJVJ_hru2tVsfwE2nRxznt-pG4dEyavQ&s"
            alt="Your Logo"
            className="h-16"
          />
        </Link>
      </div>

      <span className="text-xl font-bold italic ml-2 text-right">
        SAFARI VENDORS
      </span>

      <ul className="hidden md:flex space-x-4 items-center">
        <li>
          <Link to="/" className="hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="hover:underline">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="flex items-center hover:underline">
            <img
              src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif"
              alt="Cart"
              className="h-10 w-10"
            />
          </Link>
        </li>
      </ul>

      <div className="md:hidden">
        
      <CiMenuBurger className="size-6" onClick={toggleMenu} />  

      </div>

      {isOpen && (
        <ul className="absolute top-20 left-0 w-full bg-gray-100 flex flex-col space-y-4 items-center p-4 md:hidden">
          <li>
            <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:underline" onClick={() => setIsOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/cart" className="flex items-center hover:underline" onClick={() => setIsOpen(false)}>
              {isOpen ? (
                <span className="text-lg">Cart</span>
              ) : (
              <img
                src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif"
                alt="Cart"
                className="h-10 w-10"
              />
              )}
            </Link>
          </li>
          <button onClick={Logout}>
            logout
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;