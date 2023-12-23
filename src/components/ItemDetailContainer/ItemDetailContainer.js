import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductsById(itemId)
            .then(response => {
                console.log("response ASDASD", {id: itemId, ...response})
                setProduct({id: itemId, ...response})
        })
            .catch(error => {
                console.error(error)
        })
    }, [itemId])

    return(
        <div className='ItemDetailContainer'>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer


