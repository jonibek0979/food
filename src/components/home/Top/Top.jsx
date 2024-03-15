import React, { useState } from 'react'
import './Top.scss'
import { data } from '../../../lib/menu';
import Card from '../Card/Card';

function Top({render}) {
  console.log(render);
  const [active, setActive] = useState(window.localStorage.getItem('key') || 'Lavash')
  const [filData, setFilData] = useState((data.filter((item) => item.title == active)[0]  ))

  function fnLocalKey(value) {
    fnFilter(value)
    window.localStorage.setItem('key', value)
  }
  

  function fnFilter(value) {
    setFilData(data.filter((item) => item.title == value)[0])
    setActive(value)
  }
  let localData = []
  if (window.localStorage.getItem('data')) {
    localData = JSON.parse(window.localStorage.getItem('data'))
    
  }
  function fnAddData(item) {
    if (localData.find((i)=> i.id == item.id)) {
      localData.find((i)=> i.id == item.id).price
       =   localData.find((i)=> i.id == item.id).price * 1 + item.price * 1

       localData.find((i)=> i.id == item.id).count
       =   localData.find((i)=> i.id == item.id).count * 1 + 1 * 1
      
    }
    else{
      item.count = 1
      localData.push(item)
    }
    localData.push(item)
    window.localStorage.setItem('data', JSON.stringify(localData))
    render.setRender(!render.render)
  }
  return (
    <div className='Top'>
      <div className="Top__info">
        <div className>
          <h2>Jaegar Resto</h2>
          <h6>Tuesday, 1 January 2024</h6>
        </div>
        <div>
          <button> <i className="bi bi-search"></i></button>
          <input type="text" name="" id="" placeholder='Search for food, coffe, etc..' />
        </div>
      </div>
      <div className="Top__nav">
        <ul className="Top__list">
          {
            data.slice(0, 6).map((item ,index) => 
               (
                <li key={index} className={active == item.title ? 'Top__item active' : 'Top__item'}>
                  <button onClick={() => fnLocalKey(item.title)} className="Top__btn">{item.title}</button>
                </li>
              )
            )
          }
        </ul>
        <ul className="cart__LIST">
          {
            filData.foods.map((item,index) => (
              <li onClick={()=> fnAddData(item)} key={index}>
                <Card data={item} categoriy={filData} />
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Top