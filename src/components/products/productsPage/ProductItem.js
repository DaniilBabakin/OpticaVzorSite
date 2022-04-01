export default function ProductItem({item}) {
  return (
    
    <div className="containerCard">
     {/*Карточка продукта */}
      <div className="productCard">
        <div className="imgBx">
            <img src={item.url} alt="img" className="products__image"/>
        </div>
        <div className="product__name">
          {item.name}
        
        </div>
      </div>
      {/*Цены*/}
      <span className="card__subname">{item.subName}</span>
    </div>
  )
}