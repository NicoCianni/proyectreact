import './Checkout.css'
import {useContext, useState} from "react";
import CartContext from "../../context/CartContext";
import {db} from "../../services/firebase/firebaseConfig";
import {query, where, writeBatch, documentId, getDocs, collection, addDoc} from 'firebase/firestore'

const Checkout =  () => {
    const {cart, clearCart, totalQuantity, total, removeItem} = useContext(CartContext)

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null)
    const onSubmitCard = async (e) => {
        e.preventDefault()
        try {

            setLoading(true)

            const objOrder = {
                buyer: {
                    name: e.target.name.value,
                    phoneNumber: e.target.phoneNumber.value,
                    mail: e.target.mail.value
                },
                items: cart,
                total: total,
                date: new Date().toString()
            }

            const batch = writeBatch(db)

            const outOfStock = []
            console.log("CART", cart)
            const ids = cart.map((prod) => prod.id)

            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const {docs } = productsAddedFromFirestore

            docs.forEach((doc) => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find((prod) => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({id: doc.id, ...dataDoc})
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.log("No hay stock suficiente de los siguientes productos: " + outOfStock.map((p) => p.name).join(', '))
            }


            alert("Orden creada")
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (<h1>Se esta generando su orden...</h1>)
    }

    if (orderId) {
        return (
            <div>
                <h1>Orden creada con éxito</h1>
                <p>El id de su orden es {orderId}</p>
            </div>
        )
    }

    return (
        <div className={"checkout-container"}>
            <div className={"checkout-menu"}>
                <h2>Checkout</h2>
            </div>
            <form onSubmit={onSubmitCard}>
                <input type="text" name={"name"} placeholder="Nombre" />
                <input type="text" name={"phoneNumber"} placeholder="Telefono" />
                <input type="text" name={"mail"} placeholder="Mail" />
                <div className={"create-order-container"}>
                    <button className={"create-order"}>
                        Crear orden
                    </button>
                </div>
            </form>

        </div>
    )
}

export default Checkout