import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/CartContext'
import cart from '../cart.svg'

const CartIcon = () => {
  const context = useContext(AppContext)

  return (
    <Link to="/cart" className="nav-link">
      <img src={cart} width="24" height="24" alt="" />
      {
        context.items.length > 0
        &&
          <span className="badge badge-danger">
            {context.items.reduce((a, b) => a + b.quantity, 0)}
          </span>
      }
    </Link>
  )
}

export default CartIcon
