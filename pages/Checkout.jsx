import { CheckCircle2, ArrowLeft, ShoppingBag } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { useState } from 'react'

export default function Checkout() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [placed, setPlaced] = useState(false)
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  function placeOrder(event) {
    event.preventDefault()
    setPlaced(true)
    dispatch(clearCart())
  }

  if (placed) return <main className="page-container checkout-page"><div className="empty-cart"><div className="empty-cart-icon success-icon"><CheckCircle2 size={32} /></div><span className="eyebrow">ORDER CONFIRMED</span><h1>Thank you!</h1><p>Your demo order has been placed successfully. No payment was processed.</p><Link to="/products" className="button button-dark">Keep exploring</Link></div></main>
  if (!cart.length) return <main className="page-container checkout-page"><div className="empty-cart"><div className="empty-cart-icon"><ShoppingBag size={30} /></div><h1>Your bag is empty.</h1><p>Add a product before heading to checkout.</p><Link to="/products" className="button button-dark">Browse products</Link></div></main>

  return (
    <main className="page-container checkout-page">
      <div className="page-intro"><span className="eyebrow">ALMOST YOURS</span><h1>Checkout<span className="muted-period">.</span></h1><p>This is a demo checkout — no real payment will be taken.</p></div>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={placeOrder}>
          <h2>Delivery details</h2>
          <div className="form-grid"><label>Full name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Email address<input required name="email" type="email" autoComplete="email" placeholder="you@example.com" /></label><label className="full-field">Street address<input required name="address" autoComplete="street-address" placeholder="House number and street" /></label><label>City<input required name="city" autoComplete="address-level2" placeholder="Your city" /></label><label>PIN code<input required name="pin" inputMode="numeric" pattern="[0-9]{6}" autoComplete="postal-code" placeholder="6-digit PIN" /></label></div>
          <button className="button button-dark checkout-button" type="submit">Place demo order</button><button type="button" className="text-link back-to-cart" onClick={() => navigate('/cart')}><ArrowLeft size={15} /> Back to cart</button>
        </form>
        <aside className="order-summary"><span className="eyebrow">YOUR ORDER</span><h2>Order summary</h2>{cart.map((item) => <div className="checkout-item" key={item.id}><img src={item.image} alt="" /><div><strong>{item.name}</strong><span>Qty: {item.quantity}</span></div><strong>₹{(item.price * item.quantity).toLocaleString('en-IN')}</strong></div>)}<div className="summary-total"><span>Total</span><strong>₹{total.toLocaleString('en-IN')}</strong></div></aside>
      </div>
    </main>
  )
}
