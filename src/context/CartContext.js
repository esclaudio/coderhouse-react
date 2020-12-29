import React, { useState } from 'react'
import { getFirestore } from '../db/firebase'

export const AppContext = React.createContext()

export const CartContext = ({ children }) => {
  const [items, setItems] = useState([])
  const [orderId, setOrderId] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const addItem = (product, quantity) => {
    const index = items.findIndex(item => item.product.id === product.id)

    if (index >= 0) {
      quantity += items[index].quantity
    }

    if (quantity > product.stock) {
      alert('No hay suficiente stock')
    } else {
      if (index === -1) {
        items.push({
          product: product,
          quantity: quantity,
        })
      } else {
        items[index].quantity = quantity
      }

      setItems([...items])
    }

    setOrderId(false)
  }

  const deleteItem = (i) => {
    setItems(items.filter((item, index) => index !== i))
  }

  const checkout = (order) => {
    const db = getFirestore()
    const orders = db.collection('ordenes')

    setIsLoading(true)

    orders.add(order)
      .then(({ id }) => {
        setOrderId(id)
        setItems([])
        setIsLoading(false)
      })
  }

  const total = items.reduce((accum, item) => accum + (item.quantity * item.product.price), 0)

  const values = {
    items,
    total,
    orderId,
    addItem,
    deleteItem,
    checkout,
    isLoading,
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}
