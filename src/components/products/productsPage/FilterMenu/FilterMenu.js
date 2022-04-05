import { useState } from 'react'
import './FilterMenu.scss'
export default function FilterMenu({active,setActive,setFilter,filterValue,productsInfo,setProductsInfo,productsPageProducts}){
  const [priceFilterValue,setPriceFilterValue] = useState("") // По убыванию / по возрастанию
  const [filteredData, setFilteredData] = useState([]); //фильтрация в строке поиска
  const [wordEntered, setWordEntered] = useState(""); //введенное слово в строке поиска
  console.log(filterValue.length)
  const handleSearch = (event) =>{
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = productsInfo.filter((product) => {
      return product.name.toLowerCase().includes(searchWord.toLowerCase());
    });
    if (searchWord === "") {
      setProductsInfo(productsPageProducts);
    } else {
      setProductsInfo(newFilter);
    }
  }
  const handleClick = (e) => {
    !filterValue.includes(e.target.attributes.value.value) ? setFilter(oldArray => [...oldArray, e.target.attributes.value.value]) : setFilter( filterValue.filter((item) => !item.includes(e.target.attributes.value.value)) )
  }
  const handleLensTypes = (e) => {
    !filterValue.includes(e.target.attributes.value.value) ? setFilter(["all","Линзы"]) : setFilter(["all"])
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
  //Состояния списков фильтрации
  const [glassesFormOpen,setGlassesFormOpen] = useState(false)  
  const [glassesMaterial,setGlassesMaterial] = useState(false)
  const [glassesSex,setGlassesSex] = useState(false)  

  return(
    <div className={"menu__container " + (active ? 'active' : '')} onClick={()=>setActive(false)}>


      {/* Header */}
      <div className="menu__div" onClick={e=>e.stopPropagation()}>
        <div className="menu__header">
          <h2>Сортировка</h2>
          <button id='close' onClick={()=>setActive(false)}>close</button>
        </div>


      {/* Строка поиска */}
        <label className="input">
          <input className="input__field" type="text" placeholder="" onChange={handleSearch} value={wordEntered}/>
          <span className="input__label">Поиск по названию</span>
        </label>


      {/* Контейнер с включенными фильтрами */}
       {filterValue.length !== 1 || priceFilterValue !== ""  // Показать контейнер , если один из фильтров включен
        ? (
          <div className='currentFilters'> 
            {filterValue.slice(1).map((item)=> <span className='currentFilters__span' onClick={()=>{setFilter( filterValue.filter((value) => !value.includes(item)))}}>{item}</span>)}

            {priceFilterValue !== "" && <span className='currentFilters__span' onClick={()=>{setPriceFilterValue("");setProductsInfo(productsInfo.sort(() => Math.random() - 0.5))}}>{priceFilterValue}</span>}
          </div>
          ) 
        : null}


      {/* Выбрать фильтр */}  
        <div className='select__div'>
          <div className="options__container open">
              <ul key="3u" className="sorting__options__wrapper">
                <li className="sorting__option" key={"0l"} value={"Линзы"} onClick={handleLensTypes}>Линзы</li>
              </ul>
          </div>
        </div>
        <div className='select__div'>
          <div className="options__container open">
              <ul key="3u" className="sorting__options__wrapper">
                <li className="sorting__option" key={"1l"} value={"Мужские"} onClick={handleClick}>Мужские</li>
                <li className="sorting__option" key={"2l"} value={"Женские"} onClick={handleClick}>Женские</li>
                <li className="sorting__option" key={"3l"} value={"Унисекс"} onClick={handleClick}>Унисекс</li>
                <li className="sorting__option" key={"4l"} value={"Подростковые"} onClick={handleClick}>Для подростков</li>
                <li className="sorting__option" key={"5l"} value={"Детские"} onClick={handleClick}>Для детей</li>
              </ul>
          </div>
        </div>
        <div className='select__div'>
          <div className={glassesFormOpen ? "select__title__div" : "select__title__div border"} onClick={()=>setGlassesFormOpen(!glassesFormOpen)}>
            <span title="Цена" className="select__title">Форма оправы</span>
          </div>
          <div className={glassesFormOpen ? 'options__container open' : 'options__container'}>
              <ul key="2u" className="sorting__options__wrapper">
                <li className="sorting__option" key={"6l"} value={"Круглые"} onClick={handleClick}>Круглые</li>
                <li className="sorting__option" key={"7l"} value={"Квадратные"} onClick={handleClick}>Квадратные</li>
                <li className="sorting__option" key={"8l"} value={"Прямоугольные"} onClick={handleClick}>Прямоугольные</li>
                <li className="sorting__option" key={"9l"} value={"Овальные"} onClick={handleClick}>Овальные</li>
                <li className="sorting__option" key={"10l"} value={"Кошачий глаз"} onClick={handleClick}>"Кошачий глаз"</li>
              </ul>
          </div>
        </div>
        <div className='select__div'>
          <div className={glassesMaterial ? "select__title__div" : "select__title__div border"} onClick={()=>setGlassesMaterial(!glassesMaterial)}>
            <span title="Цена" className="select__title">Материал оправы</span>
          </div>
          <div className={glassesMaterial ? 'options__container open' : 'options__container'}>
              <ul key="3u" className="sorting__options__wrapper">
                <li className="sorting__option" key={"11l"} value={"Пластиковые"} onClick={handleClick}>Пластик</li>
                <li className="sorting__option" key={"12l"} value={"Металлические"} onClick={handleClick}>Металл</li>
              </ul>
          </div>
        </div>



      </div>
    </div>
  )
}