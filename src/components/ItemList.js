import Item from './Item'

const ItemList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="text-center">
        <h4>No se encontraron productos</h4>
      </div>
    )
  }

  return (
    <div className="row row-cols-1 row-cols-md-3">
      { items.map((item, index) => <Item item={item} key={index} />) }
    </div>
  )
}

export default ItemList
