import React from 'react'
import { useParams } from 'react-router-dom'
import { recep } from './db'

function Details() {
  const params = useParams()
  let bluo = null;
  for (let i =0;i<recep.length;i++){
    if(recep[i].name === params.name){
      bluo = recep[i]
    }
  }
  console.log(bluo)
  return (
    <div className='deta'>
      <a href='/' className='glav'>Главный</a>
      
      <h2 className='name_text'>{bluo.name}</h2>
      <img src={bluo.img} alt className="img"/>
      <h3 className='details'>{bluo.description}</h3>
      <div className='products'>
        <h4 className='prod'>Продукты:</h4>
        {bluo.products.map((item,idx)=>{
          return <p className='product' key={idx}>{item}</p>
        })}
      </div>
    </div>
  )
}

export default Details