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
                    <input type="text" placeholder='Nome' style={{border:"1px solid black",margin:"2px"}} value={newBook.Nome} onChange={(e) => handleInputChange(e, 'Nome')} />
                    <input type="text" placeholder='Cognome' style={{border:"1px solid black",margin:"2px"}} value={newBook.Cognome} onChange={(e) => handleInputChange(e, 'Cognome')} />
                    <input type="text" placeholder='Email' style={{border:"1px solid black",margin:"2px"}} value={newBook.Email} onChange={(e) => handleInputChange(e, 'Email')} />
                    <input type="text" placeholder='tel' style={{border:"1px solid black",margin:"2px"}} value={newBook.tel} onChange={(e) => handleInputChange(e, 'tel')} /><br/>
                    Data Arrivo:<input type="date" placeholder='Arrivo' style={{border:"1px solid black",margin:"2px"}} value={newBook.Arrive} onChange={(e) => handleInputChange(e, 'Arrive')} />
                    Data Partenza:<input type="date" placeholder='Partenza' style={{border:"1px solid black",margin:"2px"}} value={newBook.Partenza} onChange={(e) => handleInputChange(e, 'Partenza')} />
                    <button type='submit' style={{backgroundColor: "green",padding:"2px"}}>invia</button>
                </form>
            </div>
        );
}
export default ApiManager;