import { getFirestore } from './firebase'

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    const db = getFirestore()
    const collection = db.collection('categories')

    collection.get()
      .then(querySnapshot => {
        if (querySnapshot.size === 0) {
          reject('No hay resultados')
        }

        const categories = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        resolve(categories)
      })
      .catch(error => {
        reject(error)
      })
  })
}
