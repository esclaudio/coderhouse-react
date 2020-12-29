import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import logo from './logo.svg'
import { CartContext } from './context/CartContext'

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
                <ItemDetailContainer />
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
