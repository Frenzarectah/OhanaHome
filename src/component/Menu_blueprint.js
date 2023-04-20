import React from "react";
import logo from '../assets/logo_square.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ()=>{
    return(
        <nav>
            <div className="w-full fixed bg-white h-16 border-y flex items-center">
                <img src={logo} alt="logo" className="w-16 m-2"/>
                <ul className="md:block md:flex md:flex-row items-center justify-around w-full md:w-3/5 border-1 text-[#6EB0FE] font-Roboto">
                    <a className="hover:underline hidden md:block" href="#home">Home</a>
                    <a className="hover:underline hidden md:block" href="#photo">Photos</a>
                    <a className="hover:underline hidden md:block" href="#contact">Contact</a>
                    <a className="hover:underline hidden md:block" href="#contact">Book Ohana</a>
                    <div className="m-1 flex md:hidden">
                        <FontAwesomeIcon icon={faBars} style={{color: "#6eb0fe"}} />
                    </div>
                </ul>
                
            </div>    
        </nav>
    )
}
export default Navbar