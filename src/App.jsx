import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Launch30Days from './pages/Launch30Days.jsx'
import EnterpriseAI from './pages/EnterpriseAI.jsx'
import Workshops from './pages/Workshops.jsx'
import CaseStudies from './pages/CaseStudies.jsx'
import Ebook from './pages/Ebook.jsx'
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import NotFound from './pages/NotFound.jsx'

// Lazy-load the blog routes — 150 markdown files would otherwise bloat the
// main bundle. This way the blog chunk only loads when someone visits /blog.
const Blog = lazy(() => import('./pages/Blog.jsx'))
const BlogPost = lazy(() => import('./pages/BlogPost.jsx'))

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  return null
}

function BlogLoading() {
  return (
    <div className="container-page py-24 text-center text-sm text-slate-500">
      Loading article…
    </div>
  )
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink-950">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/launch-in-30-days" element={<Launch30Days />} />
          <Route path="/enterprise-ai-engineering" element={<EnterpriseAI />} />
          <Route path="/workshops" element={<Workshops />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/ebook" element={<Ebook />} />
          <Route
            path="/blog"
            element={
              <Suspense fallback={<BlogLoading />}>
                <Blog />
              </Suspense>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <Suspense fallback={<BlogLoading />}>
                <BlogPost />
              </Suspense>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
