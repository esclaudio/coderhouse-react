import { getFirestore } from './firebase'

export const createOrder = (order) => {
  const db = getFirestore()
  const orders = db.collection('ordenes')

  return orders.add(order)
}
