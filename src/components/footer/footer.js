import Logo from '../../logo'
import './footer.css'
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
          <li>Главная</li>
          <li>О нас</li>
          <li>Контакты</li>
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