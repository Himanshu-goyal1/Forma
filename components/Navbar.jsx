import { ShoppingBag, Leaf } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const cart = useSelector((state) => state.cart)
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)

  const linkClass = ({ isActive }) => `nav-link${isActive ? ' active' : ''}`

  return (
    <header className="site-header">
      <div className="nav-wrap">
        <NavLink to="/" className="brand"><span className="brand-mark"><Leaf size={18} /></span> forma<span className="brand-dot">.</span></NavLink>
        <nav aria-label="Main navigation">
          <NavLink to="/" end className={linkClass}>Home</NavLink>
          <NavLink to="/products" className={linkClass}>Products</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
        </nav>
        <NavLink to="/cart" className={({ isActive }) => `cart-link${isActive ? ' active' : ''}`} aria-label={`Cart, ${count} items`}>
          <ShoppingBag size={19} /><span>Cart</span><span className="cart-count">{count}</span>
        </NavLink>
      </div>
    </header>
  )
}
