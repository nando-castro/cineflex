import { Link } from "react-router-dom";

export default function Movie({ idMovie, source, setReturnButton }) {
    return (
        <Link to={`/filme/${idMovie}`}>
            <div className='flex-center filme' >
                <img src={source} alt="poster" onClick={() => setReturnButton("")} />
            </div>
        </Link>
    );
}