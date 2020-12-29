import { Link } from 'react-router-dom'
import CartIcon from './CartIcon'

const Navbar = ({logo, title}) => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"/>
        {title}
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link to="/category/mother" className="nav-link">Mothers</Link>
          <Link to="/category/procesador" className="nav-link">Procesadores</Link>
          <Link to="/category/cooler" className="nav-link">Coolers</Link>
          <Link to="/category/ram" className="nav-link">Memorias RAM</Link>
          <Link to="/category/hd" className="nav-link">Almacenamiento</Link>
          <Link to="/category/video" className="nav-link">Placas de video</Link>
          <CartIcon/>
        </div>
      </div>
    </nav>
  )
}

export default Navbar