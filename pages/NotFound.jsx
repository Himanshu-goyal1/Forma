import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return <main className="page-container not-found"><span className="error-code">404</span><span className="eyebrow">WRONG TURN</span><h1>This page wandered off.</h1><p>The page you’re looking for doesn’t exist or may have moved.</p><Link className="button button-dark" to="/"><ArrowLeft size={16} /> Back to home</Link></main>
}
