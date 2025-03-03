import Hero from './components/hero/Hero';
import Portfolio from './components/portfolio/Portfolio';

const App = () => {
  return (
    <div className="container">
      <section>
        <Hero id="#hero" />
      </section>
      <section>
        <Portfolio id="#portfolio" />
      </section>
    </div>
  );
};

export default App;
