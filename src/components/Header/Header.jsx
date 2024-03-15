import { Link, useLocation, useNavigate } from 'react-router-dom'
import React from 'react'
import './Header.scss'
import logo from '../../assets/svg/logo.svg'
// import home from '../../assets/icon/Home.svg'
// import disscount from '../../assets/icon/Discount.svg'
// import graph from '../../assets/icon/Graph.svg'
// import message from '../../assets/icon/Message.svg'
// import notification from '../../assets/icon/Notification.svg'
// import setting from '../../assets/icon/Setting.svg'
// import ogout from '../../assets/icon/Logout.svg'

function Header() {
    const location = useLocation().pathname
    const navigate = useNavigate()
    return (
        <header className='header'>
            <nav className='nav'>
                <a href="#" className='nav__logo'>
                    <img src={logo} alt="" />
                </a>
                <ul className="nav__list" >
                    <li className={location == '/' ? "nav__item active" : 'nav__item'}>
                        <Link to="/" className='nav__Link '>
                            <i className="bi bi-house-door"></i>
                        </Link>
                    </li>
                    <li className={location == '/percent' ? "nav__item active" : 'nav__item'}>
                        <Link to="/percent" className='nav__Link'>
                            {/* <img src={disscount} alt="" /> */}
                            <i className="bi bi-percent"></i>
                        </Link>
                    </li>
                    <li className={location == '/chart' ? "nav__item active" : 'nav__item'}>
                        <Link to="/chart" className='nav__Link'>
                            {/* <img src={graph} alt="" />  */}
                            <i className="bi bi-pie-chart"></i>
                        </Link>
                    </li>
                    <li className={location == '/message' ? "nav__item active" : 'nav__item'}>
                        <Link to="/message" className='nav__Link'>
                            {/* <img src={message} alt="" /> */}
                            <i className="bi bi-envelope"></i>
                        </Link>
                    </li>
                    <li className={location == '/notification' ? "nav__item active" : 'nav__item'}>
                        <Link to="/notification" className='nav__Link'>
                            {/* <img src={notification} alt="" /> */}
                            <i className="bi bi-bell"></i>
                        </Link>
                    </li>
                    <li className={location == '/settings' ? "nav__item active" : 'nav__item'}>
                        <Link to="/settings" className='nav__Link'>
                            {/* <img src={setting} alt="" />   */}
                            <i className="bi bi-gear"></i>
                        </Link>
                    </li>
                    <li className={location == '/logout' ? "nav__item active" : 'nav__item'}>
                        <Link data-bs-toggle="modal" data-bs-target="#exampleModal" className='nav__Link'>
                            {/* <img src={ogout} alt="" /> */}
                            <i className="bi bi-box-arrow-right"></i>
                        </Link>
                    </li>
                </ul>


                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Sing out</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            {/* <div class="modal-body">
                                ...
                            </div> */}
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button onClick={()=> navigate('/login')} type="button" class="btn btn-danger">exit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}

export default Header