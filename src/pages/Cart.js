import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../context/CartContext'
import Checkout from '../components/Checkout'
import CartItems from '../components/CartItems'
import Loading from '../components/Loading'

const Cart = () => {
  const { items, orderId, isProcessing } = useContext(AppContext)

  if (isProcessing) {
    return <Loading/>
  }

  if (items.length === 0 && orderId) {
    return (
      <div className="text-center">
        <h4>¡Gracias por tu compra!</h4>
        <p className="mb-0">Tu número de pedido es <strong>{orderId}</strong></p>
      </div>
    )
  }

  if (items.length === 0) {
    return (
      <div className="text-center">
        <h4>Tu carrito está vacío</h4>
        <p className="mb-0">¿No sabés qué comprar? <Link to="/">¡Miles de productos te esperan!</Link></p>
      </div>
    )
  }

  return (
    <div className="row">
      <div className="col-sm-8 mb-4">
        <h5>Resumen</h5>
        <CartItems/>
        <Link to="/">Seguir comprando</Link>
      </div>
      <div className="col-sm-4">
        <Checkout/>
      </div>
    </div>
  )
}

export default Cart
