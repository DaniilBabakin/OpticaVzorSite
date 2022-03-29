import { useState} from "react"
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

  //Для работы Пагинации
  const lastProductIndex = currentPage * productsPerPage //Последний индекс продукта на странице
  const firstProductIndex = lastProductIndex - productsPerPage  //Первый 
  const currentProducts = productsPageProducts.filter((item)=> item.category.join("").includes(filter.sort().join(""))).slice(firstProductIndex,lastProductIndex) //текущие продукты на странице
  const currentProductsCount = productsPageProducts.filter((item)=> item.category.join("").includes(filter.sort().join(""))) //количество продуктов в зависимости от фильтров

  const paginate = pageNumber => setCurrentPage(pageNumber)
  console.log(currentProducts)
  return(
    <section className="products__div">
      <FilterMenu active={active} setActive={setActive}/>
      {/* Меню фильтрации */}
      <aside className="products__aside" style={{width:"200px",background:"#c4c4c4",height:"100px"}}>
      <button onClick={()=>setActive(true)}>ФильтрМеню</button>
      </aside>

      {/* Основной каталог продуктов */}
      <div className="products products__container" style={{display:"flex",marginLeft:"auto",flexDirection:"row",flexWrap:"wrap",alignContent:"start",justifyContent:"space-evenly"}}>
        {currentProducts
            .filter((item)=> item.category.join("").includes(filter.sort().join("")))
            .map(item =>  <div className="product__item" ><ProductItem key={item.id} item={item}/></div>)}
      </div>

      {/* Контейнер для пагинации(кнопки) */}
      <div style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
        <Pagination productsPerPage={productsPerPage} totalProducts={currentProductsCount.length} paginate={paginate}/>
      </div>


    </section>
    
  )
}