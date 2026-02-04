import Layout from './components/Layout';
import Hero from './sections/Hero';
import About from './sections/About';
import HorizontalProjects from './sections/HorizontalProjects';
import Skills from './sections/Skills';
import Footer from './sections/Footer';

function App() {
  return (
    <Layout>
        <Hero />
        <About />
        <HorizontalProjects />
        <Skills />
        <Footer />
    </Layout>
  )
}

export default App
