import React from "react";

import ReactDOM from "react-dom/client";

import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const elem = document.getElementById("root");


const root = ReactDOM.createRoot(elem);


function App(){
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={"Welcome"}/>
        </div>
    );
}

root.render(<App/>)