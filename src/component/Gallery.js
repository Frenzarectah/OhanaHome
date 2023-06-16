import React from "react";
import './head.css';
import photos from '../store.js';

const photosList = photos.map((item)=>{
    return(
        <img alt={item.alt} className={item.classes} src={item.url}/>
    );
});
   
const Gallery = () =>{
    return(
        <div id="photo" className="w-full my-5 p-5 grid grid-rows-2 grid-cols-2 md:grid-rows-4 md:grid-cols-4 gap-4">
                <div className="border-1 border-[#6eb0fe] font-Roboto text-xl text-[#6EB0FE]">Photos</div>
                    {photosList}
                </div>
        );

}
export default Gallery