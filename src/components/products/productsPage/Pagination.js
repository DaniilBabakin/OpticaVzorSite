export default function Pagination ({productsPerPage,totalProducts,paginate}) {
  const pageNumbers=[]
  for(let i=1;i<=Math.ceil(totalProducts/ productsPerPage);i++){
    pageNumbers.push(i)
  }
  function topFunction() {
    window.scrollTo(0,0)
  }
  return(
    <div>
      <ul className="list" style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {pageNumbers.map((number)=> (
          <li key={number} className="list__item">
            <button href="" className="button-5" onClick={()=>{paginate(number);topFunction()}}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  )
}