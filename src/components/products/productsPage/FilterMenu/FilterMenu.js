import { useState } from 'react'
import './FilterMenu.scss'
export default function FilterMenu({active,setActive,setFilter,filterValue,productsInfo,setProductsInfo}){
  const [priceFilterValue,setPriceFilterValue] = useState("") // По убыванию / по возрастанию

  const handleClick = (e) => {
    !filterValue.includes(e.target.attributes.value.value) ? setFilter(oldArray => [...oldArray, e.target.attributes.value.value]) : setFilter( filterValue.filter((item) => !item.includes(e.target.attributes.value.value)) )
  }
  const handlePriceChange = (value) => {
    if (value === "По возрастанию"){
      setPriceFilterValue(value)
      setProductsInfo(productsInfo.sort((a,b)=>a.newPrice - b.newPrice))
    }
    if (value === "По убыванию"){
      setPriceFilterValue(value)
      setProductsInfo(productsInfo.sort((a,b)=>b.newPrice - a.newPrice))
    }
    if (value === "По умолчанию") {
      setPriceFilterValue(value)
      setProductsInfo(productsInfo.sort(() => Math.random() - 0.5))
    }
  }
  console.log(filterValue.length)
  console.log(priceFilterValue == "")
  //Состояния списков фильтрации
  const [priceOpen,setPriceOpen] = useState(false)  
  const [glassesFormOpen,setGlassesFormOpen] = useState(false)  

  return(
    <div className={"menu__container " + (active ? 'active' : '')} onClick={()=>setActive(false)}>


      {/* Header */}
      <div className="menu__div" onClick={e=>e.stopPropagation()}>
        <div className="menu__header">
          <h2>Сортировка</h2>
          <button id='close' onClick={()=>setActive(false)}>close</button>
        </div>


      {/* Контейнер с включенными фильтрами */}
       {filterValue.length !== 1 || priceFilterValue !== ""  // Показать контейнер , если один из фильтров включен
        ? (
          <div className='currentFilters'> 
            {filterValue.slice(1).map((item)=> <span className='currentFilters__span' onClick={()=>{setFilter( filterValue.filter((value) => !value.includes(item)))}}>{item}</span>)}

            {priceFilterValue !== "" && <span className='currentFilters__span' onClick={()=>{setPriceFilterValue("");setProductsInfo(productsInfo.sort(() => Math.random() - 0.5))}}>{  priceFilterValue}</span>}
          </div>
          ) 
        : null}


      {/* Выбрать фильтр */}  
        <div className='select__div'>
          <div className={priceOpen ? "select__title__div" : "select__title__div border"} onClick={()=>setPriceOpen(!priceOpen)}>
            <span title="Цена" className="select__title">Цена</span>
          </div>
          <div className={priceOpen ? 'options__container open' : 'options__container'}>
              <ul class="sorting__options__wrapper">
                <li class="sorting__option" onClick={()=>handlePriceChange("По умолчанию")}>по умолчанию</li>
                <li class="sorting__option" onClick={()=>handlePriceChange("По убыванию")}>по убыванию</li>
                <li class="sorting__option" onClick={()=>handlePriceChange("По возрастанию")}>по возрастанию</li>
              </ul>
          </div>
        </div>
        <div className='select__div'>
          <div className={glassesFormOpen ? "select__title__div" : "select__title__div border"} onClick={()=>setGlassesFormOpen(!glassesFormOpen)}>
            <span title="Цена" className="select__title">Форма оправы</span>
          </div>
          <div className={glassesFormOpen ? 'options__container open' : 'options__container'}>
              <ul class="sorting__options__wrapper">
                <li class="sorting__option" value={"Круглые"} onClick={handleClick}>Круглые</li>
                <li class="sorting__option" value={"Квадратные"} onClick={handleClick}>Квадратные</li>
                <li class="sorting__option" value={"Прямоугольные"} onClick={handleClick}>Прямоугольные</li>
                <li class="sorting__option" value={"Овальные"} onClick={handleClick}>Овальные</li>
                <li class="sorting__option" value={"Кошачий глаз"} onClick={handleClick}>"Кошачий глаз"</li>
              </ul>
          </div>
        </div>



      </div>
    </div>
  )
}