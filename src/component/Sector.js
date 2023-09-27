import React from "react";
import Gallery from "./Gallery";

const Sector = ()=>{
    return(
        <section className="w-full font-Roboto text-md flex flex-col">
            <div id="home" className="w-full md:w-[75%] my-5 p-5">
                <p>Immerso nella bellezza di Verona, Ohana Home è il luogo ideale per regalarti un'indimenticabile pausa di relax. La nostra posizione privilegiata ti offre la tranquillità 
                    che desideri, lontano dal traffico, ma con la comodità di raggiungere facilmente le principali attrazioni della città.</p>
                <br/>
                <p>All'Ohana Home ti aspetta un appartamento spazioso di circa 70 mq, dotato di tutti i comfort di cui hai bisogno per un soggiorno perfetto.<br/> 
                    Potrai godere del comfort di una cucina completamente attrezzata, una camera da letto matrimoniale accogliente e un luminoso soggiorno 
                    con divano letto e letto singolo extra.<br/> Inclusi nel tuo soggiorno 
                    troverai biancheria di alta qualità, riscaldamento, aria condizionata, connessione Wi-Fi ad alta velocità e una smart TV di ultima generazione.<br/>
                    La posizione strategica dell'Ohana Home ti permette di raggiungere facilmente le principali attrazioni di Verona:<br/>    
                <ul>
                    <li><strong>FIERA:</strong> a 3 minuti di auto e a 10 minuti a piedi</li>
                    <li><strong>STAZIONE PORTA NUOVA:</strong> a 6 minuti in auto e 30 minuti a piedi</li>
                    <li><strong>ARENA:</strong> a 9 minuti in auto e 25 minuti a piedi.</li>
                    <li><strong>AEROPORTO:</strong> a 12 minuti in auto.</li>
                </ul>
                </p><br/>
                <p>Il nostro team sarà a tua disposizione per offrirti consigli e suggerimenti su come vivere al meglio la città di Verona, garantendoti un'esperienza autentica e indimenticabile.</p>
                <p>Scegli Ohana Home per il tuo soggiorno a Verona, Ti aspettiamo!</p>
                <p className="font-Italianno text-2xl">Ohana Staff</p>
            </div>
            <Gallery />
            <div id="contact" className="w-full md:w-[75%] my-5 p-5 flex flex-col">
                <div className="text-3xl m-3">PER INFO E DETTAGLI E DISPONIBILITA' CONTATTARE:</div>
                <div className="text-2xl m-3">Giorgia: <a href="tel:+393917118040">3917118040</a></div>
                <div className="text-2xl m-3">Maria: <a href="tel:+393895319347">3895319347</a></div>
            </div>
        </section>
    )
}
export default Sector
