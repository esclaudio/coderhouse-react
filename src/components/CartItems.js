import { useContext } from 'react'
import { AppContext } from '../context/CartContext'

const CartItems = () => {
  const { items, deleteItem } = useContext(AppContext)

  return (
    <table className="table bg-white">
      <tbody>
        {
          items.map((item, index) => (
            <tr key={index}>
              <td className="text-right">
                <strong>{item.quantity}</strong>
              </td>
              <td>
                <p style={{ padding: '0 .5rem' }}>{item.product.description}</p>
                <button type="button" className="btn btn-sm btn-link" onClick={() => deleteItem(index)}>
                  Eliminar
                </button>
              </td>
              <td className="text-right text-nowrap">
                $ {item.product.price.toLocaleString()}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default CartItems
