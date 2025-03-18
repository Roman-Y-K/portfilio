import { useRef, useState } from 'react';
import { useInView } from 'motion/react';

import ServicesList from '../components/services/ServicesList';
import ServiceDetails from '../components/services/ServiceDetails';

const ServicesSection = () => {
  const [activeServiceId, setActiveServiceId] = useState(1);

  const ref = useRef();
  const isInView = useInView(ref, { margin: '-150px' });

  return (
    <section className="services-section" ref={ref}>
      <ServicesList
        isInView={isInView}
        activeId={activeServiceId}
        setActiveId={setActiveServiceId}
      />
      <ServiceDetails isInView={isInView} activeServiceId={activeServiceId} />
    </section>
  );
};

export default ServicesSection;
