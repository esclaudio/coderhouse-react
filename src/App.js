import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import Home from './pages/Home'
import ItemDetailContainer from './pages/ItemDetailContainer'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import logo from './logo.svg'

function App() {
  return (
    <div>
      <CartContext>
        <BrowserRouter>
          <Navbar logo={logo} title={process.env.REACT_APP_SITE_TITLE}/>
          <div className="container-fluid">
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
