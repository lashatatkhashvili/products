import { Route, Navigate, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Nav from "./components/nav/Nav";
import CreateProduct from "./pages/createProduct/CreateProduct";
import Products from "./pages/products/Products";

import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/create-product" element={<CreateProduct />} />
        <Route exact path="/products" element={<Products />} />
        <Route path="*" element={<Navigate to="/create-product" />} />
      </Routes>
      <ToastContainer autoClose={3000} position="top-center" />
    </>
  );
};

export default App;
