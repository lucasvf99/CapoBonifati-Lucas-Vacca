import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ItemListContainer from "./components/ItemListConteiner/ItemListContainer";
import ItemDetailConteiner from "./components/itemDetailConteiner/ItemDetailContainer";
import Carrito from "./components/carrito/Carrito";
import Checkout from "./components/checkout/Checkout";



function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />  
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer/>} />
          <Route path="/character/:id" element={<ItemDetailConteiner/>}/>
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
