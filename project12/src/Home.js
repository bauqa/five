import React from 'react'

import { Link } from 'react-router-dom'
import { recep } from './db';
function Home() {
  return (
    <div className='cards'>
                    {recep.map((item,idx)=>{
                        return(
                        <div className='card' key={idx}>
                            <Link to={item.name}>
                                
                                <img src={item.img} alt className='img'/>
                                <h2 className='name'>{item.name}</h2>
                            </Link>
                        </div>
                        )
                    })}
                </div>
  )
}

export default Home