import React, { createContext, useState } from "react";

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0,
    total: 0,
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)


    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            setCart((prev) => {
                const updatedCart = [...prev, {...item, quantity }]
                updateTotals(updatedCart);
                return updatedCart
            });
        } else {
            console.error ("El producto ya fue agregado")
        }
    }

    const removerItem = (itemId) => {
        const cartUpdated = cart.filter (prod => prod.id !== itemId)
        setCart(cartUpdated)
        updateTotals([]);
    }

    const clearCart = () => {
        setCart([])
        updateTotals([]);
    }

    const isInCart = (itemId) => {
        return cart.some (prod => prod.id === itemId)
    }

    const updateTotals = () => {
        const nuevaCantidadTotal = cart.reduce((acc, item) => acc + item.quantity, 0)
        const nuevoTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        setTotalQuantity(nuevaCantidadTotal);
        setTotal(nuevoTotal);
    }


    return (
        <CartContext.Provider value={{ cart, addItem, total, totalQuantity, removerItem, clearCart, setCart}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider
