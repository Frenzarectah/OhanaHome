import React from "react";

const Sector = ()=>{
    return(
        <h1 id="home" className="w-full font-Roboto text-md flex flex-col md:flex-row">
            <div className="w-full md:w-[75%]">
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
            <iframe title="verona video" className="w-full md-[25%]" src="https://www.youtube-nocookie.com/embed/4_S8_G6SPIg"></iframe>
  
        </h1>
    )
}
export default Sector
