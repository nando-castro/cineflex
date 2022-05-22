import load from '../../Assets/img/loading.gif';
import styled from 'styled-components';

export default function Loading() {
    return (
        <LoadingScreen>
            <img src={load} alt="loading..." />
        </LoadingScreen>
    );
}

const LoadingScreen = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -100px 0 0 -100px;
    img {
    width: 200px;
    height: 200px;
    }
`