export default function Item({item}) {
  return (
    
    <div className="containerCard">
      <div className="card">
        <div className="imgBx">
            <img src={item.url} alt="img"/>
        </div>
        <div className="contentBx">
            <a href="#">Buy Now</a>
        </div>
        <div className="prices">
        {item.oldPrice > 0 ? (
          <>
          <span className="oldPrice">{item.oldPrice}₽</span>
          <span className="newPrice">{item.newPrice}₽</span>
          </>
        ) : (<span className="price">{item.newPrice}₽</span>)}
        </div>
      </div>
    </div>
  )
}