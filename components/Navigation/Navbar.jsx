"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { MdAdsClick } from "react-icons/md";
import { Nav_Links } from "../data/navlinks";
import Button from "@/ui/Buttons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navMobileLinks = Nav_Links.map((link) => (
    <Link
      href={link.href}
      key={link.title}
      onClick={closeMobileMenu}
      // Text color is dark on a white background
      className="block py-3 px-6 text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors duration-200"
    >
      {link.title}
    </Link>
  ));

  return (
    // Navbar background is white, text is black
    <nav className="bg-white sticky top-0 z-50 w-full shadow-md">
      <div className="max-w-[1450px] w-[90%] mx-auto flex justify-between items-center py-5">
        
        {/* Desktop Logo/Brand */}
        <Link href={"/"}>
          <div className="flex items-center gap-1 ">
            <h1 className="text-black font-semibold uppercase text-xl font-slab">
              CAREERHUB
            </h1>
            <MdAdsClick className="text-purple-600 text-3xl" />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="flex gap-10 items-center max-md:hidden text-gray-800">
          {Nav_Links.map((link, index) => (
            <Link href={link.href} key={index}>
              <li className="hover:text-purple-600 transition-colors duration-200">
                {link.title}
              </li>
            </Link>
          ))}
        </ul>

        <div className="flex justify-center items-center gap-4">
          <div className="max-md:hidden flex gap-3">
            <Link href={"/Login"}>
              <Button>Login</Button>
            </Link>
            <Link href={"/SignUp"}>
              <Button>Sign Up</Button>
            </Link>
          </div>

          <div
            className="md:hidden text-3xl cursor-pointer text-black"
            onClick={handleToggleMobileMenu}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>

    
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-40 transition-opacity duration-300" 
          onClick={closeMobileMenu}
        />
      )}
    
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl md:hidden z-50 transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* --- Logo and Close Button Container --- */}
        <div className="p-5 flex justify-between items-center border-b border-gray-100">
          {/* Mobile Menu Logo */}
          <Link href={"/"} onClick={closeMobileMenu}>
            <div className="flex items-center gap-1 ">
              <h1 className="text-black font-semibold uppercase text-xl font-slab">
                CARRERHUB
              </h1>
              <MdAdsClick className="text-purple-600 text-3xl" />
            </div>
          </Link>

          {/* Close button */}
          <div
            className="text-3xl cursor-pointer text-black"
            onClick={closeMobileMenu}
          >
            <X />
          </div>
        </div>

        {/* Mobile Nav Links */}
        <div className="flex flex-col pt-4">
          {navMobileLinks}
          <div className="mt-8 border-t border-gray-200 pt-4 px-6 flex flex-col gap-3">
             {/* Mobile Login/Signup Buttons */}
            <Link href={"/Login"} onClick={closeMobileMenu}>
              <Button className="w-full">Login</Button>
            </Link>
            <Link href={"/SignUp"} onClick={closeMobileMenu}>
              <Button className="w-full">Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;