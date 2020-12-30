import { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/CartContext'
import { getProducts } from '../db/products'
import ItemList from '../components/ItemList'
import Loading from '../components/Loading'

const Home = () => {
  const { categoryId } = useParams();
  const { categories } = useContext(AppContext)
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState();
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setActiveCategory(
      categories.find(category => category.slug === categoryId)
    )

    setIsLoading(true)
    setProducts([])

    getProducts(categoryId)
      .then(products => setProducts(products))
      .finally(() => setIsLoading(false))
  }, [categoryId])

  return (
    <>
      {activeCategory && <h4>{activeCategory.description}</h4>}
      {isLoading? <Loading/>: <ItemList items={products}/>}
    </>
  )
}

export default Home;
