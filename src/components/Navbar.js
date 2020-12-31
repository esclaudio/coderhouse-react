import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/CartContext'
import CartIcon from './CartIcon'
import '../styles/navbar.scss'

const Navbar = ({logo}) => {
  const { categories } = useContext(AppContext)

  return (
    <nav className="navbar fixed-top navbar-expand navbar-light bg-yellow">
      <Link to="/" className="navbar-brand">
        <img src={logo} className="d-inline-block align-top" style={{height: '30px'}} alt={process.env.REACT_APP_SITE_TITLE} loading="lazy"/>
      </Link>

      <div className="navbar-nav mr-auto">
        <div className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/#" role="button" data-toggle="dropdown">
            Categorías
          </a>
          <div className="dropdown-menu">
            {
              categories.map((category, index) => (
                <Link key={index} to={`/category/${category.slug}`} className="dropdown-item">
                  {category.description}
                </Link>
              ))
            }
          </div>
        </div>
      </div>

      <CartIcon/>
    </nav>
  )
}

export default Navbar
