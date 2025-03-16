import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

const App = () => {
  return (
    <div className="container">
      <section>
        <Hero id="#hero" />
      </section>
      <section>
        <Services id="#services" />
      </section>
      <section>
        <Portfolio id="#portfolio" />
      </section>
      <section>
        <Contact id="#contact" />
      </section>
    </div>
  );
};

export default App;
