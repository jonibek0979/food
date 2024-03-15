import React from 'react'
import './Card.scss'

function Card({ data,categoriy }) {
  return (
    <div className='Card'>
      <div className="card">
        <img src={`https://cp.ectn.uz/files/${data.img}`}/>
        <div className='text__div'>
          <h3>{data.title}</h3>
          <b>{data.price}</b>
          <p>{categoriy.title}</p>
        </div>
        </div>
        </div>
  )
}

export default Card