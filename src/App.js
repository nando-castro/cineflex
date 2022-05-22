import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import Main from "./Components/home/Main"
import Header from "./Components/home/Header";
import SessionsTimes from "./Components/session/SessionsTimes";

import "./Assets/css/reset.css"
import "./Assets/css/style.css"

export default function App() {

    const [returnButton, setReturnButton] = useState("button-return")

    return (
        <BrowserRouter>
            <Header returnButton={returnButton} />
            <Routes>
                <Route path="/" element={<Main setReturnButton={setReturnButton} />}></Route>
                <Route path="/filme/:idMovie" element={<SessionsTimes />}></Route>
            </Routes>
        </BrowserRouter>
    );
}