import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'
import Header from './components/header'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Footer from './components/Footer'
import Product from './pages/Product'
import { store } from '../src/store/index'
import Cart from './components/Cart'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Categories" element={<Categories />} />
    <Route path="/Product/:id" element={<Product />} />
  </Routes>
)

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Header />
        </div>
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
