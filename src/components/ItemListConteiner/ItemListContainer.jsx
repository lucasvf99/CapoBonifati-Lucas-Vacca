import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import ItemList from "../itemList/ItemList";
// firebase
import { getProducts } from "../../firebase/db";


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { category } = useParams();


  useEffect(() => {
      getProducts( setProducts, category)
  }, [category]);



  return <ItemList productos={products} />;
}

export default ItemListContainer;


// lighttheme boton que cambie de valor ( true / false ) y cambiar las clases x ? lighthmose : darkmode 