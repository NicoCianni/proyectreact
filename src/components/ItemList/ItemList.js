import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({products}) => {
    if (Array.isArray(products)){
        return(
            <div className='ListGroup'>
                {products.map(prod => <Item key={prod.id} {...prod} />)}
            </div>
        )
    }else (
        console.error("no es un array")
    )
}

export default ItemList