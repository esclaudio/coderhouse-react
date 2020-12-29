import { useState } from 'react'

const ItemCount = ({initial, min, max, onAdd}) => {
  const [count, setCount] = useState(initial)

  const increment = () => {
    if (count < max) {
      setCount(count + 1)
      onAdd(count + 1)
    }
  }

  const decrement = () => {
    if (count > min) {
      setCount(count - 1)
      onAdd(count - 1)
    }
  }

  return (
    <>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button onClick={decrement} className="btn btn-outline-secondary">-</button>
        </div>
        <input type="text" className="form-control text-center" readOnly value={count} />
        <div className="input-group-append">
          <button onClick={increment} className="btn btn-outline-secondary">+</button>
        </div>
      </div>
    </>
  )
}

export default ItemCount