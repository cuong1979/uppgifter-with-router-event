import React,  { useState, useEffect } from 'react';
import eventListAssets from '../assets/eventsListan.json';
import { useHistory } from 'react-router-dom';


function Event() {
    const [eventList, setEventList] = useState ([]);
    const history = useHistory();

    useEffect(() => {
        setEventList(eventListAssets);
        
    },[]);
    
    console.log(eventList)
    return (
        <section>
            <h1>Events</h1>
            
                {eventList.map((events) => {
                   return (
                    <div className="events" key={events.id} onClick={ () => history.push(`/buy/${events.id}`)}>
                       
                       <div className="events-date">
                           <div className="inside-date">
                                <p>{events.date}</p>
                           </div>
                        </div>
                        <div className="events-all">
                            <h2>{events.artist}</h2>
                            <p>{events.location}</p>
                            <div className="timecost">
                            <p className="events-time">{events.from} - {events.to} </p>
                            <p className="events-movecost">{events.prize}</p>
                       </div>
                       </div>
                       
                    </div>
                    )})
                }
                   
            
        </section>
    )
}

export default Event
