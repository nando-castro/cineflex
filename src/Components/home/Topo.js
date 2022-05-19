import Main from './Main';
import './style.css'

export default function Topo() {
    return (
        <>
            <div className="flex-center topo">
                CINEFLEX
            </div>
            <div className="flex-center info">
                <p>Selecione o filme</p>
            </div>
            <Main />
        </>
    );
}