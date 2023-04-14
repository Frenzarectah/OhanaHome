import React from "react";
import logo from '../assets/logo_square.png';

const Navbar = ()=>{
    return(
        <nav>
            <div className="w-full h-16 border-y flex items-center">
                <img src={logo} alt="logo" className="w-16 m-2"/>
                <ul className="flex flex-row items-center justify-around w-3/5 border-1 text-[#6EB0FE] roboto">
                    <a className="hover:underline" href="/">Home</a>
                    <a className="hover:underline" href="/">Photos</a>
                    <a className="hover:underline" href="/">Contact</a>
                    <a className="hover:underline" href="/">Book Ohana</a>
                </ul>
            </div>    
        </nav>
    )
}
export default Navbar