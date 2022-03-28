import './main-products.css'
import Carousel from 'react-elastic-carousel'
import Item from './item'

export default function MainProducts ({items,title,lowprice}) {
 
  const breakPoints = [
    {width:1,itemsToShow:1},
    {width:550,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1200,itemsToShow:4},
  ]
  return (
    <div className={lowprice ? 'products lowprice' : 'products'}>
        <Carousel breakPoints={breakPoints} transitionMs={1500}>
          {items.map(item => <Item key={item.id} item={item}/>)}
        </Carousel>
     
    </div>
  )
}