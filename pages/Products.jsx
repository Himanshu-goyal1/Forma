import { useMemo, useState } from 'react'
import { Search, SlidersHorizontal } from 'lucide-react'
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Products() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const categories = ['All', ...new Set(products.map((product) => product.category))]
  const filteredProducts = useMemo(() => products.filter((product) => {
    const matchesSearch = `${product.name} ${product.description}`.toLowerCase().includes(search.toLowerCase())
    return matchesSearch && (category === 'All' || product.category === category)
  }), [search, category])

  return (
    <main className="page-container">
      <div className="page-intro"><span className="eyebrow">THE COLLECTION</span><h1>Find your everyday.</h1><p>Practical favourites and considered essentials, picked for real life.</p></div>
      <div className="catalog-toolbar">
        <label className="search-box"><Search size={18} /><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search products..." aria-label="Search products" /></label>
        <label className="category-select"><SlidersHorizontal size={17} /><span className="sr-only">Filter by category</span><select value={category} onChange={(event) => setCategory(event.target.value)}>{categories.map((item) => <option key={item}>{item}</option>)}</select></label>
      </div>
      <p className="results-count">{filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} to explore</p>
      {filteredProducts.length ? <div className="product-grid">{filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div> : <div className="empty-results"><Search size={28} /><h2>No matches just yet</h2><p>Try another search or choose a different category.</p><button className="button button-dark" onClick={() => { setSearch(''); setCategory('All') }}>Clear filters</button></div>}
    </main>
  )
}
