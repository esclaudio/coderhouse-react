import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className="text-center">
      <h4>Tu carrito está vacío</h4>
      <p className="mb-0">¿No sabés qué comprar? <Link to="/">¡Miles de productos te esperan!</Link></p>
    </div>
  )
}

export default EmptyCart
