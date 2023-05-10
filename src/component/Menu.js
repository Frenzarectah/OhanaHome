import React, { useEffect, useState } from "react";
import logo from '../assets/logo_square.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = ()=>{
    const [appear,setAppear] = useState(true);
    useEffect(()=>{
        if (window.innerWidth <= '770'){
            setAppear(false);
        }else{
            setAppear(true);
        }
    },[]);

    
    return(
        <nav>
            <div className="w-full fixed bg-white h-16 flex items-center">
                <img src={logo} alt="logo" className="w-16 m-2"/>
                <ul className="rounded-lg bg-white/75 md:bg-transparent flex flex-col text-justify absolute top-12 right-0 md:static md:flex-row md:justify-around w-1/4 md:w-3/5 text-[#6EB0FE] font-Roboto">
                    <a className={appear?"text-2xl m-3 font-bold md:text-lg":"hidden"}  href="#home">Home</a>
                    <a className={appear?"text-2xl m-3 font-bold md:text-lg":"hidden"} href="#photo">Photos</a>
                    <a className={appear?"text-2xl m-3 font-bold md:text-lg":"hidden"} href="#contact">Contact</a>
                    <a className={appear?"text-2xl m-3 font-bold md:text-lg":"hidden"} href="#contact">Book!</a>
                </ul> 
                <div className="m-2 flex fixed top-1 right-1 md:hidden">
                        <FontAwesomeIcon icon={faBars} size='2xl' style={{color: "#6eb0fe"}} onClick={()=>setAppear(!appear)} />
                </div>
            </div>    
        </nav>
    )
}
export default Navbar