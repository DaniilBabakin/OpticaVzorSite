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
        <div className="service">
          <div className="service__item" >
            <img src="/images/glassesRepair.jpg" className="service__image"/>
            <p>Производим ремонт очков</p>
          </div>
          <div className="service__item">
            <img src="/images/measure.jpg" className="service__image"/>
            <p>Поможем с выбором диоптрий</p>
          </div>
          <div className="service__item">
            <img src="/images/happy.jpg" className="service__image"/>
            <p style={{width:"250px",textAlign:"center"}}>Индивидуальный подход к каждому клиенту</p>
          </div>
        </div>
        <Features backgroundColor={"#f27f38"}/> 
        {/*<div style={{height:"30vh"}}>
          <h1>Описание компании,краткая история</h1>
        </div> */}
        
        
    
      </div>
      <Footer/>
    </div>
  )
}