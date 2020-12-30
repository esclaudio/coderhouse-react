import { Link } from 'react-router-dom'
import '../styles/item.scss'

const Item = ({ item }) => {
  return (
    <div className="col mb-4">
      <div className="card card-item h-100">
        <Link to={`/item/${item.id}`} className="stretched-link">
          <img src={ item.image } alt={ item.description } className="card-img-top" style={{minHeight: '284px', maxHeight: '284px', objectFit: 'contain'}}/>
        </Link>
        <div className="card-body border-top">
          <h5 className="card-title font-weight-bold">
            $ {item.price.toLocaleString()}
          </h5>
          <p className="card-text">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Item
