import "./CartItem.css"
const CartItem = ({id, name, price, quantity, onPressDeleteButton}) => {
    return (
        <div className={"container"}>
            <div className={"inside-container"}>
                <p>{name}</p>
                <p>Cantidad: {quantity}</p>
                <p>Precio x Unidad: {price}</p>
                <div className={"delete-button"} onClick={() => onPressDeleteButton(id)}>
                    x
                </div>
            </div>
        </div>
        )
}

export default CartItem