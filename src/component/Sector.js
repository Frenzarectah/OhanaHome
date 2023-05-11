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
            <div id="photo" className="w-full my-5 p-5 grid grid-rows-2 grid-cols-2 md:grid-rows-4 md:grid-cols-5 gap-3">
                <img className ="overflow-hidden w-[300px] h-auto" src={photo1}/>
                <img className ="overflow-hidden w-[300px] h-auto" src={photo2}/>
                <img className ="overflow-hidden w-[300px] h-auto" src={photo3}/>
                <img className ="overflow-hidden w-[300px] h-auto" src={photo4}/>
                <img className ="overflow-hidden w-[300px] h-auto" src={photo5}/>
                <img className ="overflow-hidden w-[300px] h-auto" src={photo6}/>
                <img className ="overflow-hidden w-[300px] h-auto" src={photo7}/>
                <img className ="overflow-hidden w-[300px] h-auto" src={photo8}/>
                <img className ="overflow-hidden w-[300px] h-auto" src={photo9}/>
                <img className ="overflow-hidden w-[300px] h-auto" src={photo10}/>
            </div>
        </section>
    )
}
export default Sector
