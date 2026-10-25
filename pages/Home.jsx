import { ArrowRight, ArrowUpRight, PackageCheck, Sparkles, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow"><Sparkles size={14} /> GOOD THINGS, THOUGHTFULLY CHOSEN</span>
          <h1>Make room for<br /><em>the everyday.</em></h1>
          <p>Useful objects. Considered design. Little upgrades that make everyday life feel a bit more special.</p>
          <div className="hero-actions">
            <Link to="/products" className="button button-dark">Explore collection <ArrowRight size={17} /></Link>
            <Link to="/about" className="text-link">Our story <ArrowUpRight size={16} /></Link>
          </div>
          <div className="hero-note"><span className="note-line" /> Thoughtfully picked, made to be used.</div>
        </div>
        <div className="hero-visual">
          <img src="https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1200&q=90" alt="Calm, sunlit modern living space" />
          <div className="image-stamp"><span>THE EVERYDAY EDIT</span><strong>Less, but<br />better.</strong></div>
          <span className="hero-index">COLLECTION Nº 01 — 2026</span>
        </div>
      </section>
      <section className="benefit-strip">
        <div><PackageCheck size={19} /><span>Thoughtful essentials</span></div>
        <div><Truck size={19} /><span>Simple, reliable delivery</span></div>
        <div><Sparkles size={19} /><span>Made for everyday moments</span></div>
      </section>
      <section className="section featured-section">
        <div className="section-heading"><div><span className="eyebrow">A FEW FAVOURITES</span><h2>Good design, daily.</h2></div><Link className="text-link" to="/products">Shop all products <ArrowRight size={16} /></Link></div>
        <div className="product-grid">{products.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}</div>
      </section>
      <section className="bottom-cta"><span className="eyebrow">FIND YOUR NEXT FAVOURITE</span><h2>Small things. Better days.</h2><Link to="/products" className="button button-dark">Browse everything <ArrowRight size={17} /></Link></section>
    </>
  )
}
