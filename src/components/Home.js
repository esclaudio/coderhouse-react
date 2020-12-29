import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../db/products'
import ItemList from './ItemList'
import CategoryList from './CategoryList'

const Home = () => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams();

  useEffect(() => {
    setProducts([])

    getProducts(categoryId)
      .then(products => setProducts(products))
  }, [categoryId])

  return (
    <div className="row">
      <div className="col-sm-2">
        <h5>Categorías</h5>
        <CategoryList/>
      </div>
      <div className="col-sm-10">
        <ItemList items={products}/>
      </div>
    </div>
  )
}

export default Home;
