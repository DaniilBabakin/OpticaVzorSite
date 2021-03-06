import Header from "../components/header/header";
import { YMaps, Map ,Placemark} from 'react-yandex-maps';
import Footer from "../components/footer/footer";

export default function Contacts (){
  const mapState = { center: [55.545254, 37.557959], zoom: 19 };
  const placeMark = {
    geometry: [55.545254, 37.557959],
    properties: {
        hintContent: 'Скобелевская ул., 25, Москва, Россия',
        balloonContent: 'Скобелевская ул., 25, Москва, Россия'
    },
    modules: ["geoObject.addon.balloon", "geoObject.addon.hint"] 
  }
  return(
    <div>
      <Header active/>
      <div style={{paddingTop:"64px",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

        {/* Заголовок */}
        <h1 style={{marginBottom:"0px",marginTop:"50px"}}>Как до нас добраться</h1>

        {/* Основная часть */}
          <div style={{height:"80vh",width:"90vw",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"space-evenly",flexWrap:"wrap",textAlign:"center",paddingBottom:"60px"}}>
          <div style={{width:"35vw",textAlign:"center",paddingBottom:"30px"}}>
            <h3>Адрес</h3>
            <p style={{paddingBottom:"30px"}}>Скобелевская ул., 25, Москва, Россия</p>
            <h3>Номер телефона</h3>
            <p>8-495-716-66-45</p>
            <span style={{fontWeight:"500"}}>Сообщите,что нашли нас в интернете,пожалуйста</span>
          </div>

          <YMaps>
              <Map defaultState={mapState} width='100%' height='60%'  ><Placemark {...placeMark}/></Map>
          </YMaps>

          </div>
      </div>
      <Footer/>
    </div>
  )
}