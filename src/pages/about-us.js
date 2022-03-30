import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import '../styles/about-us.css'
import Features from "../components/main/features";
import { useEffect, useState } from "react";

export default function AboutUs(){
  const [offsetY,setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    
    return () => window.removeEventListener("scroll",handleScroll)
  },[])
  return(
    <div>
      <Header active/>
      <div style={{paddingTop:"64px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <div className="about__header">
          <div className="about__header__text">
            <h1 className="about__title">ОПТИКА ВЗОР</h1>
            <p className="about__subtitle">20 лет делаем <span className="bright">Вашу</span> жизнь <span className="bright">ярче</span></p>
          </div>
          
        </div>
        <div style={{height:"30vh"}}>
          <h1>Описание компании,краткая история</h1>
        </div>
        <Features backgroundColor={"#f27f38"}/> 
        <div className="brands__wrapper">
          <h3 className="brands__name">НАШИ БРЕНДЫ</h3>
          <div className="brands">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ray-Ban_logo.svg" alt="rayban" className="brands__image"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Prada-Logo.svg" alt="rayban" className="brands__image"/>
            <img src="https://vtlogo.com/wp-content/uploads/2021/05/emilio-pucci-vector-logo.png" alt="rayban" className="brands__image"/>
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Ray-Ban_logo.svg" alt="rayban" className="brands__image"/>
          </div>
        </div>
        
        
        
    
      </div>
      <Footer/>
    </div>
  )
}