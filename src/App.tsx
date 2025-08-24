import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Acceptances from './components/Acceptances';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Press from './components/Press';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TypingBackground from './components/TypingBackground';

function App() {
  return (
    <div className="relative bg-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-brand-light/20 to-white" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-brand-primary/20 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-80 w-80 rounded-full bg-brand-dark/20 blur-3xl" />
      </div>
      <TypingBackground />
      <div className="relative z-10">
        <Header />
        <main>
          {/* Zone 1: Hero */}
          <section className="min-h-screen flex flex-col">
            <Hero />
          </section>

          {/* Zone 2: About & Services */}
          <section className="min-h-screen py-2">
            <About />
            <Services />
          </section>

          {/* Zone 3: Credibility */}
          <section className="min-h-screen py-2">
            <Acceptances />
            <Testimonials />
          </section>

          {/* Zone 4: Action */}
          <section className="min-h-screen py-4">
            <Press />
            <Contact />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;