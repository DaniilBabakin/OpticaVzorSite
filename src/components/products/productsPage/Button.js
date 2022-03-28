export default function Button({value,label,filterValue,setFilter}) {
  const handleChange = (e) => {
    e.target.checked ? setFilter(oldArray => [...oldArray, e.target.value]) : setFilter( filterValue.filter((item) => !item.includes(e.target.value)) )
  }
  return(
    <div>
       <input type="checkbox" id={value} name="subscribe" value={value} onChange={handleChange}/>
       <label htmlFor={value}>{label}</label>
    </div>
  )
}