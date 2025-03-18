// import Hero from './components/hero/Hero';
// import Services from './components/services/Services';
// import Portfolio from './components/portfolio/Portfolio';
// import Contact from './components/contact/Contact';

import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import ContsctsSection from './sections/ContsctsSection';

const App = () => {
  return (
    <div className="container">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ContsctsSection />
      {/* <section>
        <Services id="#services" />
      </section>
      <section>
        <Portfolio id="#portfolio" />
      </section>
      <section id="contact">
        <Contact />
      </section> */}
    </div>
  );
};

export default App;
