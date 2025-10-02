"use client";
import maxWidthContainer from "../shared/max-width-container";
import Link from "next/link";
import { useState } from "react";
import { Menu, X} from "lucide-react";
import { MdAdsClick } from "react-icons/md";
import { Nav_Links } from "../data/navlinks";
import Button from "@/ui/Buttons";


const Navbar = () => {
    const [openMoblieMenu,
        setOpenMobileMenu] =useState(false)

        const handleOpenMoblieMenu = () => {
            setOpenMobileMenu(!openMoblieMenu)
        }
  return (
    <nav className="py-5 bg-transparent relative top-0 z-10 w-full">
        <div className="max-w-[1450px] w-[90%] mx-auto flex justify-between items-center">
           <Link href={"/"}>
           <div className="flex items-center gap-1">
            <h1 className="text-black font-semibold uppercase text-xl">TalentCove</h1>

            <MdAdsClick
            className="text-purple-600 text-3xl" />
           </div>
           </Link>

           <ul className="flex gap-10 items-center max-md:hidden">
            {Nav_Links.map((link, index) => (<Link href={link.href} key={index}>
            <li>{link.title}</li>
            </Link>))}
        </ul>

        <div className="max-md: flex justify-center items-center gap-10">
            <Link href={"/create"} className="flex gap-4">
            <Button>Login</Button>
            <Button>SignUp</Button>
            </Link>

            <div className="md:hidden text-3xl cursor-pointer text-black"
            onClick={handleOpenMoblieMenu}>

                {openMoblieMenu ? <Menu/> : <X/>}
                 </div>

                 {openMoblieMenu && (
                    <ul className="md:hidden bg-purple-500 absolute top-15 right-5 px-4 py-6 text-center
                     text-white rounded-md flex flex-col gap-3 shadow-md">
                        {navLinks.map((link, index) =>
                            (<Link href={link.href} 
                            key={index}
                            onClick={() => setOpenMobileMenu (false)}
                            >
                            <li>{link.title}</li>
                             </Link>))}
                     </ul>
                 )}
            
        </div>
        </div>
    </nav>
  )
}

export default Navbar
