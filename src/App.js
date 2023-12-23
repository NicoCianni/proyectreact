import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart"
import { CartProvider } from "./context/CartContext";
import { getDocs, collection, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "./services/firebase/firebaseConfig";
import { useEffect, useState } from 'react';



function App(){
    

        const [ itemList , setItemList ] = useState([])

        const [ newItemName , setNewItemName ] = useState ("");
        const [ newItemPrice, setNewItemPrice] = useState (0);
        const [ newItemStock , setNewItemStock] = useState(0)
        const itemsCollection = collection (db , "items" )

        const getItemList =async ()=>{
        
            const data = await getDocs(itemsCollection)
        
            const filteredData = data.docs.map( (doc)=> ({
                ...doc.data(),
                id:doc.id
            }))
        
            setItemList(filteredData)
            }
    
        useEffect(()=> {
        
            getItemList();
        },[])

        const onSubmitTitle = async ()=>{

            await addDoc(itemsCollection, {name:newItemName,
                                            stock:newItemStock,
                                            price:newItemPrice});

            getItemList()                                
        }

        const deleteItem = async (id)=> {
            const itemDoc = doc(db, "items" , id)
            await deleteDoc(itemDoc)

            getItemList();
        }

    return (

        <div>
            <div>
                <h2>Nuevo Producto</h2>
                <input placeholder="Nombre" onChange={(e)=> setNewItemName(e.target.value)}/>
                <input placeholder="Precio" type="number" onChange={(e)=> setNewItemPrice(e.target.value)}/>
                <input placeholder="Stock" type="number" onChange={(e)=> setNewItemStock(e.target.value)}/>
                <button onClick={onSubmitTitle}>Enviar</button>
            </div>

        <div className="App">
            {itemList.map ( (item)=>{
                <div key={item.id}>
                    <h2>Nombre:{item.name}</h2>
                    <h3>Precio:{item.price}</h3>
                    <h3>Stock: {item.quantity}</h3>
                    <button onClick={()=>deleteItem(item.id)}>Borrar</button>
                </div>
            })
            }
        </div>
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />}/>
                        <Route path="/category/:categoryId" element={ <ItemListContainer />}/>
                        <Route path="/item/:itemId" element={ <ItemDetailContainer />}/>
                        <Route path="/cart" element={<Cart />} />
                        <Route path="*" element={<h1>404 NOT FOUND</h1>}/>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;