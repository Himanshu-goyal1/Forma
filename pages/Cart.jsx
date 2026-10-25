import { ArrowRight, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../features/cart/cartSlice'

export default function Cart() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  if (!cart.length) {
    return <main className="page-container cart-page"><div className="empty-cart"><div className="empty-cart-icon"><ShoppingBag size={30} /></div><span className="eyebrow">YOUR BAG, FOR NOW</span><h1>It’s a little empty.</h1><p>Your next everyday favourite is waiting to be found.</p><Link className="button button-dark" to="/products">Explore products <ArrowRight size={17} /></Link></div></main>
  }

  return (
    <main className="page-container cart-page">
      <div className="page-intro cart-intro"><span className="eyebrow">YOUR SELECTION</span><h1>Your shopping bag<span className="muted-period">.</span></h1><p>{itemCount} {itemCount === 1 ? 'item' : 'items'} selected with care.</p></div>
      <div className="cart-layout">
        <section className="cart-items">
          <div className="cart-list-head"><span>PRODUCT</span><span>QUANTITY</span><span>SUBTOTAL</span></div>
          {cart.map((item) => <article className="cart-row" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="cart-product-info"><span className="product-category plain-category">{item.category}</span><h3>{item.name}</h3><strong>₹{item.price.toLocaleString('en-IN')}</strong><button className="remove-button" onClick={() => dispatch(removeFromCart(item.id))}><Trash2 size={14} /> Remove</button></div>
            <div className="quantity-control" aria-label={`Quantity for ${item.name}`}><button aria-label="Decrease quantity" onClick={() => dispatch(decreaseQuantity(item.id))}><Minus size={14} /></button><span>{item.quantity}</span><button aria-label="Increase quantity" onClick={() => dispatch(increaseQuantity(item.id))}><Plus size={14} /></button></div>
            <strong className="line-total">₹{(item.price * item.quantity).toLocaleString('en-IN')}</strong>
          </article>)}
          <div className="cart-bottom-actions"><Link to="/products" className="text-link">← Continue shopping</Link><button className="remove-button clear-cart" onClick={() => dispatch(clearCart())}>Clear bag</button></div>
        </section>
        <aside className="order-summary"><span className="eyebrow">THE TOTAL</span><h2>Order summary</h2><div className="summary-line"><span>Subtotal ({itemCount} items)</span><span>₹{total.toLocaleString('en-IN')}</span></div><div className="summary-line"><span>Delivery</span><span className="free-label">Calculated at checkout</span></div><div className="summary-total"><span>Total</span><strong>₹{total.toLocaleString('en-IN')}</strong></div><p className="summary-note">Taxes and delivery details can be confirmed at checkout.</p><button className="button button-dark checkout-button" onClick={() => navigate('/checkout')}>Continue to checkout <ArrowRight size={17} /></button></aside>
      </div>
    </main>
  )
}
