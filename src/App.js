import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import Home from './pages/Home'
import ItemDetailContainer from './pages/ItemDetailContainer'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <CartContext>
        <BrowserRouter>
          <Navbar logo={process.env.PUBLIC_URL + '/logo.svg'}/>
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Home/>
              </Route>
              <Route path="/category/:categoryId">
                <Home/>
              </Route>
              <Route path="/item/:productId">
                <ItemDetailContainer/>
              </Route>
              <Route path="/cart">
                <Cart/>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </CartContext>
    </div>
  )
}

export default App
