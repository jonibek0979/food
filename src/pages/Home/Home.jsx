import React, { useState } from 'react'
import './Home.scss'
import Top from '../../components/home/Top/Top'
import Order from '../../components/home/Order/Order'

function Home() {
  const [render ,setRender] = useState(true)
  return (
    <div className='Home'>
      <div className="home__main">
      <Top render={{render ,setRender}}/>
      </div>
      <Order render={render} setRender={setRender}/>
    </div>
  )
}

export default Home