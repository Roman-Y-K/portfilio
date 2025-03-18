import { useState } from 'react';

import PortfolioList from '../components/portfolio/PortfolioList';
import PortfolioProgress from '../components/portfolio/PortfolioProgress';

const PortfolioSection = () => {
  const [progress, setProgress] = useState(0.25);

  return (
    <section className="portfolio-section">
      <PortfolioProgress progress={progress} />
      <PortfolioList setProgress={setProgress} />
    </section>
  );
};

export default PortfolioSection;
