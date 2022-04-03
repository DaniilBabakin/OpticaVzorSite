import './header.css'
import { slide as Menu } from 'react-burger-menu'
import {styles} from './burger'
import Logo from '../../logo'
import {Link}  from "react-router-dom"
import * as ROUTES from '../../constants/routes'

export default function Header ({active}) {
  return (
    <header className={active ? 'header active' : 'header'}>
      <div className='container'>
        <div className='navbar'>

          <div className='logo__div'> 
            <h1 className='logo__link'> 
              <Link to={ROUTES.MAIN}><Logo width={100} color={"#e1e1e1"}/></Link>
            </h1>
          </div>

          <div className='links__div'>
            <Link to={ROUTES.MAIN}><p className='links__item'>Главная</p></Link>
            <Link to={ROUTES.PRODUCTS}><p className='links__item'>Каталог</p></Link>
            <Link to={ROUTES.ABOUT_US}><p className='links__item'>О нас</p></Link>
            <Link to={ROUTES.CONTACTS}><p className='links__item'>Контакты</p></Link>
          </div>
          
          <div className='phone-number'>
            <p style={{textAlign:"center"}}>8-800-555-35-35</p>
          </div>
        </div>
      </div>
      
      <div className='hamburger'>
        <Menu right styles={styles} disableAutoFocus>
            <Link to={ROUTES.MAIN}><p className='links__item'>Главная</p></Link>
            <Link to={ROUTES.PRODUCTS}><p className='links__item'>Каталог</p></Link>
            <Link to={ROUTES.ABOUT_US}><p className='links__item'>О нас</p></Link>
            <Link to={ROUTES.CONTACTS}><p className='links__item'>Контакты</p></Link>
        </Menu>
      </div>
      
    </header>
  )
}