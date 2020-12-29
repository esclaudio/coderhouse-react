import ItemCount from './ItemCount'
import { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import { AppContext } from '../context/CartContext'

const ItemDetail = ({item}) => {
  const context = useContext(AppContext)
  const history = useHistory();
  const [quantity, setQuantity] = useState(1)

  const addToCart = () => {
    context.addItem(item, quantity)
    history.push('/cart')
  }

  return (
    <div className="card">
      <div className="card-body">
        <div className="d-flex mb-4">
          <div style={{ maxWidth: '200px', marginRight: '20px' }}>
            <img src={item.image} className="w-100" />
          </div>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: '600', paddingBottom: '8px', margin: '0' }}>{item.description}</h1>
            <div style={{ fontSize: '28px', paddingBottom: '8px' }}>$ {item.price.toLocaleString()}</div>
            {
              item.stock > 0 &&
                <div>
                  <div style={{ fontWeight: '600', paddingBottom: '8px' }}>Stock disponible</div>
                  <div>Cantidad: {item.stock}</div>
                </div>
            }
          </div>
        </div>
        <ItemCount
          initial={quantity}
          min={1}
          max={item.stock}
          onAdd={(quantity) => setQuantity(quantity)}
        />
        <button
          onClick={addToCart}
          className="btn btn-block btn-outline-primary">
            {
              quantity > 1
                ? `Agregar ${quantity} al carrito`
                : 'Agregar al carrito'
            }
        </button>
      </div>
    </div>
  )
}

export default ItemDetail
