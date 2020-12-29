import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../db/products'
import ItemList from './ItemList'

const Home = () => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams();

  useEffect(() => {
    setProducts([])

    getProducts(categoryId)
      .then(products => setProducts(products))
  }, [categoryId])

  return (
    <>
      <ItemList items={products} />
    </>
  )
}

export default Home;