import React , { useState, useEffect } from 'react'
import { useParams} from 'react-router-dom'
import eventsTickets from '../assets/eventsListan.json'


function Tickets() {
    const { id } = useParams();
    const [tickets , setTickets] = useState({});
    console.log( id );

    useEffect(() => {
        console.log(eventsTickets)
        const ticketsId = eventsTickets.filter(buyObject => {
            return buyObject.id === parseInt(id);
        })
        setTickets(ticketsId[0])
       
        
    },[])


    return (
        <section>
            <h3 className="tickets-title">Tack för din beställning</h3>
            <div className="tickets-container">
                <div className="first-container">
                    <span>What</span>
                    <h2 className="tickets-artist">{tickets.artist}</h2> 
                    <p className="dots"></p>
                </div>
                <div className="middle-container">
                    <span>WHERE</span>
                    <p className="tickets-location"> {tickets.location}</p>
                    <p className="dots"></p>
                </div>
                <div className="last-container" >
                    <div className="tickets-date">
                        <span>WHEN</span>
                        <p className="tickets-text">{tickets.date} </p>
                    </div>
                    <div className="from-ticket-box">
                        <span>FROM</span>
                        <p className="tickets-text">{tickets.from}</p>
                    </div>
                    <div className="to-ticket-box">
                        <span>TO</span>
                        <p className="tickets-text">{tickets.to}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Tickets
