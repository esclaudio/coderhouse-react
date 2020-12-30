import ItemCount from './ItemCount'
import { useState, useContext } from 'react'
import { useHistory, Link } from "react-router-dom";
import { AppContext } from '../context/CartContext'

const ItemDetail = ({item}) => {
  const { addItem, categories } = useContext(AppContext)
  const history = useHistory();
  const [quantity, setQuantity] = useState(1)

  const category = categories.find(category => category.slug === item.categoryId)

  const addToCart = () => {
    addItem(item, quantity)
    history.push('/cart')
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb p-0 mb-2">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/category/${category.slug}`}>{category.description}</Link>
          </li>
        </ol>
      </nav>
      <div className="card">
        <div className="row no-gutters">
          <div className="col-md-8">
            <img src={item.image} className="card-img" alt={item.description} style={{minHeight: '500px', maxHeight: '500px', objectFit: 'contain'}}/>
          </div>
          <div className="col-md-4 border-left">
            <div className="card-body">
              <h5 className="card-title font-weight-bold">
                {item.description}
              </h5>

              <div className="mb-3" style={{ fontSize: '2rem' }}>
                $ {item.price.toLocaleString()}
              </div>

              {
                item.stock > 0 &&
                  <div className="mb-3">
                    <div className="mb-1 font-weight-bold">Stock disponible</div>
                    <div>Cantidad: {item.stock}</div>
                  </div>
              }

              <ItemCount
                initial={quantity}
                min={1}
                max={item.stock}
                onAdd={(quantity) => setQuantity(quantity)}
              />
              <button
                onClick={addToCart}
                className="btn btn-block btn-primary font-weight-bold p-2">
                  {
                    quantity > 1
                      ? `Agregar ${quantity} al carrito`
                      : 'Agregar al carrito'
                  }
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetail
