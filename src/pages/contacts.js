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
        <h1 style={{marginBottom:"30px",marginTop:"50px"}}>Как до нас добраться</h1>

        {/* Основная часть */}
          <div style={{height:"80vh",width:"70vw",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"space-evenly",flexWrap:"wrap",textAlign:"center"}}>
          <div style={{width:"35vw",textAlign:"center"}}>
            <h3>Адрес</h3>
            <span>Скобелевская ул., 25, Москва, Россия</span>
            <h3>Номер телефона</h3>
            <span>8-800-555-35-35</span>
          </div>

          <YMaps>
              <Map defaultState={mapState} width={900} height={500} ><Placemark {...placeMark}/></Map>
          </YMaps>
          
          </div>
      </div>
      <Footer/>
    </div>
  )
}