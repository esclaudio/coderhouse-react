import React, { useState, useEffect } from 'react'
import { getCategories } from '../db/categories'
import { createOrder } from '../db/orders'

export const AppContext = React.createContext()

export const CartContext = ({ children }) => {
  const [items, setItems] = useState([])
  const [orderId, setOrderId] = useState(false)
  const [categories, setCategories] = useState([])
  const [isProcessing, setIsProcessing] = useState(false)

  useEffect(() => {
    getCategories()
      .then(categories => setCategories(categories))
  }, [])

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
    setIsProcessing(true)

    createOrder(order)
      .then(({ id }) => {
        setOrderId(id)
        setItems([])
        setIsProcessing(false)
      })
  }

  const itemsTotal = items.reduce((accum, item) => accum + (item.quantity * item.product.price), 0)

  const itemsCount = items.reduce((a, b) => a + b.quantity, 0)

  const values = {
    categories,
    items,
    itemsTotal,
    itemsCount,
    orderId,
    isProcessing,
    addItem,
    deleteItem,
    checkout,
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}
