import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'

const Home = lazy(() => import('@/pages/Home').then((m) => ({ default: m.Home })))
const About = lazy(() => import('@/pages/About').then((m) => ({ default: m.About })))
const Classes = lazy(() => import('@/pages/Classes').then((m) => ({ default: m.Classes })))
const Membership = lazy(() => import('@/pages/Membership').then((m) => ({ default: m.Membership })))
const Trainers = lazy(() => import('@/pages/Trainers').then((m) => ({ default: m.Trainers })))
const Contact = lazy(() => import('@/pages/Contact').then((m) => ({ default: m.Contact })))
const Testimonials = lazy(() => import('@/pages/Testimonials').then((m) => ({ default: m.Testimonials })))

function PageLoader() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-accent border-t-transparent rounded-full animate-spin" />
        <span className="font-secondary uppercase tracking-wider text-sm text-gray-400">Loading...</span>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Suspense fallback={<PageLoader />}><Home /></Suspense>} />
          <Route path="/about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
          <Route path="/classes" element={<Suspense fallback={<PageLoader />}><Classes /></Suspense>} />
          <Route path="/membership" element={<Suspense fallback={<PageLoader />}><Membership /></Suspense>} />
          <Route path="/trainers" element={<Suspense fallback={<PageLoader />}><Trainers /></Suspense>} />
          <Route path="/contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
          <Route path="/testimonials" element={<Suspense fallback={<PageLoader />}><Testimonials /></Suspense>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
