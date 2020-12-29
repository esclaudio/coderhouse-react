import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCategories } from '../db/categories'
import Loading from './Loading'

const CategoryList = () => {
  const [categories, setCategories] = useState([])
  const { categoryId } = useParams();

  useEffect(() => {
    getCategories()
      .then(categories => setCategories(categories))
  }, [])

  if (categories.length === 0) {
    return <Loading/>
  }

  return (
    <nav className="nav nav-pills flex-column">
      {
        categories.map((category, index) => (
          <Link key={index} to={`/category/${category.slug}`} className={`nav-link ${categoryId === category.slug? 'active': ''}`}>
            {category.description}
          </Link>
        ))
      }
    </nav>
  )
}

export default CategoryList
