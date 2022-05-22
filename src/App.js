import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./Components/footer/Footer";
import Main from "./Components/home/Main";
import Topo from "./Components/home/Topo";

import Filme from "./Components/movie/TimeSession";

export default function App() {

    return (
        <BrowserRouter>
            <Topo />
            <Routes>
                <Route path="/" element={<Footer />} />
                <Route path="/movies/:idFilme" element={<Filme />} />
            </Routes>
        </BrowserRouter>
    );
}