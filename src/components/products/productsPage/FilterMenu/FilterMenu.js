import { useState } from 'react'
import './FilterMenu.scss'
export default function FilterMenu({active,setActive}){
  const [priceOpen,setPriceOpen] = useState(false)
  return(
    <div className={"menu__container " + (active ? 'active' : '')} onClick={()=>setActive(false)}>
      <div className="menu__div" onClick={e=>e.stopPropagation()}>
        <h2>Сортировка</h2>
        
        <div className='select__div'>
          <div className={priceOpen ? "select__title__div" : "select__title__div border"} onClick={()=>setPriceOpen(!priceOpen)}>
            <span title="Sort By" className="select__title">Sort By</span>
          </div>
          <div className={priceOpen ? 'options__container open' : 'options__container'}>
              <ul class="sorting__options__wrapper">
                <li class="sorting__option">Newest</li>
                <li class="sorting__option">Price (high - low)</li>
                <li class="sorting__option">Price (low - high)</li>
                <li class="sorting__option">Top Sellers</li>
              </ul>
          </div>
        </div>



      </div>
    </div>
  )
}