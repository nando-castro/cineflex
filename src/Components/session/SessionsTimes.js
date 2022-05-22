import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Session from './Session';
import Footer from '../footer/Footer';
import Loading from '../loading/Loading';

export default function SessionsTimes() {

    const {idMovie} = useParams();
    const [sessions, setSessions] = useState([])
    const [sessionData, setSessionData] = useState({})
    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);
        promise.then((response) => {
            const {data} = response;
            setSessions(data);
        });
        promise.catch((error) => {console.log(error.response);})
    },[idMovie]);


    return sessions.length !== 0 ? (
        <>
            <SessionsTimesScreen>
                <h1>Selecione o horário</h1>
                <div className="sessions">
                {sessions.days.map((session) => <Session key={session.id} weekday={session.weekday} date={session.date}
                showtimes={session.showtimes} setSessionData={setSessionData} />)}
                </div>
            </SessionsTimesScreen>
            <Footer posterURL={sessions.posterURL} title={sessions.title} sessionData={sessionData}/>
        </>
    ) : <Loading />
}

const SessionsTimesScreen = styled.div`
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;
        color: #293845;
        text-align: center;
        margin-top: 118px;
        margin-bottom: 34px;
    }
    p {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #293845;
        margin-bottom: 22px;
    }
    .sessions {
        margin-left: 24px;
    }
    .sessions__times {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 23px;
    }
    .session__time {
        width: 83px;
        height: 43px;
        background: #E8833A;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 8px 8px 0;
        cursor: pointer;
    }
    span {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: #FFFFFF;
        
    }
    * a {
        text-decoration: none;
    }
`