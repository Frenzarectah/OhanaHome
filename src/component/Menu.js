import React, { useEffect, useState } from "react";
import logo from '../assets/logo_square.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ()=>{
    const [appear,setAppear] = useState(true);
    useEffect(()=>{
        if (window.innerWidth <= '400'){
            setAppear(false);
        }else{
            setAppear(true);
        }
    },[]);
    
    return(
        <nav>
            <div className="w-full fixed bg-white h-16 flex items-center">
                <img src={logo} alt="logo" className="w-16 m-2"/>
                <ul className="rounded-lg bg-white/50 md:bg-transparent lg:bg-transparent flex flex-col text-justify absolute top-12 left-[39%] md:static md:flex-row items-center justify-around md:justify-around w-full md:w-3/5 text-[#6EB0FE] font-Roboto">
                    <a className={appear?"":"hidden"} href="#home">Home</a>
                    <a className={appear?"":"hidden"} href="#photo">Photos</a>
                    <a className={appear?"":"hidden"} href="#contact">Contact</a>
                    <a className={appear?"":"hidden"} href="#contact">Book!</a>
                    <div className="m-2 flex fixed top-1 right-1 md:hidden">
                        <FontAwesomeIcon icon={faBars} size='2xl' style={{color: "#6eb0fe"}} onClick={()=>setAppear(!appear)} />
                    </div>
                </ul> 
            </div>    
        </nav>
    )
}
export default Navbar