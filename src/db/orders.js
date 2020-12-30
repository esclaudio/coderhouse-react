import { getFirestore } from './firebase'

export const createOrder = (order) => {
  const db = getFirestore()
  const orders = db.collection('orders')

  return orders.add(order)
}
