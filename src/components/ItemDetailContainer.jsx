import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"


function ItemDetailConteiner () {

    const {id} = useParams()
    const [detail, setDetail] = useState()

    useEffect(()=>{
        fetch( `https://rickandmortyapi.com/api/character/${id}`)
            .then(res => res.json())
            .then (res => setDetail(res))
    },[id])
  

    return(
        <div className="item__detail">
            <img src={detail?.image} alt="" />
            <div className="item__detail__info">
                <h3>{detail?.name}</h3>
                <p> Gender: {detail?.gender}</p>
                <p>Location: {detail?.location.name}</p>
                <p>Status: {detail?.status}</p>
                <p>Origin: {detail?.origin.name}</p>
                <p>{}</p>
            </div>
        </div>
    )
}

export default ItemDetailConteiner