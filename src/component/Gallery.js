import React from "react";
import './head.css';

import photo1 from '../assets/1.JPG'
import photo2 from '../assets/2.JPG'
import photo3 from '../assets/3.JPG'
import photo4 from '../assets/4.JPG'
import photo5 from '../assets/5.JPG'
import photo6 from '../assets/6.JPG'
import photo7 from '../assets/7.JPG'
import photo8 from '../assets/8.JPG'
import photo9 from '../assets/9.JPG'
import photo10 from '../assets/10.JPG'
import photo11 from '../assets/11.jpeg'
import photo12 from '../assets/12.jpeg'
import photo13 from '../assets/13.jpeg'
import photo14 from '../assets/14.jpeg'

const Gallery = () =>{
    return(
        <div id="photo" className="w-full my-5 p-5 grid grid-rows-2 grid-cols-2 md:grid-rows-4 md:grid-cols-4 gap-4">
                <div className="border-1 border-[#6eb0fe] font-Roboto text-xl text-[#6EB0FE]">Photos</div>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo1}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo2}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo3}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo3}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo3}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo4}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo5}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo6}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo7}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo8}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo9}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo10}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo11}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo12}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo13}/>
                <img alt="home_photo" className ="gal object-cover rounded-md object-center overflow-hidden w-[250px] h-[250px] md:w-[300px] md:h-[250px]" src={photo14}/>
            </div>
        );

}
export default Gallery