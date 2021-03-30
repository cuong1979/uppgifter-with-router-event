import React , { useState, useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import eventsBuy from '../assets/eventsListan.json'

function Buy() {
    
    const { id } = useParams();
    const history = useHistory();
    const [buy , setBuy] = useState({});
    console.log( id );

    useEffect(() => {
        console.log(eventsBuy)
        const buyId = eventsBuy.filter(buyObject => {
            return buyObject.id === parseInt(id);
        })
        setBuy(buyId[0])
       
        
    },[])
    
    return (
        <section className="buycontanier">
            <h3 className="buytext">You are about to score some tickets to</h3>
            <div className="buywrapper">
                <h2 className="buyartist">{buy.artist}</h2> 
                <p className="buydate">{buy.date} {buy.from} - {buy.to}</p>
                <p>@ {buy.location}</p>
                <p className="buymiddleprize">{buy.prize}</p>
            </div>
            <div className="buybutton">
                <button onClick={ () => history.push(`/tickets/${buy.id}`)}>Beställ</button>
            </div>
        </section>
       
    )
}

export default Buy
