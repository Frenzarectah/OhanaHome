import React from "react";

const Sector = ()=>{
    return(
        <main id="home" className="w-full font-Roboto text-md flex flex-col md:flex-row">
            <div className="w-full md:w-[75%] my-5 p-5">
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
            <iframe title="mappa" className="w-[25%]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1135.7214626567416!2d10.966019165182663!3d45.419111733240925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781e1d60945dbc3%3A0x6055ec6ef9def2a4!2sVia%20Giuseppe%20Ruffoni%2C%2037136%20Verona%20VR!5e0!3m2!1sit!2sit!4v1681735475935!5m2!1sit!2sit" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </main>
    )
}
export default Sector
