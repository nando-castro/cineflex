import React from 'react';
import axios from 'axios';
import img from '../../Assets/img/loading.gif';

function Filme({ source }) {
    return (
        <div className='flex-center filme'>
            <img src={source} />
        </div>
    );
}

function Loading (){
    return (
        <>
        <img src={img} alt='Carregando' />
        </>
    );
}

export default function Main() {

    const [filmes, setFilmes] = React.useState([]);

    React.useEffect(() => {

        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");

        promise.then(response => {

            setFilmes([...response.data])
        });

    }, []);
    console.log(filmes);
    return (
        <div className='flex-center main'>
            {
                filmes.length === 0 ? <Loading /> :
                    filmes.map(value =>
                        <Filme
                            source={value.posterURL}
                        />)}
        </div>
    );
}


/*
.then((response) => setFilmes(response.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
*/