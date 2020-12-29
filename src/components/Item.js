import { Link } from 'react-router-dom'

const Item = ({ item }) => {
  return (    
    <div style={{ display: 'flex', borderBottom: '1px solid #ddd', padding: '20px' }}>
      <div style={{ height: '160px', width: '160px', overflow: 'hidden', padding: '0 24px' }}>
        <img src={ item.image } alt={ item.description } style={{ width: '100%' }} />
      </div>
      <div style={{ flexGrow: '1' }}>
        <Link to={`/item/${item.id}`}>
          <h2 style={{ marginBottom: '10px', color: '#333', fontSize: '20px', fontWeight: '300', lineHeight: '1.3' }}>
            {item.description}
          </h2>
        </Link>
        <div style={{ color: '#333', fontSize: '24px', fontWeight: '600', marginBottom: '8px', lineHeight: '1.25' }} >
          $ {item.price.toLocaleString()}
        </div>
      </div>
    </div>
  )
}

export default Item