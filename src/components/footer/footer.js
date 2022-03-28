import Logo from '../../logo'
import './footer.css'
import {Link}  from "react-router-dom"
import * as ROUTES from '../../constants/routes'

export default function Footer(){
  return(
    <footer className="footer">
      <div className="contain">
      <div className='footer__logo'>
        <Logo width={100} color={"#999999"}/>

      </div>

      <div className="col">
        <h1>Компания</h1>
        <ul>
            <Link to={ROUTES.MAIN}><li className='links__item'>Главная</li></Link>
            <Link to={ROUTES.PRODUCTS}><li className='links__item'>Каталог</li></Link>
            <Link to={ROUTES.ABOUT_US}><li className='links__item'>О нас</li></Link>
            <Link to={ROUTES.CONTACTS}><li className='links__item'>Контакты</li></Link>
        </ul>
      </div>
      <div className="col">
        <h1>Товары</h1>
        <ul>
          <li>Все товары</li>
          <li>Пластиковые</li>
          <li>Круглые</li>
          <li>Квадратные</li>
          <li>Из металла</li>
        </ul>
      </div>
      <div className="copyright">
        <h1>© 2022,Оптика Взор</h1>
        <ul>
        </ul>
      </div>
    </div>
    </footer>
  )
}