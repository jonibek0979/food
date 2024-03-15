import React, { useEffect, useState } from 'react'
import './Order.scss'

function Order({ render,setRender }) {
    const [active, setActive] = useState(0)
    const [data, setData] = useState(JSON.parse(window.localStorage.getItem('data')))
    useEffect(() => {
        setData(JSON.parse(window.localStorage.getItem('data')))
    }, [render])
    function fnLocalDel(id) {
        console.log(id);
        let locData = JSON.parse(window.localStorage.getItem('data'))
        window.localStorage.setItem('data' , JSON.stringify(locData.filter((item)=> item.id != id)))
        setRender(!render)
    }
  
    return (
        <div className='Order'>
            <h2 className="order__title">Orders #34562</h2>
            <div className="order__action">
                <button onClick={() => setActive(0)} className={active == 0 ? 'active' : null}>Dine In</button>
                <button onClick={() => setActive(1)} className={active == 1 ? 'active' : null}>To Go</button>
                <button onClick={() => setActive(2)} className={active == 2 ? 'active' : null}>Delivery</button>
            </div>
            <div className="order__top">
                <b>Item</b>
                <span>
                    <b>Qty</b>
                    <b>Price</b>
                </span>
                
            </div>
            <ul className="order__list">
                {
                    data && data.map((item) => (
                        <li key={item.id} className="order__item">
                            <div className="item__top">
                                <img src="https://media-cdn.tripadvisor.com/media/photo-s/1c/5a/ee/11/the-plov.jpg" alt="" />
                                <span>
                                    <h4>{item.title}</h4>
                                    <b>{item.price}</b>
                                </span>
                                <button>{item.count}</button>
                                <b className='item__b'>{item.price}</b>
                            </div>
                            <div className="item__buttom">
                                <input type="text" placeholder='Please, just a little bit spicy only.' />
                                <button onClick={()=> fnLocalDel(item.id)}><i className='bi bi-trash'></i></button>
                            </div>
                        </li>

                    ))
                }
            </ul>
            <button className='order__Payment'>Continue to Payment</button>
        </div>
    )
}

export default Order