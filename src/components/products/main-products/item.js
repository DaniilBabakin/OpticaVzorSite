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
        <div className="product__name">
          {item.name}
        
        </div>
      </div>
    </div>
  )
}