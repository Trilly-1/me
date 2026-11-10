import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Leadership from './components/Leadership.jsx'
import Certifications from './components/Certifications.jsx'
import Skills from './components/Skills.jsx'
import Writing from './components/Writing.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Projects />
        <Leadership />
        <Certifications />
        <Skills />
        <Writing />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
