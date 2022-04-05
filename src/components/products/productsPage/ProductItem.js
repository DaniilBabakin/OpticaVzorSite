export default function ProductItem({item}) {
  return (
    
    <div className="containerCard">
     {/*Карточка продукта */}
      <div className="productCard">

      {/*Название , если товар - линза */}
      {item.lensText !== undefined && (
        <div style={{width:"100%",textAlign:"center",background:"#f27f38",padding:"5px 0px",color:"#f5f5f5"}}>
          <span style={{textAlign:"center",justifyContent:"center",width:"100%",fontWeight:"bold",fontSize:"18px"}}>{item.name}</span>
        </div>
      )}        
      {/*Изображение или текст(если это линза) */}
      {item.lensText == undefined ?(
          <div className="imgBx">
            <img src={item.url} alt="img" className="products__image"/>
          </div>
        ) : (<p className="lens__text">{item.lensText}</p>)}

      {/*Название , если товар - очки */}
        {item.lensText == undefined && (
          <div className="product__name">
            {item.name}
          </div>
        )}
        
      </div>
      {/*Цены*/}
      <span className="card__subname">{item.subName}</span>
    </div>
  )
}