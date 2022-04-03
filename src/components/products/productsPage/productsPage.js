import { useEffect, useState} from "react"
import { productsPageProducts } from "../../../ListOfProducts"
import '../main-products/main-products.css'
import Button from "./Button"
import FilterMenu from "./FilterMenu/FilterMenu"
import Pagination from "./Pagination"
import ProductItem from "./ProductItem"
import './productsPage.css'
export default function ProductPageProducts(){
  const [filter,setFilter] = useState(["all"]) //Фильтрация
  const [currentPage,setCurrentPage] = useState(1) //Пагинация
  const [productsPerPage] = useState(10) //Количество продуктов на страницу(Пагинация)
  const [active,setActive] = useState(false) //Состояние модального окна фильтрации
  const [productsInfo,setProductsInfo] = useState(productsPageProducts)
  console.log(productsInfo.filter((item)=> filter.every((value)=>item.category.includes(value))))
  //Для работы Пагинации
  const lastProductIndex = currentPage * productsPerPage //Последний индекс продукта на странице
  const firstProductIndex = lastProductIndex - productsPerPage  //Первый 
  const currentProducts = productsInfo.filter((item)=> filter.every((value)=>item.category.includes(value))).slice(firstProductIndex,lastProductIndex) //текущие продукты на странице
  const currentProductsCount = productsInfo.filter((item)=> filter.every((value)=>item.category.includes(value))) //количество продуктов в зависимости от фильтров
  console.log(productsInfo)
  
  
  const paginate = pageNumber => setCurrentPage(pageNumber)
  return(
    <section className="products__div">
      <FilterMenu active={active} setActive={setActive} setFilter={setFilter} filterValue={filter} productsInfo={productsInfo} setProductsInfo={setProductsInfo} productsPageProducts={productsPageProducts}/>

      {/* Основной каталог продуктов */}
      <div className="products products__container" style={{display:"flex",marginLeft:"auto",flexDirection:"row",flexWrap:"wrap",alignContent:"start",justifyContent:"space-evenly"}}>
      <button className="button-23" role="button" onClick={()=>setActive(true)}>Фильтры</button>

      {currentProducts.length !== 0 ? (currentProducts
            .filter((item)=> filter.every((value)=>item.category.includes(value)))
            .map(item =>  <div key={item.id} className="product__item" ><ProductItem item={item}/></div>)) : (<p>Не найдено,попробуйте изменить фильтры</p>)}
      </div>

      {/* Контейнер для пагинации(кнопки) */}
      <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
        <Pagination productsPerPage={productsPerPage} totalProducts={currentProductsCount.length} paginate={paginate}/>
      </div>


    </section>
    
  )
}