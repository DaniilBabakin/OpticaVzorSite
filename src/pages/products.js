import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ProductPageProducts from "../components/products/productsPage/productsPage";
export default function Products (){
  let { id } = useParams();
  console.log(id)
  return(
    <div>
      <Header active/>
      <ProductPageProducts id={id}/>
      <Footer/>
    </div>
  )
}