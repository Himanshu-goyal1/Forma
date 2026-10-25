import { ArrowLeft, Heart, Leaf, PackageCheck } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main className="page-container about-page">
      <div className="about-hero">
        <span className="eyebrow">A LITTLE ABOUT FORMA</span>
        <h1>Everyday things<br /><em>should feel special.</em></h1>
        <p>Forma is a concept store for useful, well-considered objects. We believe the things you reach for every day deserve a little thought — from your morning mug to the bag that goes everywhere.</p>
        <Link to="/" className="text-link"><ArrowLeft size={16} /> Back to home</Link>
      </div>
      <div className="about-image"><img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1500&q=90" alt="Thoughtfully arranged, warm modern home interior" /></div>
      <div className="values-grid">
        <article><span className="value-icon"><Heart size={21} /></span><h2>Chosen with care</h2><p>We look for useful products with a clear purpose and timeless feel.</p></article>
        <article><span className="value-icon"><Leaf size={21} /></span><h2>Less, more meaningful</h2><p>We celebrate thoughtful choices over clutter and passing trends.</p></article>
        <article><span className="value-icon"><PackageCheck size={21} /></span><h2>Made for real life</h2><p>Good design should work hard, feel good, and fit into your everyday.</p></article>
      </div>
      <div className="about-footer-cta"><h2>Ready to find something good?</h2><Link className="button button-dark" to="/products">Explore the collection</Link></div>
    </main>
  )
}
