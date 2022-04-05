import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Features from "../components/main/features";
import MainProducts from "../components/products/main-products/main-products";
import '../styles/main.css'
import {Link}  from "react-router-dom"
import * as ROUTES from '../constants/routes'
import { productsPageProducts } from "../ListOfProducts";
export default function Main () {
  const [navbar,setNavbar] = useState(false)
  const changeBackground = () => {
    window.scrollY > 80 ? setNavbar(true) : setNavbar(false)
  }
  window.addEventListener('scroll',changeBackground)
  const products1 = productsPageProducts.slice(30,40)
  const products2 = productsPageProducts.slice(46,56) 
  
  
  return (
    <div className="main__container">
      <Header active={navbar}/>

      <div className="main__img__div">
        <span className="main__subtitle">КАЧЕСТВЕННО</span>

        <div style={{width:"50vw",maxWidth:"600px",maxHeight:"300px" , margin:"40px 0"}}>
          <h1 className="main__title">Оптика Взор</h1>
        </div>

        <div className="main__buttons__div">
          <Link to='/products/all'><button className="button-62">Каталог</button></Link>
          <Link to={ROUTES.CONTACTS}><button className="button-62-reverse">Контакты</button></Link>
        </div>
        
      </div>
        <MainProducts lowprice={true} items={products1}/>
        <Features backgroundColor={"white"}/>
        <MainProducts lowprice={false} items={products2}/>
      <Footer/>
    </div>
  )
}