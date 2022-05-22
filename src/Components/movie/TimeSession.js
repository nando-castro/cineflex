import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './style.css';

export default function Filme() {

    const { idMovie } = useParams();
    const [sessions, setSessions] = useState([])
    const [sessionData, setSessionData] = useState({})

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);

        promise.then((response) => {
            const { data } = response;
            setSessions(data);
        });
        promise.catch((error) => { console.log(error.response); })
    }, [idMovie]);

    return sessions.length !== 0 ? (
        <>
            <div className='session'>
                <h1>Selecione o horário</h1>
                <div className="session">
                    {sessions.days.map((session) => <SessionTime key={session.id} weekday={session.weekday} date={session.date}
                        showtimes={session.showtimes} setSessionData={setSessionData} />)}
                </div>
                <Footer posterURL={sessions.posterURL} title={sessions.title} sessionData={sessionData} />
            </div>
        </>
    ) :
        <Loading />
}