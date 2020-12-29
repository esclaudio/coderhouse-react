import { useContext } from 'react'
import { AppContext } from '../context/CartContext'
import Checkout from '../components/Checkout'
import CartItems from '../components/CartItems'
import Buying from '../components/Buying'
import SuccessCheckout from '../components/SuccessCheckout'
import EmptyCart from '../components/EmptyCart'

const Cart = () => {
  const { items, orderId, isLoading } = useContext(AppContext)

  if (isLoading) {
    return <Buying/>
  }

  if (items.length === 0) {
    if (orderId) {
      return <SuccessCheckout/>
    }

    return <EmptyCart/>
  }

  return (
    <div className="row">
      <div className="col-sm-8">
        <h5>Productos</h5>
        <CartItems/>
      </div>
      <div className="col-sm-4">
        <Checkout/>
      </div>
    </div>
  )
}

export default Cart
