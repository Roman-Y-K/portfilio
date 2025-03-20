import HeroSection from './sections/HeroSection';
import ServicesSection from './sections/ServicesSection';
import PortfolioSection from './sections/PortfolioSection';
import ContactsSection from './sections/ContactsSection';

const App = () => {
  return (
    <div className="container">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactsSection />
    </div>
  );
};

export default App;
