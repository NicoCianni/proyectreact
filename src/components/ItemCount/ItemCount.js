import "./ItemCount.css"
import { useState } from "react"


const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className="Contador">
            <div className="Controles">
                <button className="Boton" onClick={decrement}>-</button>
                <h5 className="Numero">{quantity}</h5>
                <button className="Boton" onClick={increment}>+</button>
            </div>
            <div>
                <button className="Boton" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )


}


export default ItemCount