import "./ItemDetailContainer.css"
import { useState, useEffect } from "react"
import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [productos, setProductos] = useState(null)
    
    useEffect(() => {
        getProductsById("1")
            .then(response => {
                setProductos(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [])

    return(
        <div className="ItemDetailContainer">
            <ItemDetail {...productos} />
        </div>
    )
}


export default ItemDetailContainer


