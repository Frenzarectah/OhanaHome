import React from "react";
import Head from "../component/Head";
import NavBar from "../component/Menu";
import Sector from "../component/Sector";
import Footer from "../component/Footer";


const Template =()=>{
    return(
        <>
            <NavBar/>
            <Head/>
            <Sector/>
            <Footer/>
        </>
    );
}

export default Template;