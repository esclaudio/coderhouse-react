import { Link } from 'react-router-dom'
import CartIcon from './CartIcon'

const Navbar = ({logo, title}) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
        {title}
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse">
        <div className="navbar-nav">
          <CartIcon/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
