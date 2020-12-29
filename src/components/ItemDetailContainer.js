import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../db/products'
import ItemDetail from '../components/ItemDetail'
import Loading from '../components/Loading'

const ItemDetailContainer = () => {
  const { productId } = useParams()
  const [item, setItem] = useState()

  useEffect(() => {
    getProduct(productId)
      .then(product => setItem(product))
      .catch(error => alert(error))
  }, [productId])

  if (item) {
    return <ItemDetail item={item} />
  }

  return <Loading/>
}

export default ItemDetailContainer
