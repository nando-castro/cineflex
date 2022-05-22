import { Link } from 'react-router-dom';

export default function Movie({posterURL, idMovie, setReturnButton}) {
    return (
        <div className='background-movie'>
            <Link to={`/filme/${idMovie}`}>
                <img src={posterURL} alt="poster" onClick={() => setReturnButton("")} />
            </Link>
        </div>
    );
}