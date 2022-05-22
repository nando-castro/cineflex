import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topo from "./Components/home/Topo";
import MovieChoice from "./pages/MovieChoice";
import MovieSession from "./pages/MovieSession";
import Seats from "./pages/Seats";
import Sucess from "./pages/Sucess";



const AppRoutes = () => {
    return (
        <Router>
            <Topo />
            <Routes>
                <Route exact path="/" element={<MovieChoice />} />
                <Route exact path="/sessions/:movieId" element={<MovieSession />} />
                <Route exact path="/seats/:sessionId" element={<Seats />} />
                <Route exact path="/sucess" element={<Sucess />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;