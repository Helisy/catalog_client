import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Product from "./pages/Product";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para a tela principal */}
        <Route path="/" element={<Search />} />

        {/* Rota para a tela de produtos com parâmetro dinâmico */}
        <Route path="/products/:product_sku" element={<Product />} />
      </Routes>
    </Router>
  );
}