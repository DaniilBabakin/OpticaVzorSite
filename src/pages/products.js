import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ProductPageProducts from "../components/products/productsPage/productsPage";
export default function Products (){
  return(
    <div>
      <Header active/>
      <ProductPageProducts/>
      <Footer/>
    </div>
  )
}