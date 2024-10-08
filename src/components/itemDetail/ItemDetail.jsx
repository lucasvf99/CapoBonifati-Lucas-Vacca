import './itemDetail.css'
import ItemCount from '../itemCount/ItemCount'

function ItemDetail ({detail}) {

    return ( 
        <div className="item__detail">
            <div className='item__detail__img'>
            <img src={detail?.image} alt="" />
            </div>
        <div className="item__detail__info">
            <h3>{detail?.name}</h3>
            <p> Precio: € {detail?.price}</p>
            <p> {detail?.description}</p>
        </div>
         <ItemCount item={detail}/>
    </div>
    )
}

export default ItemDetail