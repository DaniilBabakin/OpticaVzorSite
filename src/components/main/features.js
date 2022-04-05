export default function Features({backgroundColor}) {
  return(
    <div style={{width:"100%",backgroundColor:backgroundColor,padding:"30px 0"}}>
      <div style={{maxWidth:"1024px",margin:"0 auto",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>

        <div style={{display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center",width:"29%",minWidth:"160px",margin:"15px auto"}}>
          <svg xmlns="http://www.w3.org/2000/svg" style={{width:"50px"}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <h3 style={{textAlign:"center"}}>История магазина</h3>
          <p style={{maxWidth:"180px",margin:"0",textAlign:"center"}}>Работаем для Вас больше 20 лет </p>
        </div>

        <div style={{display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center",width:"29%",minWidth:"160px",margin:"15px auto"}}>
          <svg xmlns="http://www.w3.org/2000/svg" style={{width:"50px"}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 style={{textAlign:"center"}}>Индивидуальный подход</h3>
          <p style={{maxWidth:"300px",margin:"0",textAlign:"center"}}>Подберем лучшие очки.Изготавливаем очки в оправу заказчика.Выполняем заказы рецептурных линз</p>
        </div>

        <div style={{display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center",width:"29%",minWidth:"160px",margin:"15px auto"}}>
            <svg xmlns="http://www.w3.org/2000/svg" style={{width:"50px"}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          <h3 style={{textAlign:"center"}}>Качество</h3>
          <p style={{maxWidth:"180px",margin:"0",textAlign:"center"}}>Нам важно,чтобы все было сделано как можно лучше</p>
        </div>
        
      </div>
    </div>
  )
}