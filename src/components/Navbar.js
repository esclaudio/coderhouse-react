import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/CartContext'
import CartIcon from './CartIcon'

const Navbar = ({logo, title}) => {
  const { categories } = useContext(AppContext)

  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
        {title}
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbar-content">
        <div className="navbar-nav mr-auto">
          <div className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbar-categories" role="button" data-toggle="dropdown">
              Categorías
            </a>
            <div className="dropdown-menu" aria-labelledby="navbar-categories">
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
      </div>
    </nav>
  )
}

export default Navbar
