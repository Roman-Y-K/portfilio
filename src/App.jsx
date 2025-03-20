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
    </div>
  );
};

export default App;
