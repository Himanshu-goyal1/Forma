import { useState } from 'react'
import { Check, Plus } from 'lucide-react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'

export default function ProductCard({ product }) {
  const dispatch = useDispatch()
  const [added, setAdded] = useState(false)

  function handleAdd() {
    dispatch(addToCart(product))
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1600)
  }

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-info">
        <div className="product-heading"><h3>{product.name}</h3><strong>₹{product.price.toLocaleString('en-IN')}</strong></div>
        <p>{product.description}</p>
        <button className={`button add-button${added ? ' added' : ''}`} onClick={handleAdd}>
          {added ? <><Check size={16} /> Added to cart</> : <><Plus size={16} /> Add to cart</>}
        </button>
        {added && <span className="sr-status" role="status">{product.name} added to cart.</span>}
      </div>
    </article>
  )
}
