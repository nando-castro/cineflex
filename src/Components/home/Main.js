import React from 'react';
import axios from 'axios';
import img from '../../Assets/img/loading.gif';
import { Link, useParams } from 'react-router-dom';
import Movie from './Movie';

function Loading() {
    return (
        <>
            <img src={img} alt='Carregando' />
        </>
    );
}

export default function Main({ setReturnButton }) {

    const [movies, setMovies] = React.useState([]);

    React.useEffect(() => {

        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(response => {

            setMovies([...response.data])
        });

    }, []);
    console.log(movies);

    return (
        <>
            <div className="flex-center info">
                <p>Selecione o filme</p>
            </div>
            <div className='flex-center main'>
                {
                    movies.length === 0 ? <Loading /> :
                        movies.map((movie) =>
                            <Movie
                                key={movie.id}
                                source={movie.posterURL}
                                idMovie={movie.id}
                                setReturnButton={setReturnButton}
                            />)}
            </div>
        </>
    );
}


/*
.then((response) => setFilmes(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
*/