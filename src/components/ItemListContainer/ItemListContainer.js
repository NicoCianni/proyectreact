import { useParams } from 'react-router-dom'
import { useState, useEffect, useContext}  from 'react'
import { getProducts , getProductsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import CartItem from '../CartItem/CartItem'

import { CartContext } from '../../context/CartContext'


import { getDocs, collection, query, where, doc, getDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const { cart } = useContext(CartContext)

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId ?
            query(collection(db, 'items'), where('category', '==', categoryId))
            : collection(db, 'items')

        getDocs(collectionRef)
            .then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
                setProducts(products)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            }
        )


    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer