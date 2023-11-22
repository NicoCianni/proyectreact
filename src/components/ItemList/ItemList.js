import "./ItemList.css"
import Item from "../Item/Item"


const ItemList = ({productos}) => {
    if (Array.isArray(productos)){
        return(
            <div className="ListGroup">
                {productos.map(prod => <Item key={prod.id} {...prod} />)}
            </div>
        );
    }else{
        console.error("no es un array");
        return null;
    }
}


export default ItemList