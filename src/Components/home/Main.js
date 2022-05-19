import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../../services/api';

export default function Main() {

    const [filmes, setFilmes] = useState("");

    useEffect(() => {
        api
            .get("/movies")
            .then((response) => setFilmes(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);
    return (
        <div className='flex-center main'>
            <p>Title : {filmes.title}</p>
        </div>
    );
}