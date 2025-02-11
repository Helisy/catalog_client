import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar"

export default function Product() {
  // Obtém o parâmetro `product_sku` da URL
  const { product_sku } = useParams();

  return (
    <>
        <Navbar/>
    </>
  );
}