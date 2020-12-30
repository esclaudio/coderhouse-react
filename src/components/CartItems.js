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
              <td style={{width: '70px'}}>
                <img src={item.product.image} alt={item.product.description} style={{maxWidth: '60px'}}/>
              </td>
              <td>
                <p className="pl-2">{item.product.description}</p>
                <button type="button" className="btn btn-sm btn-link" onClick={() => deleteItem(index)}>
                  Eliminar
                </button>
              </td>
              <td className="text-right" style={{width: '70px'}}>
                x{item.quantity}
              </td>
              <td className="text-right text-nowrap font-weight-bold" style={{width: '100px', fontSize: '1.25rem'}}>
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
