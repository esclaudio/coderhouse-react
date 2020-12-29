import { getFirestore } from './firebase'

export const getProducts = (categoryId = null) => {
  return new Promise((resolve, reject) => {
    const db = getFirestore()
    let query = db.collection('productos')
    
    if (categoryId) {
      query = query.where('categoryId', '==', categoryId)
    }

    query.get()
      .then(querySnapshot => {
        if (querySnapshot.size === 0) {
          reject('No hay resultados')
        }

        const products = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        resolve(products)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const getProduct = (id) => {
  return new Promise((resolve, reject) => {
    const db = getFirestore()
    const collection = db.collection('productos')
    const item = collection.doc(id)

    item.get()
      .then(doc => {
        if (!doc.exists) {
          reject('No se encontró el producto')
          return
        }

        const product = {
          id: doc.id,
          ...doc.data()
        }

        resolve(product)
      })
      .catch(error => {
        reject(error)
      })
  })
}