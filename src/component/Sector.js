import React from "react";
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
const Sector = ()=>{
    return(
        <section className="w-full font-Roboto text-md flex flex-col">
            <div id="home" className="w-full md:w-[75%] my-5 p-5">
                <p>Ohana home è il luogo ideale se vuoi goderti qualche giorno di relax nella bellissima città storica di Verona.
                Situato in una zona strategica della città, garantisce zero traffico, tranquillità e la vicinanza alle principali arterie
                urbane veronesi.</p>
                <br/>
                <p>Avrete a disposizione un intero appartamento di circa 70mq con tutti i comfort, tra i quali una cucina abitabile ed
                utilizzabile, camera da letto matrimoniale, un soggiorno con divano letto + letto singolo, biancheria, riscaldamenti, aria condizionata, wi-fi ad alta velocità e smart TV di ultima generazione.</p>
                <br/><p>Sarete in grado di raggiungere agevolmente i seguenti luoghi d'interesse:
                <ul>
                    <li><strong>FIERA:</strong> a 3 minuti di auto e a 10 minuti a piedi</li>
                    <li><strong>STAZIONE PORTA NUOVA:</strong> a 6 minuti in auto e 30 minuti a piedi</li>
                    <li><strong>ARENA:</strong> a 9 minuti in auto e 25 minuti a piedi.</li>
                    <li><strong>AEROPORTO:</strong> a 12 minuti in auto.</li>
                </ul>
                </p><br/>
                <p>Siamo inoltre disponibili per consigli e/o suggerimenti per vivere al meglio questa nostra città!</p>
                <p>Vi aspettiamo!</p>
                <p className="font-Italianno text-2xl">Ohana Staff</p>
            </div>
            <div id="photo" className="w-full my-5 p-5 grid grid-rows-2 grid-cols-2 md:grid-rows-4 md:grid-cols-4 gap-4">
                <div className="border-1 border-[#6eb0fe] font-Roboto text-xl text-[#6EB0FE]">Photos</div>
                <img alt="home_photo" className ="object-cover object-center overflow-hidden w-[300px] h-[300px]" src={photo1}/>
                <img alt="home_photo" className ="object-cover object-center overflow-hidden w-[300px] h-[300px]" src={photo2}/>
                <img alt="home_photo" className ="object-cover object-center overflow-hidden w-[300px] h-[300px]" src={photo3}/>
                <img alt="home_photo" className ="object-cover object-center overflow-hidden w-[300px] h-[300px]" src={photo4}/>
                <img alt="home_photo" className ="object-cover object-center overflow-hidden w-[300px] h-[300px]" src={photo5}/>
                <img alt="home_photo" className ="object-cover object-center overflow-hidden w-[300px] h-[300px]" src={photo6}/>
                <img alt="home_photo" className ="object-cover object-center overflow-hidden w-[300px] h-[300px]" src={photo7}/>
                <img alt="home_photo" className ="object-cover object-center overflow-hidden w-[300px] h-[300px]" src={photo8}/>
                <img alt="home_photo" className ="object-cover object-center overflow-hidden w-[300px] h-[300px]" src={photo9}/>
                <img alt="home_photo" className ="object-cover object-center overflow-hidden w-[300px] h-[300px]" src={photo10}/>
                <img alt="home_photo" className ="object-cover object-center overflow-hidden w-[300px] h-[300px]" src={photo11}/>
                <img alt="home_photo" className ="object-cover object-center overflow-hidden w-[300px] h-[300px]" src={photo12}/>
                <img alt="home_photo" className ="object-cover object-center overflow-hidden w-[300px] h-[300px]" src={photo13}/>
                <img alt="home_photo" className ="object-cover object-center overflow-hidden w-[300px] h-[300px]" src={photo14}/>
            </div>
        </section>
    )
}
export default Sector
