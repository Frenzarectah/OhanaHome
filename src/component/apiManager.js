import React, {useState } from 'react';
import axios from 'axios';

const ApiManager = () => {
    
    const [newBook, setNewbook] = useState({
        Nome: '',
        Cognome: '',
        Email:'',
        tel:'',
        Arrive: '',
        Partenza:''
    })
            const insertData = async () => {
                    const response = await axios.post("https://ohanahome.altervista.org/public/bookings",newBook);
                    if (response.status === 201) alert("Richiesta di prenotazione inviata!");
            };
            const handleInputChange = (e, field) => {
                setNewbook({ ...newBook, [field]: e.target.value });
            };
            const handleSubmit = (e) =>{
                e.preventDefault();
                insertData();
            }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Inviaci la tua richiesta di prenotazione! </h2>
                    <input type="text" placeholder='Nome' value={newBook.Nome} onChange={(e) => handleInputChange(e, 'Nome')} />
                    <input type="text" placeholder='Cognome' value={newBook.Cognome} onChange={(e) => handleInputChange(e, 'Cognome')} />
                    <input type="text" placeholder='Email' value={newBook.Email} onChange={(e) => handleInputChange(e, 'Email')} />
                    <input type="text" placeholder='tel' value={newBook.tel} onChange={(e) => handleInputChange(e, 'tel')} />
                    <input type="date" placeholder='Arrivo' value={newBook.Arrive} onChange={(e) => handleInputChange(e, 'Arrive')} />
                    <input type="date" placeholder='Partenza' value={newBook.Partenza} onChange={(e) => handleInputChange(e, 'Partenza')} />
                    <button type='submit'>invia</button>
                </form>
            </div>
        );
}
export default ApiManager;