export default function ProductItem({item}) {
  return (
    
    <div className="containerCard">
     {/*Карточка продукта */}
      <div className="productCard">
        <div className="imgBx">
            <img src={item.url} alt="img"/>
        </div>
        <div className="prices">
        {item.oldPrice > 0 
        ? (
          <>
          <span className="oldPrice">{item.oldPrice}₽</span>
          <span className="newPrice">{item.newPrice}₽</span>
          </>
        ) 
        : (<span className="price">{item.newPrice}₽</span>)}
        </div>
      </div>
      {/*Цены*/}
      <p className="card__name">{item.name}</p>
      <span className="card__subname">{item.subName}</span>
    </div>
  )
}