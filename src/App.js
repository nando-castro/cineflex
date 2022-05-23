import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import "./Assets/css/reset.css"
import "./Assets/css/style.css"
import Main from "./Components/home/Main"
import Header from "./Components/home/Header";
import SessionsTimes from "./Components/session/SessionsTimes";
import Seats from "./Components/seat/Seats";
import OrderData from "./Components/data/OrderData";

export default function App() {

    const [orderData, setOrderData] = useState("");
    const [returnButton, setReturnButton] = useState("button-return");

    return (
        <BrowserRouter>
            <Header returnButton={returnButton} />
            <Routes>
                <Route path="/" element={<Main setReturnButton={setReturnButton} />}></Route>
                <Route path="/filme/:idMovie" element={<SessionsTimes />}></Route>
                <Route path="/assentos/:idSessao" element={<Seats orderData={orderData} setOrderData={setOrderData} setReturnButton={setReturnButton}/>}></Route>
                <Route path="/sucesso" element={<OrderData orderData={orderData} setOrderData={setOrderData}/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}