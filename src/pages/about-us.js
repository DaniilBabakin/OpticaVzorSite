import Header from "../components/header/header";
import Footer from "../components/footer/footer";
export default function AboutUs(){
  return(
    <div>
      <Header active/>
      <div style={{paddingTop:"64px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
        <h1>О нас</h1>
      
        <div style={{height:"80vh",width:"90vw",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"space-evenly",flexWrap:"wrap",textAlign:"center",paddingBottom:"60px"}}>
        </div>
      </div>
      <Footer/>
    </div>
  )
}