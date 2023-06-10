import React from "react";
import Gallery from "./Gallery";

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
