export default function Pagination ({productsPerPage,totalProducts,paginate}) {
  const pageNumbers=[]
  for(let i=1;i<=Math.ceil(totalProducts/ productsPerPage);i++){
    pageNumbers.push(i)
  }
 
  return(
    <div>
      <ul className="list">
        {pageNumbers.map((number)=> (
          <li key={number} className="list__item">
            <button href="" className="button-5" onClick={()=>paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}