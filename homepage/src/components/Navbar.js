import React from 'react'
import {Link} from 'react-router-dom'
import './styles/Navbar.scss'

const Navbar = () => {
  return(
    <div className = 'sum'>
      <div className = "logo">
        Antioch
      </div>
      <nav className='item'>
        <ul className='ul'>
          <li>
            <Link to ='/'>교회소개</Link>
          </li>
          <li>
            <Link to ='/'>말씀과 영상</Link>
          </li>
          <li>
            <Link to ='/'>교육과 훈련</Link>
          </li>
          <li>
            <Link to ='/'>전도와 선교</Link>
          </li>
          <li>
            <Link to ='/'>교회소식</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar