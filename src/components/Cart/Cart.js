import './Cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {
    const { cart, clearCart, totalQuantity, total, removeItem } = useContext(CartContext)
    console.log(totalQuantity)
    if(totalQuantity === 0 ) {
        return (
            <div>
                <h1>No hay items en el carrito</h1>
                <div className={"full-width-button"}>
                    <Link to='/' className='checkout-link'>Productos</Link>
                </div>
            </div>
        )
    }

    return (
        <div>
            { cart.map(p => <CartItem key={p.id} {...p} onPressDeleteButton={removeItem}/>) }
            <div className={"total-container"}>
                <h3>Total: ${total}</h3>
            </div>
            <div className={"clear-cart-container"}>
                <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            </div>
            <div>
                <div className={"full-width-button"}>
                    <Link to='/checkout' className='checkout-link'>Checkout</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart