import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import About from './pages/About'
import Checkout from './pages/Checkout'
import NotFound from './pages/NotFound'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

function CartPersistence() {
  const cart = useSelector((state) => state.cart)
  useEffect(() => {
    try { localStorage.setItem('forma-cart', JSON.stringify(cart)) } catch { /* storage may be unavailable */ }
  }, [cart])
  return null
}

export default function App() {
  return (
    <div className="app-shell">
      <CartPersistence />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <footer className="site-footer"><span className="footer-brand">forma<span>.</span></span><span>Everyday essentials, thoughtfully chosen.</span><span>© 2026 Forma Store</span></footer>
    </div>
  )
}
