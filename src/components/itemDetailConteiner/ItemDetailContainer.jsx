import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import ItemDetail from "../itemDetail/ItemDetail"
// FIREBAse
import { getProductId } from "../../firebase/db";

function ItemDetailConteiner () {

    const {id} = useParams()
    const [detail, setDetail] = useState()

    useEffect(()=>{
     getProductId(id,setDetail)
    },[id])
 

    return(
       <ItemDetail detail={detail} />
    )
}

export default ItemDetailConteiner