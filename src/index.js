import React from "react";

import ReactDOM from "react-dom/client";


const elem = document.getElementById("root");


const root = ReactDOM.createRoot(elem);


function App(){
    return <h1>Hola desde React</h1>
}

root.render(<App/>)