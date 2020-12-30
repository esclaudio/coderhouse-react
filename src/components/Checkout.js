import { useContext, useState } from 'react'
import { AppContext } from '../context/CartContext'
import firebase from 'firebase/app'

const Checkout = () => {
  const { items, itemsTotal, checkout } = useContext(AppContext)
  const [errors, setErrors] = useState({})
  const [isValid, setIsValid] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    emailRepeat: '',
  })

  const validate = () => {
    const err = {}

    if (form.name.trim() === '') {
      err.name = 'Ingrese un nombre'
    }

    if (form.phone.trim() === '') {
      err.phone = 'Ingrese un teléfono'
    }

    if (form.email === '') {
      err.email = 'Ingrese un email'
    } else {
      if (/\S+@\S+\.\S+/.test(form.email)) {
        if (form.email !== form.emailRepeat) {
          err.email = 'Los emails ingresados no son iguales'
        }
      } else {
        err.email = 'El email ingresado no es correcto'
      }
    }

    setErrors(err)
    setIsValid(Object.entries(err).length === 0)
  }

  const handleChange = (event) => {
    setForm((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  }

  const handleSubmit = () => {
    const orderItems = items.map(item => {
      return {
        id: item.product.id,
        description: item.product.description,
        quantity: item.quantity,
        price: item.product.price,
      }
    })

    const order = {
      buyer: {
        name: form.name,
        phone: form.phone,
        email: form.email,
      },
      items: orderItems,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: itemsTotal,
    }

    checkout(order)
  }

  return (
    <>
      <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input type="text" className={`form-control ${errors.name? 'is-invalid': ''}`} id="name" name="name" value={form.name} onChange={handleChange} onBlur={validate} />
        { errors.name && <div className="invalid-feedback">{errors.name}</div> }
      </div>

      <div className="form-group">
        <label htmlFor="phone">Teléfono</label>
        <input type="test" className={`form-control ${errors.phone? 'is-invalid': ''}`} id="phone" name="phone" value={form.phone} onChange={handleChange} onBlur={validate} />
        { errors.phone && <div className="invalid-feedback">{errors.phone}</div> }
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className={`form-control ${errors.email? 'is-invalid': ''}`} id="email" name="email" value={form.email} onChange={handleChange} onBlur={validate} />
        { errors.email && <div className="invalid-feedback">{errors.email}</div> }
      </div>

      <div className="form-group">
        <label htmlFor="emailRepeat">Repetir email</label>
        <input type="email" className="form-control" id="emailRepeat" name="emailRepeat" value={form.emailRepeat} onChange={handleChange} onBlur={validate} autoComplete="off" />
      </div>

      <div className="form-group">
        <strong>Total</strong>
        <div style={{fontWeight: 'bold', fontSize: '1.25rem'}}>{'$ ' + itemsTotal.toLocaleString()}</div>
      </div>

      <button type="button" className="btn btn-primary" onClick={handleSubmit} disabled={!isValid}>
        Realizar compra
      </button>
    </>
  )
}

export default Checkout
