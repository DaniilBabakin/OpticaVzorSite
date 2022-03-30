import { useEffect, useState } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Features from "../components/main/features";
import MainProducts from "../components/products/main-products/main-products";
import '../styles/main.css'
import {Link}  from "react-router-dom"
import * as ROUTES from '../constants/routes'

export default function Main () {

  const [navbar,setNavbar] = useState(false)
  const changeBackground = () => {
    window.scrollY > 80 ? setNavbar(true) : setNavbar(false)
  }
  window.addEventListener('scroll',changeBackground)

  const products1 = [
    {id: 1, title: 'Очки номер 1', url:"/images/glasses1.jpg",oldPrice:5000,newPrice:4000},
    {id: 2, title: 'Очки номер 2', url:"/images/glasses2.jpg",oldPrice:4000,newPrice:3500},
    {id: 3, title: 'Очки номер 3', url:"/images/glasses3.jpg",oldPrice:6000,newPrice:5300},
    {id: 4, title: 'Очки номер 4', url:"/images/glasses4.jpg",oldPrice:3500,newPrice:2700},
    {id: 5, title: 'Очки номер 5', url:"/images/glasses4.jpg",oldPrice:5000,newPrice:4500},
    {id: 6, title: 'Очки номер 3', url:"/images/glasses3.jpg",oldPrice:5300,newPrice:4000},
    {id: 7, title: 'Очки номер 4', url:"/images/glasses4.jpg",oldPrice:4700,newPrice:2000},
    {id: 8, title: 'Очки номер 5', url:"/images/glasses4.jpg",oldPrice:3200,newPrice:2500}
  ]
  const products2 = [
    {id: 10, title: 'Очки номер 1', url:"/images/glasses3.jpg",newPrice:4000},
    {id: 20, title: 'Очки номер 2', url:"/images/glasses1.jpg",newPrice:3500},
    {id: 30, title: 'Очки номер 3', url:"/images/glasses4.jpg",newPrice:5300},
    {id: 40, title: 'Очки номер 4', url:"/images/glasses2.jpg",newPrice:2700},
    {id: 50, title: 'Очки номер 5', url:"/images/glasses1.jpg",oldPrice:5000,newPrice:4500},
    {id: 60, title: 'Очки номер 3', url:"/images/glasses4.jpg",newPrice:4000},
    {id: 70, title: 'Очки номер 4', url:"/images/glasses3.jpg",newPrice:2000},
    {id: 80, title: 'Очки номер 5', url:"/images/glasses2.jpg",oldPrice:3200,newPrice:2500}
  ]

  return (
    <div className="main__container">
      <Header active={navbar}/>

      <div className="main__img__div">
        <span className="main__subtitle">КАЧЕСТВЕННО</span>

        <div style={{width:"50vw",maxWidth:"600px",maxHeight:"300px" , margin:"40px 0"}}>
          <h1 className="main__title">Оптика Взор</h1>
        </div>

        <div className="main__buttons__div">
          <Link to={ROUTES.PRODUCTS}><button className="button-62">Каталог</button></Link>
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