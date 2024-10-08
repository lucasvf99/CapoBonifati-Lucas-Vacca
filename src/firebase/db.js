import { getFirestore, collection, getDocs, query, where, doc, getDoc, addDoc} from "firebase/firestore";
import { app } from "./config";

const db = getFirestore(app);


// productos
export const getProducts = async (setProductos, category) => {
  
  if(!category){
    const querySnapshot = await getDocs(collection(db, "productos"));
    const productos = []
    
    querySnapshot.forEach((doc) => {
        productos.push(doc.data())
      });

      
      setProductos(productos)

    }else{
      const productsRef = collection(db, "productos");
      const q = query(productsRef, where("category", "==", category));
      const querySnapshot = await getDocs(q);
    
      const productos = []
    
      querySnapshot.forEach((doc) => {
        productos.push(doc.data())
      });
    
      setProductos(productos)
    }
}

// orden
export const setOrder = async (order) => {
try {
  const docRef = await addDoc(collection(db, "order"), {order});
  return docRef.id
} catch (e) {
  console.error("Error adding document: ", e);
}
}


// filtrado por id
export const getProductId = async (id,setProduct) => {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
      setProduct(docSnap.data()) 
  } else {
    console.log("No such document!");

  }
}