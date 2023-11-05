import NavBar from "./components/NavBar/NavBar";


function App(){
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={"Welcome"}/>
        </div>
    );
}

export default App;