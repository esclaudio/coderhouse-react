import Item from './Item'
import Loading from './Loading'

const ItemList = ({ items }) => {
  if (items.length === 0) {
    return <Loading/>
  }

  return (
    <div style={{ background: '#fff', borderRadius: '5px' }}>
      { items.map((item, index) => <Item item={item} key={index} />) }
    </div>
  )
}

export default ItemList
