import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles'
import Header from './components/header'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Footer from './components/Footer'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Categories" element={<Categories />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
