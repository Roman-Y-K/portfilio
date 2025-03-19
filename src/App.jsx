import { lazy, Suspense } from 'react';
import LazyLoad from 'react-lazyload';

const HeroSection = lazy(() => import('./sections/HeroSection'));
const ServicesSection = lazy(() => import('./sections/ServicesSection'));
const PortfolioSection = lazy(() => import('./sections/PortfolioSection'));
const ContsctsSection = lazy(() => import('./sections/ContsctsSection'));

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={'loading...'}>
        <LazyLoad height={'100vh'} offset={-100}>
          <HeroSection />
        </LazyLoad>
      </Suspense>
      <Suspense fallback={'loading...'}>
        <LazyLoad height={'100vh'} offset={-100}>
          <ServicesSection />
        </LazyLoad>
      </Suspense>
      <Suspense fallback={'loading...'}>
        <LazyLoad height={'100vh'} offset={-100}>
          <PortfolioSection />
        </LazyLoad>
      </Suspense>
      <Suspense fallback={'loading...'}>
        <LazyLoad height={'100vh'} offset={-100}>
          <ContsctsSection />
        </LazyLoad>
      </Suspense>
    </div>
  );
};

export default App;
