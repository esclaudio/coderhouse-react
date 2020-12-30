import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/CartContext'
import cart from '../cart.svg'

const CartIcon = () => {
  const { itemsCount } = useContext(AppContext)

  return (
    <Link to="/cart" className="nav-link">
      <img src={cart} width="24" height="24" alt=""/>
      {
        itemsCount > 0
        &&
          <span className="badge badge-danger">
            {itemsCount}
          </span>
      }
    </Link>
  )
}

export default CartIcon
