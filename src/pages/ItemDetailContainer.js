import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../db/products'
import ItemDetail from '../components/ItemDetail'
import Loading from '../components/Loading'
import NotFound from '../components/NotFound'

const ItemDetailContainer = () => {
  const { productId } = useParams()
  const [item, setItem] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    getProduct(productId)
      .then(product => setItem(product))
      .catch(() => setNotFound(true))
      .finally(() => setIsLoading(false))
  }, [productId])

  if (isLoading) {
    return <Loading/>
  }

  if (notFound) {
    return <NotFound/>
  }

  if (item) {
    return <ItemDetail item={item} />
  }

  return <></>
}

export default ItemDetailContainer
