import { useContext } from 'react'
import { AppContext } from '../context/CartContext'

const SuccessCheckout = () => {
  const { orderId } = useContext(AppContext)

  return (
    <div className="text-center">
      <h4>¡Gracias por tu compra!</h4>
      <p className="mb-0">Tu número de pedido es <strong>{orderId}</strong></p>
    </div>
  )
}

export default SuccessCheckout
