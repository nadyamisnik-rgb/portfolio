import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BackToTop } from './components/BackToTop'
import { CustomCursor } from './components/CustomCursor'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Loader } from './components/Loader'
import { RouteTransition } from './components/RouteTransition'
import { SceneBackground } from './components/SceneBackground'
import { SmoothScroll } from './components/SmoothScroll'
import { AboutPage } from './pages/About'
import { ContactPage } from './pages/Contact'
import { HomePage } from './pages/Home'
import { NotFoundPage } from './pages/NotFound'
import { ProjectPage } from './pages/Project'
import { WorkPage } from './pages/Work'

export default function App() {
  return (
    <BrowserRouter>
      <SmoothScroll />
      <SceneBackground />
      <CustomCursor />
      <Loader>
        <RouteTransition>
          <div className="relative z-10">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/work/:slug" element={<ProjectPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
          </div>
          <BackToTop />
        </RouteTransition>
      </Loader>
    </BrowserRouter>
  )
}
